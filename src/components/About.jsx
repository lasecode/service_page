const skills = [
  'HTML & CSS', 'JavaScript', 'React', 'Tailwind CSS',
  'Responsive Design', 'Git', 'SEO Basics', 'Next.js',
];

const businesses = [
  { icon: '💇', label: 'Salons & Beauty' },
  { icon: '🏫', label: 'Private Schools' },
  { icon: '🏠', label: 'Real Estate' },
  { icon: '🍽️', label: 'Restaurants' },
  { icon: '🛒', label: 'E-commerce' },
  { icon: '⚕️', label: 'Health & Wellness' },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Text */}
          <div>
            <span className="section-label reveal">About</span>
            <h2 className="reveal reveal-delay-1 font-display font-extrabold text-neutral-900 text-3xl sm:text-4xl tracking-tight leading-tight mb-6">
              Built by a developer who cares about the business behind the website.
            </h2>
            <div className="space-y-4 text-neutral-500 leading-relaxed">
              <p className="reveal reveal-delay-2">
                I design and build modern, fast websites with a focus on usability,
                performance and achieving real business goals. I don't just build
                websites that look good — I build websites that make it easier for
                customers to choose you.
              </p>
              <p className="reveal reveal-delay-3">
                I work with small and medium-sized businesses across Nigeria — salons,
                schools, restaurants, property companies and local service providers
                — helping them build a credible online presence that generates real
                enquiries and bookings.
              </p>
            </div>

            {/* Businesses I work with */}
            <div className="reveal reveal-delay-3 mt-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-4">Businesses I work with</p>
              <div className="flex flex-wrap gap-2">
                {businesses.map((b) => (
                  <span
                    key={b.label}
                    className="inline-flex items-center gap-1.5 bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-1.5 rounded-full border border-neutral-200"
                  >
                    <span aria-hidden="true">{b.icon}</span>
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Skills */}
          <div className="reveal reveal-delay-2">
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-7">
              <h3 className="font-display font-bold text-neutral-900 text-lg mb-5">
                Technical Stack
              </h3>
              <p className="text-neutral-400 text-xs mb-5 leading-relaxed">
                I use modern, industry-standard tools to build fast, reliable websites.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium text-neutral-700 bg-white border border-neutral-200 px-3 py-1.5 rounded-lg shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Availability indicator */}
              <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse-slow flex-shrink-0" />
                <span className="text-sm text-neutral-600">
                  Currently available for new projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
