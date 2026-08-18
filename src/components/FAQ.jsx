import { useState } from 'react';

const faqs = [
  {
    id: "how-long",
    question: "How long does a website take?",
    answer:
      "Most landing pages and simple business websites take 5\u201310 business days once I have all your content (logo, photos, text). More complex websites with multiple pages may take longer. We\u2019ll agree on a realistic timeline before we start.",
  },
  {
    id: "whatsapp",
    question: "Can you connect the website to WhatsApp?",
    answer:
      "Yes \u2014 I can add WhatsApp buttons and chat widgets that open a conversation with your number directly. This is one of the most effective ways to convert visitors, and I include it in most websites I build.",
  },
  {
    id: "mobile",
    question: "Will the website work on phones?",
    answer:
      "Absolutely. Every website I build is mobile-first \u2014 it\u2019s designed for phones first, then scaled up to tablets and desktops. Most of your customers will visit from their phone, so this is non-negotiable.",
  },
  {
    id: "hosting",
    question: "Can you help me with the domain and hosting?",
    answer:
      "Yes. I can guide you through registering a domain name and setting up hosting. If you already have a domain, I can connect it to your new website. I\u2019ll make the technical parts as simple as possible.",
  },
  {
    id: "redesign",
    question: "Can you redesign my existing website?",
    answer:
      "Yes. If you have an existing website that feels outdated, slow or isn\u2019t converting customers, I can redesign and rebuild it. Just share the link and I\u2019ll take a look.",
  },
  {
    id: "landing-page",
    question: "Can you build a landing page for a specific service or product?",
    answer:
      "Yes. A landing page is a single focused page designed around one goal \u2014 a specific service, a product launch, a promotion or a booking. They\u2019re great for running ads or Instagram campaigns.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label reveal">FAQ</span>
          <h2 className="reveal reveal-delay-1 font-display font-extrabold text-neutral-900 text-3xl sm:text-4xl tracking-tight">
            Common questions
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-neutral-500">
            Things business owners usually ask before getting started.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} bg-white border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-accent-200 shadow-sm' : 'border-neutral-200'
                }`}
                id={`faq-${faq.id}`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-neutral-50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-display font-semibold text-neutral-900 text-base leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-accent-50 border-accent-200' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <svg className={`w-3 h-3 ${isOpen ? 'text-accent' : 'text-neutral-400'}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M6 1v10M1 6h10" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`faq-answer ${isOpen ? 'open' : ''}`}
                  role="region"
                >
                  <p className="px-6 pb-5 text-neutral-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
