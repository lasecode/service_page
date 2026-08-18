const services = [
  {
    id: 'business-websites',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Business Websites',
    description:
      'Professional websites that give your business credibility and make it easy for customers to find your services, location and contact information.',
  },
  {
    id: 'landing-pages',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Landing Pages',
    description:
      'Focused pages designed around one goal — enquiries, bookings, admissions, sales or another clear conversion.',
  },
  {
    id: 'whatsapp-pages',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    title: 'WhatsApp Lead Pages',
    description:
      'Make it easy for visitors to move from your website straight into a WhatsApp conversation — the channel your customers already use.',
  },
  {
    id: 'redesigns',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Website Redesigns',
    description:
      'Modernize an outdated website and create a cleaner, faster experience that better represents your business and converts more customers.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="section-label reveal">Services</span>
          <h2 className="reveal reveal-delay-1 font-display font-extrabold text-neutral-900 text-3xl sm:text-4xl tracking-tight leading-tight">
            Websites built around<br /> your business.
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-neutral-500 text-lg leading-relaxed">
            Every website I build is designed with one goal: making it easier for
            customers to choose you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`card reveal reveal-delay-${i + 1} p-6 flex flex-col gap-4`}
              id={`service-${service.id}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-500 flex-shrink-0">
                {service.icon}
              </div>
              {/* Content */}
              <div>
                <h3 className="font-display font-bold text-neutral-900 text-lg mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
