// stage.ts: one WebGL canvas whose camera glides between fixed stops as tour.pos changes.
import * as THREE from 'three';

export type Stop = {
  /** the point the camera looks at */
  target: [number, number, number];
  /** direction from the target to the camera (any length) */
  dir: [number, number, number];
  /** distance from the target to the camera */
  dist: number;
};

export type Track = <T extends { dispose: () => void }>(o: T) => T;
/** called every frame: t = seconds since mount, pos = tour.pos, reduced = reduced motion */
export type Update = (t: number, pos: number, reduced: boolean) => void;

export type StageOptions = {
  /** the sticky box; the canvas is inserted as its first child */
  wrap: HTMLElement;
  stops: Stop[];
  getPos: () => number;
  /** add objects to the scene here; wrap every geometry, material and texture in track() */
  build: (scene: THREE.Scene, track: Track, camera: THREE.PerspectiveCamera) => Update | void;
  fov?: number;
  /** shift the picture so it clears the text: fraction of width / height, see setViewOffset */
  offsetDesktop?: [number, number];
  offsetPhone?: [number, number];
  /** max device pixel ratio on phones / on desktop */
  dpr?: [number, number];
  /** gentle idle sway of the camera, radians. 0 switches it off */
  sway?: number;
};

export function mountStage(o: StageOptions): () => void {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch {
    return () => {}; // no WebGL: the HTML panels and the CSS background still carry the section
  }
  const dpr = o.dpr ?? [1.5, 2];
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, coarse ? dpr[0] : dpr[1]));
  renderer.setClearColor(0x000000, 0);
  const el = renderer.domElement;
  el.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;';
  el.setAttribute('aria-hidden', 'true');
  o.wrap.prepend(el);
  o.wrap.classList.add('has-3d');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(o.fov ?? 38, 1, 0.1, 400);
  const disposables: { dispose: () => void }[] = [];
  const track: Track = (x) => {
    disposables.push(x);
    return x;
  };
  const update = o.build(scene, track, camera);

  const stops = o.stops.map((s) => ({
    t: new THREE.Vector3(...s.target),
    dir: new THREE.Vector3(...s.dir).normalize(),
    dist: s.dist,
  }));
  // hold still for the first 15% and last 15% of each step, glide in between
  const smooth = (x: number) => {
    const k = Math.min(1, Math.max(0, (x - 0.15) / 0.7));
    return k * k * (3 - 2 * k);
  };

  let w = 1;
  let h = 1;
  const resize = () => {
    w = Math.max(1, o.wrap.clientWidth);
    h = Math.max(1, o.wrap.clientHeight);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const [ox, oy] = w >= 1024 ? (o.offsetDesktop ?? [-0.2, 0]) : (o.offsetPhone ?? [0, 0.18]);
    camera.setViewOffset(w, h, w * ox, h * oy, w, h);
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(o.wrap);
  resize();

  let pointerX = 0;
  const onMove = (e: PointerEvent) => {
    pointerX = (e.clientX / window.innerWidth) * 2 - 1;
  };
  if (!coarse && !reduced) window.addEventListener('pointermove', onMove, { passive: true });

  let visible = true;
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  });
  io.observe(o.wrap);

  const clock = new THREE.Clock();
  const up = new THREE.Vector3(0, 1, 0);
  const wantT = new THREE.Vector3();
  const wantP = new THREE.Vector3();
  const curT = new THREE.Vector3();
  const curP = new THREE.Vector3();
  const sway = o.sway ?? 0.07;
  let first = true;
  let raf = 0;

  const frame = () => {
    raf = requestAnimationFrame(frame);
    if (!visible || document.hidden) return;
    const t = clock.getElapsedTime();
    const pos = Math.min(stops.length - 1, Math.max(0, o.getPos()));
    if (update) update(t, pos, reduced);

    const i = Math.min(stops.length - 2, Math.floor(pos));
    const a = stops[i];
    const b = stops[i + 1];
    const f = smooth(pos - i);
    // on a tall, narrow screen pull the camera back so the subject still fits
    const fit = Math.max(1, Math.min(2.1, 1.25 / camera.aspect));
    wantT.lerpVectors(a.t, b.t, f);
    wantP.lerpVectors(a.dir, b.dir, f).normalize();
    if (!reduced && sway) wantP.applyAxisAngle(up, Math.sin(t * 0.25) * sway + pointerX * sway * 0.85);
    wantP.multiplyScalar((a.dist + (b.dist - a.dist) * f) * fit).add(wantT);
    const damp = reduced || first ? 1 : 0.07;
    first = false;
    curT.lerp(wantT, damp);
    curP.lerp(wantP, damp);
    camera.position.copy(curP);
    camera.lookAt(curT);
    renderer.render(scene, camera);
  };
  frame();

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    io.disconnect();
    window.removeEventListener('pointermove', onMove);
    disposables.forEach((d) => d.dispose());
    renderer.dispose();
    el.remove();
    o.wrap.classList.remove('has-3d');
  };
}
