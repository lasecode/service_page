import { CONFIG } from '../config';

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="section-label reveal">Selected Work</span>
          <h2 className="reveal reveal-delay-1 font-display font-extrabold text-neutral-900 text-3xl sm:text-4xl tracking-tight leading-tight">
            Projects built for real<br /> business goals.
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-neutral-500 text-lg leading-relaxed">
            Website concepts designed around real-world business use cases —
            salons, restaurants, property and more.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-7">
          {CONFIG.projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  return (
    <article
      className={`reveal reveal-delay-${delay} bg-white border border-neutral-200 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover`}
      id={`project-${project.id}`}
    >
      {/* Screenshot / Image */}
      <div className="relative overflow-hidden bg-neutral-100 aspect-[16/10]">
        <img
          src={project.image}
          alt={`${project.name} preview`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            // Fallback to a styled placeholder if screenshot not found
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
            const placeholder = document.createElement('div');
            placeholder.className = 'text-neutral-400 text-sm font-medium text-center p-8';
            placeholder.innerHTML = `<div class="text-4xl mb-3">${getCategoryEmoji(project.category)}</div><div>${project.name}</div>`;
            e.target.parentElement.appendChild(placeholder);
          }}
        />
        {/* Concept badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-neutral-700 text-xs font-semibold px-3 py-1 rounded-full border border-neutral-200">
          {project.type}
        </span>
        {/* Category pill */}
        <span className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-neutral-900 text-xl mb-2 leading-snug">
          {project.name}
        </h3>
        <p className="text-neutral-500 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-accent-500 bg-accent-50 border border-accent-100 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-neutral-900 text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-neutral-700 transition-colors duration-200"
            id={`view-live-${project.id}`}
            aria-label={`View live site: ${project.name}`}
          >
            View Live Site
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

function getCategoryEmoji(category) {
  const map = {
    'Beauty & Wellness': '💄',
    'Real Estate': '🏠',
    'Food & Hospitality': '🍽️',
    'Business': '💼',
    'Education': '🎓',
  };
  return map[category] || '🌐';
}
