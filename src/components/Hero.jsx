import { whatsappLink } from '../config';

const trustItems = [
  { icon: '📱', label: 'Mobile-first' },
  { icon: '⚡', label: 'Fast loading' },
  { icon: '💬', label: 'WhatsApp-ready' },
  { icon: '🎯', label: 'Conversion-focused' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center hero-pattern pt-16"
      aria-label="Hero"
    >
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(26,86,219,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center py-20 sm:py-28">
        {/* Eyebrow */}
        <div className="reveal inline-flex items-center gap-2 bg-accent-50 border border-accent-200 text-accent-500 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse-slow" />
          Available for new projects
        </div>

        {/* Headline */}
        <h1 className="reveal reveal-delay-1 font-display font-extrabold text-neutral-900 leading-[1.07] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)' }}
        >
          I Build Websites That Turn<br className="hidden sm:block" />
          <span className="text-accent"> Visitors Into Customers.</span>
        </h1>

        {/* Supporting text */}
        <p className="reveal reveal-delay-2 text-neutral-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Modern websites and landing pages for businesses&nbsp;—&nbsp;designed to
          generate&nbsp;enquiries, bookings and sales.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 text-white font-semibold text-sm px-8 py-4 rounded-xl hover:bg-neutral-700 transition-colors duration-200 shadow-sm"
            id="hero-view-work-btn"
          >
            View My Work
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm px-8 py-4 rounded-xl hover:bg-[#1eb554] transition-colors duration-200 shadow-sm"
            id="hero-whatsapp-btn"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp Me
          </a>
        </div>

        {/* Credibility line */}
        <p className="reveal reveal-delay-4 text-neutral-400 text-sm tracking-wide">
          Websites &nbsp;·&nbsp; Landing Pages &nbsp;·&nbsp; Business Websites
        </p>

        {/* Trust Strip */}
        <div className="reveal reveal-delay-4 mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm"
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40" aria-hidden="true">
        <span className="text-xs text-neutral-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-neutral-400 to-transparent" />
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
