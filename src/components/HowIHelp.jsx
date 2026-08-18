const before = [
  { step: 1, text: 'Customer finds you on Instagram' },
  { step: 2, text: 'Customer wants more information' },
  { step: 3, text: 'Searches Google for your business' },
  { step: 4, text: "Can't find enough information" },
  { step: 5, text: 'Customer leaves — and picks someone else', highlight: true },
];

const after = [
  { step: 1, text: 'Customer finds you on Instagram or Google' },
  { step: 2, text: 'Clicks your website link' },
  { step: 3, text: 'Sees your services, photos, prices' },
  { step: 4, text: 'Builds trust — your business looks professional' },
  { step: 5, text: 'Clicks WhatsApp — enquires or books', highlight: true },
];

export default function HowIHelp() {
  return (
    <section id="how-i-help" className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label reveal">The Problem</span>
          <h2 className="reveal reveal-delay-1 font-display font-extrabold text-neutral-900 text-3xl sm:text-4xl tracking-tight leading-tight">
            Your website should do<br /> more than look good.
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-neutral-500 text-lg leading-relaxed">
            Without a clear, professional website, you're losing customers who are
            actively looking for what you offer.
          </p>
        </div>

        {/* Before / After */}
        <div className="reveal reveal-delay-2 grid md:grid-cols-2 gap-8">
          {/* BEFORE */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-neutral-900 text-lg">Without a proper website</h3>
            </div>
            <ol className="space-y-3" aria-label="Customer journey without a website">
              {before.map((item) => (
                <li
                  key={item.step}
                  className={`flex items-start gap-3 text-sm leading-relaxed ${
                    item.highlight ? 'text-red-600 font-semibold' : 'text-neutral-600'
                  }`}
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-500 text-xs font-bold flex items-center justify-center mt-0.5">
                    {item.step}
                  </span>
                  {item.text}
                </li>
              ))}
            </ol>
          </div>

          {/* AFTER */}
          <div className="bg-accent-50 border border-accent-100 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-neutral-900 text-lg">With the right website</h3>
            </div>
            <ol className="space-y-3" aria-label="Customer journey with a website">
              {after.map((item) => (
                <li
                  key={item.step}
                  className={`flex items-start gap-3 text-sm leading-relaxed ${
                    item.highlight ? 'text-accent font-semibold' : 'text-neutral-600'
                  }`}
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-100 text-accent text-xs font-bold flex items-center justify-center mt-0.5">
                    {item.step}
                  </span>
                  {item.text}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Pull quote */}
        <div className="reveal reveal-delay-3 mt-10 bg-neutral-900 text-white rounded-2xl px-8 py-7 text-center">
          <p className="font-display font-bold text-xl sm:text-2xl leading-snug">
            "A website that doesn't generate enquiries is just<br className="hidden sm:block" /> an online brochure nobody asked for."
          </p>
          <p className="mt-3 text-neutral-400 text-sm">That's why every website I build is designed around your customers, not just your brand.</p>
        </div>
      </div>
    </section>
  );
}
