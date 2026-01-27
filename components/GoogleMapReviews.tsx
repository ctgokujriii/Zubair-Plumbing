'use client';

export default function GoogleMapReviews() {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.905543148459!2d74.28118897442545!3d31.526754146828793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190393440bbb89%3A0x132835ac0809e347!2sZubair%20Plumbering%20Services!5e0!3m2!1sen!2s!4v1769466424986!5m2!1sen!2s"
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
