import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQ_ITEMS, CABINET_INFO } from '../data/legalData';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-5']);

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredItems = activeCategory === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Toutes les questions' },
    { id: 'honoraires', label: 'Honoraires & Consultation' },
    { id: 'famille', label: 'Famille & Divorce' },
    { id: 'mediation', label: 'Médiation Agréée' },
    { id: 'baux', label: 'Baux & Loyers' },
    { id: 'roulage', label: 'Circulation & Roulage' },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FBFBFA] border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B58D3D] mb-3">
            Questions Fréquentes · Guide Pratique
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1523] mb-6 [text-wrap:balance]">
            Réponses claires à vos interrogations juridiques.
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Pour vous aider à aborder sereinement votre démarche, voici les réponses aux questions 
            les plus fréquentes posées au cabinet de Maître Philippe Maistriau.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Filter Controls conforming to rule 1.A) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl max-w-fit mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white text-slate-950 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-stone-200/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordions */}
        <div className="max-w-4xl space-y-3">
          {filteredItems.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="rounded-xl bg-white border border-stone-200 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 transition-colors hover:bg-stone-50"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#0B1523]">
                    {item.question}
                  </span>
                  <div
                    className={`p-1 rounded-full text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-stone-100 text-amber-800' : ''
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 border-t border-stone-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unanswered Question Help Banner */}
        <div className="mt-12 max-w-4xl p-6 rounded-xl bg-stone-100 border border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="h-5 w-5 text-amber-700 shrink-0" />
            <div className="text-xs sm:text-sm text-slate-700">
              Vous avez une question spécifique sur votre dossier qui n'apparaît pas ici ?
            </div>
          </div>
          <a
            href={`tel:${CABINET_INFO.phones.cabinet.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#0B1523] hover:text-amber-700 transition-colors shrink-0"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span>Appeler le {CABINET_INFO.phones.cabinet}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
