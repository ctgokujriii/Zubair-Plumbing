import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

// The preview card WhatsApp, Facebook and others show when someone shares a
// link to the site. Without it a shared link arrived as bare text.
export const alt = `${site.name}: plumber in Lahore, open 24/7`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #dbeafe 100%)',
          color: '#111827',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 20,
              background: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="60" height="60" viewBox="0 0 24 24">
              <path
                d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div style={{ display: 'flex', fontSize: 56 }}>
            <span>Zubair&nbsp;</span>
            <span style={{ color: '#2563eb' }}>Plumbing Services</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 76, lineHeight: 1.1 }}>Plumber in Lahore, open 24/7</div>
          <div style={{ fontSize: 32, color: '#4b5563' }}>
            {`Family-run for ${site.businessYears}+ years · rated ${site.googleRating} on Google from ${site.googleReviewCount} reviews`}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignSelf: 'flex-start',
            background: '#2563eb',
            color: '#ffffff',
            fontSize: 40,
            padding: '16px 32px',
            borderRadius: 16,
          }}
        >
          {`Call or WhatsApp ${site.phoneDisplay}`}
        </div>
      </div>
    ),
    size
  );
}
