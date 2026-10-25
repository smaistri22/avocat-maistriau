import React, { useState } from 'react';
import { LIVE_SITE_DATA } from '../../data/liveSiteData';
import { ChevronDown, Calendar, Phone } from 'lucide-react';

interface FAQPageProps {
  onOpenBooking: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenBooking }) => {
  const [openItems, setOpenItems] = useState<string[]>([
    'faq-1',
    'faq-5',
    'faq-9',
  ]);

  const toggle = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-[#F8F5EE] py-16 sm:py-24 border-b border-[#E2DBD0]">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#181615] mb-4">
            Foire aux Questions
          </h1>
          <p className="font-serif text-base sm:text-lg text-stone-600 max-w-xl mx-auto">
            Trouvez les réponses détaillées à vos questions relatives aux honoraires, au droit de la famille et aux baux à loyer.
          </p>
        </div>

        {/* 3 FAQ Groups */}
        <div className="space-y-12">
          {LIVE_SITE_DATA.faqGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-4">
              
              <h2 className="font-serif text-2xl font-semibold text-[#181615] pb-2 border-b border-[#E2DBD0]">
                {group.title}
              </h2>

              <div className="space-y-3">
                {group.items.map((item) => {
                  const isOpen = openItems.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      className="rounded-xl border border-[#E2DBD0] bg-[#FAF8F3] transition-all overflow-hidden"
                    >
                      <button
                        onClick={() => toggle(item.id)}
                        className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 transition-colors hover:bg-[#F2ECE1]"
                        aria-expanded={isOpen}
                      >
                        <span className="font-serif text-base sm:text-lg font-medium text-[#181615] leading-snug">
                          {item.question}
                        </span>
                        <div
                          className={`p-1 rounded-full text-stone-500 transition-transform duration-200 shrink-0 ${
                            isOpen ? 'rotate-180 bg-[#E8E2D5] text-[#181615]' : ''
                          }`}
                        >
                          <ChevronDown className="h-5 w-5" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-6 sm:px-6 pt-1 border-t border-[#EAE4D8] font-serif text-sm sm:text-base text-stone-800 leading-relaxed bg-[#FFFDF9]">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 rounded-2xl bg-[#FAF8F3] border border-[#E2DBD0] p-8 text-center space-y-4">
          <h3 className="font-serif text-2xl font-normal text-[#181615]">
            Une question reste sans réponse ?
          </h3>
          <p className="font-serif text-sm text-stone-600 max-w-md mx-auto">
            Contactez directement le cabinet pour une consultation d'orientation personnalisée.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 rounded-full bg-[#181615] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] hover:bg-stone-800"
            >
              <Calendar className="h-4 w-4" />
              <span>Prendre rendez-vous (125 € TTC)</span>
            </button>
            <a
              href={`tel:${LIVE_SITE_DATA.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 rounded-full border border-stone-400 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-stone-900 hover:border-stone-900"
            >
              <Phone className="h-4 w-4" />
              <span>{LIVE_SITE_DATA.contact.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
