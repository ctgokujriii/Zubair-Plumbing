import { site } from '@/lib/site';

export default function GoogleMapReviews() {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={site.mapsEmbedUrl}
        title={`${site.name} on Google Maps`}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
