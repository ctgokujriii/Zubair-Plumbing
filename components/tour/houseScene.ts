// houseScene.ts: a two-storey house drawn like a blueprint, front and right walls
// removed so the plumbing shows. Loaded with import() from HouseTour.
import * as THREE from 'three';
import { mountStage, type Stop, type Track } from './stage';

// 0 hero, 1 leak, 2 bathroom, 3 kitchen, 4 water tanks, 5 geyser, 6 emergency
export const STOPS: Stop[] = [
  { target: [0, 2.6, 0], dir: [0.6, 0.35, 0.8], dist: 17 },
  { target: [1.2, 2.0, -1.9], dir: [0.3, 0.15, 1], dist: 7 },
  { target: [1.7, 3.5, -1.4], dir: [0.4, 0.3, 1], dist: 6.5 },
  { target: [-1.4, 1.2, -1.5], dir: [-0.2, 0.3, 1], dist: 6.5 },
  { target: [1.6, 5.9, -0.8], dir: [0.6, 0.4, 0.8], dist: 7.5 },
  { target: [2.5, 1.8, -1.7], dir: [0.5, 0.2, 1], dist: 6 },
  { target: [0, 2.6, 0], dir: [-0.6, 0.3, 0.8], dist: 18 },
];

type Group = 'leak' | 'bath' | 'kitchen' | 'tank' | 'geyser';
// what is in focus at each stop; null means everything at full strength
const FOCUS: (Group[] | null)[] = [null, ['leak'], ['bath'], ['kitchen'], ['tank'], ['geyser'], null];

const BLUE = 0x3b82f6;
const EDGE = 0x60a5fa;

function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  const r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  r.addColorStop(0, 'rgba(255,255,255,1)');
  r.addColorStop(0.35, 'rgba(255,255,255,0.35)');
  r.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = r;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

const v = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

function build(scene: THREE.Scene, track: Track) {
  scene.add(new THREE.HemisphereLight(0xdbeafe, 0x0b1220, 1.0));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6);
  sun.position.set(5, 8, 6);
  scene.add(sun);

  // every material that dims when its part is out of focus, with its full opacity
  const dimmable: { mat: THREE.Material & { opacity: number }; full: number; group: Group }[] = [];
  const mesh = (
    geo: THREE.BufferGeometry,
    params: THREE.MeshStandardMaterialParameters,
    pos: [number, number, number],
    opts: { group?: Group; edge?: number; edgeOpacity?: number } = {},
  ) => {
    const mat = track(new THREE.MeshStandardMaterial({ transparent: true, ...params }));
    const m = new THREE.Mesh(track(geo), mat);
    m.position.set(...pos);
    if (opts.group) dimmable.push({ mat, full: mat.opacity, group: opts.group });
    if (opts.edge !== undefined) {
      const lm = track(new THREE.LineBasicMaterial({ color: opts.edge, transparent: true, opacity: opts.edgeOpacity ?? 0.5 }));
      m.add(new THREE.LineSegments(track(new THREE.EdgesGeometry(geo)), lm));
      if (opts.group) dimmable.push({ mat: lm, full: lm.opacity, group: opts.group });
    }
    scene.add(m);
    return m;
  };

  // shell: three slabs, back and left walls, ground
  for (const y of [0, 2.6, 5.2]) mesh(new THREE.BoxGeometry(6, 0.08, 4), { color: 0x1e293b, opacity: 0.9 }, [0, y, 0], { edge: EDGE });
  const wall = { color: 0x334155, opacity: 0.35, depthWrite: false };
  mesh(new THREE.BoxGeometry(6, 5.2, 0.06), wall, [0, 2.6, -2], { edge: EDGE });
  mesh(new THREE.BoxGeometry(0.06, 5.2, 4), wall, [-3, 2.6, 0], { edge: EDGE });
  const ground = new THREE.Mesh(track(new THREE.CircleGeometry(9, 64)), track(new THREE.MeshBasicMaterial({ color: 0x0b1220 })));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.01;
  scene.add(ground);

  const fixture = { color: 0xe2e8f0, roughness: 0.4 };
  mesh(new THREE.BoxGeometry(0.4, 0.4, 0.6), fixture, [1.8, 2.84, -1.4], { group: 'bath' });
  mesh(new THREE.BoxGeometry(0.4, 0.5, 0.2), fixture, [1.8, 3.1, -1.8], { group: 'bath' });
  mesh(new THREE.BoxGeometry(0.5, 0.15, 0.4), fixture, [0.6, 3.5, -1.75], { group: 'bath' });
  mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.05, 20), fixture, [2.6, 4.7, -1.7], { group: 'bath' });
  mesh(new THREE.BoxGeometry(2.2, 0.9, 0.6), { color: 0x475569 }, [-1.6, 0.49, -1.65], { group: 'kitchen', edge: EDGE });
  mesh(new THREE.BoxGeometry(0.6, 0.05, 0.4), fixture, [-1.6, 0.96, -1.65], { group: 'kitchen' });
  mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.8, 32), fixture, [2.5, 1.8, -1.75], { group: 'geyser' });
  mesh(new THREE.CylinderGeometry(0.7, 0.7, 1.1, 40), { color: 0x1d4ed8, roughness: 0.5 }, [1.6, 5.85, -0.8], { group: 'tank', edge: 0x93c5fd });
  mesh(new THREE.BoxGeometry(0.5, 0.4, 0.4), { color: 0x64748b }, [3.6, 0.2, 1.2], { group: 'tank' });
  mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.3, 20), { color: 0x64748b }, [3.6, 0.2, 1.45], { group: 'tank' }).rotation.x = Math.PI / 2;

  // pipes: straight runs joined at the listed points
  const pipe = (points: THREE.Vector3[], color: number, r: number, group: Group) => {
    const path = new THREE.CurvePath<THREE.Vector3>();
    for (let i = 0; i < points.length - 1; i++) path.add(new THREE.LineCurve3(points[i], points[i + 1]));
    mesh(new THREE.TubeGeometry(path, points.length * 8, r, 6, false), { color, roughness: 0.45 }, [0, 0, 0], { group });
    return path;
  };
  const riser = pipe([v(3.6, 0.3, 1.2), v(3.2, 0.3, 1.2), v(3.2, 6.5, 1.2), v(3.2, 6.5, -0.8), v(1.6, 6.5, -0.8), v(1.6, 6.4, -0.8)], BLUE, 0.045, 'tank');
  const coldMain = pipe([v(1.6, 5.3, -0.8), v(1.6, 5.0, -0.8), v(1.2, 5.0, -1.9), v(1.2, 0.4, -1.9)], BLUE, 0.045, 'leak');
  pipe([v(0.6, 3.3, -1.9), v(2.6, 3.3, -1.9), v(2.6, 4.7, -1.9)], BLUE, 0.035, 'bath');
  pipe([v(-1.6, 1.0, -1.9), v(2.5, 1.0, -1.9), v(2.5, 1.4, -1.9)], BLUE, 0.035, 'kitchen');
  pipe([v(2.5, 2.2, -1.85), v(2.5, 3.1, -1.85), v(2.7, 3.1, -1.85), v(2.7, 4.6, -1.85)], 0xf59e0b, 0.035, 'geyser');
  pipe([v(1.8, 2.6, -1.4), v(1.8, -0.4, -1.4), v(4.5, -0.6, -1.4)], 0x94a3b8, 0.07, 'bath');
  pipe([v(-1.6, 0.4, -1.65), v(-1.6, -0.4, -1.65), v(1.8, -0.45, -1.5)], 0x94a3b8, 0.07, 'kitchen');

  // water: two glows up the riser, two down the cold main
  const glow = track(glowTexture());
  const sprite = (color: number, size: number) => {
    const s = new THREE.Sprite(track(new THREE.SpriteMaterial({ map: glow, color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })));
    s.scale.setScalar(size);
    scene.add(s);
    return s;
  };
  const flows = [
    { path: riser, phase: 0 },
    { path: riser, phase: 0.5 },
    { path: coldMain, phase: 0.2 },
    { path: coldMain, phase: 0.7 },
  ].map((f) => ({ ...f, s: sprite(0x60a5fa, 0.45) }));

  // the leak: red and pulsing at stops 0 and 1, then fixed (steady blue)
  const leak = sprite(0xef4444, 1.4);
  leak.position.set(1.2, 2.0, -1.9);
  const red = new THREE.Color(0xef4444);
  const blue = new THREE.Color(BLUE);
  let fixedness = 0;

  dimmable.forEach((d) => (d.mat.opacity = d.full));
  const ease = (cur: number, target: number) => cur + (target - cur) * 0.08;

  return (t: number, pos: number, reduced: boolean) => {
    const active = Math.round(pos);
    const focus = FOCUS[active];
    for (const d of dimmable) {
      const target = !focus || focus.includes(d.group) ? d.full : 0.35 * d.full;
      d.mat.opacity = reduced ? target : ease(d.mat.opacity, target);
    }
    for (const f of flows) {
      const u = reduced ? f.phase : (f.phase + t * 0.12) % 1;
      f.s.position.copy(f.path.getPointAt(u));
    }
    const fixTarget = active >= 2 ? 1 : 0;
    fixedness = reduced ? fixTarget : ease(fixedness, fixTarget);
    (leak.material as THREE.SpriteMaterial).color.copy(red).lerp(blue, fixedness);
    const pulse = reduced ? 1 : 1 + Math.sin(t * 5) * 0.25 * (1 - fixedness);
    leak.scale.setScalar(1.4 * pulse * (1 - 0.4 * fixedness));
  };
}

export function mountScene(wrap: HTMLElement, getPos: () => number) {
  return mountStage({ wrap, stops: STOPS, getPos, build, offsetDesktop: [-0.2, 0], offsetPhone: [0, 0.2] });
}
