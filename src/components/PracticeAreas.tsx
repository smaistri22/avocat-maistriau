import React, { useState } from 'react';
import { 
  Users, 
  Handshake, 
  Home, 
  ScrollText, 
  Car, 
  ShieldAlert, 
  ChevronRight, 
  Check, 
  ArrowUpRight,
  Gavel
} from 'lucide-react';
import { PRACTICE_AREAS, PracticeArea } from '../data/legalData';

interface PracticeAreasProps {
  onSelectArea: (areaId: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectArea }) => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>(PRACTICE_AREAS[0].id);

  const activeArea = PRACTICE_AREAS.find((a) => a.id === selectedAreaId) || PRACTICE_AREAS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'famille':
        return <Users className="h-5 w-5" />;
      case 'mediation':
        return <Handshake className="h-5 w-5" />;
      case 'baux':
        return <Home className="h-5 w-5" />;
      case 'successions':
        return <ScrollText className="h-5 w-5" />;
      case 'roulage':
        return <Car className="h-5 w-5" />;
      case 'responsabilite':
        return <ShieldAlert className="h-5 w-5" />;
      default:
        return <Gavel className="h-5 w-5" />;
    }
  };

  return (
    <section id="expertises" className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#B58D3D] mb-3">
              Compétences Juridiques · Barreau de Bruxelles
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1523] [text-wrap:balance]">
              Nos domaines d'intervention.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Une expertise pointue et éprouvée par plus de trois décennies de pratique contentieuse et de négociation amiable en Belgique.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            <span>Bruxelles · Wallonie · Brabant</span>
          </div>
        </div>

        {/* Practice Areas Interactive Selector & Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Numbered Service List with active state (Clean Human Editorial Numbering) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {PRACTICE_AREAS.map((area) => {
              const isActive = area.id === selectedAreaId;
              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedAreaId(area.id)}
                  className={`text-left p-4 sm:p-5 rounded-xl border transition-all flex items-start justify-between gap-4 group ${
                    isActive
                      ? 'bg-[#0B1523] border-[#0B1523] text-white shadow-md'
                      : 'bg-[#FBFBFA] border-stone-200 text-slate-800 hover:border-amber-400/80 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`font-serif text-lg font-bold tabular-nums transition-colors ${
                        isActive ? 'text-amber-400' : 'text-slate-400 group-hover:text-amber-600'
                      }`}
                    >
                      {area.number}.
                    </span>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-base sm:text-lg font-bold">
                          {area.title}
                        </span>
                      </div>
                      <p
                        className={`text-xs mt-1 line-clamp-2 leading-relaxed ${
                          isActive ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        {area.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`p-2 rounded-lg shrink-0 mt-0.5 transition-colors ${
                      isActive ? 'bg-slate-800 text-amber-400' : 'bg-white text-slate-500 group-hover:text-amber-600 border border-stone-200'
                    }`}
                  >
                    {getIcon(area.id)}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Focus Card for the Active Practice Area */}
          <div className="lg:col-span-7 rounded-2xl bg-[#FBFBFA] border border-stone-200 p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col justify-between">
            <div>
              {/* Header of active practice card */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0B1523] text-amber-400">
                    {getIcon(activeArea.id)}
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-amber-700 uppercase">
                      {activeArea.badge}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1523]">
                      {activeArea.title}
                    </h3>
                  </div>
                </div>

                <div className="text-xs text-slate-500">
                  Juridiction : <strong className="text-slate-700">{activeArea.jurisdiction}</strong>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="py-6">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {activeArea.fullDesc}
                </p>
              </div>

              {/* Key Intervention Points */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                  Principales interventions & compétences :
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {activeArea.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                      <div className="p-0.5 rounded-full bg-amber-100 text-amber-800 shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real Case Scenarios */}
              <div className="mb-6 rounded-xl bg-white p-4 sm:p-5 border border-stone-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Situations fréquemment rencontrées :
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {activeArea.cases.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">·</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lawyer Quote for this area */}
              {activeArea.quote && (
                <div className="p-4 rounded-lg bg-amber-50/60 border border-amber-200/60 text-xs sm:text-sm text-amber-900 italic mb-6">
                  « {activeArea.quote} »
                </div>
              )}
            </div>

            {/* Bottom CTA for this specific area */}
            <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                Une question sur votre situation en <strong>{activeArea.title}</strong> ?
              </div>
              <button
                onClick={() => onSelectArea(activeArea.id)}
                className="flex items-center gap-2 rounded-md bg-[#0B1523] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-slate-800 active:scale-[0.98]"
              >
                <span>Consulter sur ce sujet</span>
                <ArrowUpRight className="h-4 w-4 text-amber-400" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
