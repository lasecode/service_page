const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We talk about your business, your customers and what you want your website to achieve.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'I design a clean, professional website built around your customers and your goals.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'I develop a fast, responsive, mobile-friendly website ready for real customers.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'Your website goes live. I handle everything — hosting setup, domain connection and final checks.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="section-label reveal">How It Works</span>
          <h2 className="reveal reveal-delay-1 font-display font-extrabold text-neutral-900 text-3xl sm:text-4xl tracking-tight">
            Simple process.<br /> No unnecessary complexity.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} relative bg-white border border-neutral-200 rounded-2xl p-7`}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-full w-6 h-px bg-neutral-200 z-10"
                  aria-hidden="true"
                />
              )}

              {/* Number */}
              <span className="font-display font-extrabold text-4xl text-accent-100 leading-none select-none block mb-5">
                {step.number}
              </span>

              {/* Content */}
              <h3 className="font-display font-bold text-neutral-900 text-xl mb-2">
                {step.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
