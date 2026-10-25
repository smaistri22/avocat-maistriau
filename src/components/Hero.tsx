import React from 'react';
import { Scale, ShieldCheck, Award, ArrowRight, CheckCircle2, PhoneCall, Calendar } from 'lucide-react';
import { CABINET_INFO } from '../data/legalData';

interface HeroProps {
  onOpenBooking: (subject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="accueil" className="relative overflow-hidden bg-gradient-to-b from-[#0B1523] via-[#0F1E33] to-[#142339] text-white pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Subtle architectural background grid / texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Ambient subtle warm glow */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Unboxed Metadata kicker (No pill encapsulation, clean typography) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400/95 mb-4">
              <span>Barreau de Bruxelles</span>
              <span aria-hidden="true" className="text-amber-500/40">·</span>
              <span>Médiateur Familial Agréé</span>
              <span aria-hidden="true" className="text-amber-500/40">·</span>
              <span>Prestation de serment en 1989</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-white mb-6 [text-wrap:balance]">
              Une solution juridique experte à taille humaine.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              Le <strong className="text-white font-semibold">Cabinet de Maître Philippe Maistriau</strong> vous conseille, 
              vous assiste et vous défend avec écoute, rigueur et pragmatisme. Spécialisé en 
              droit de la famille, divorce, successions, baux d’habitation et circulation routière à Bruxelles.
            </p>

            {/* Micro value proofs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Interlocuteur unique et direct sans délégation</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Double compétence : Procédure & Médiation amiable</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>1ère consultation sans chrono rigide (125 € TTC)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Honoraires convenus par écrit en toute clarté</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onOpenBooking()}
                className="flex items-center justify-center gap-2.5 rounded-md bg-[#B58D3D] px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-950 transition-all hover:bg-[#C89F4E] hover:shadow-xl active:scale-[0.98] w-full sm:w-auto text-center"
              >
                <Calendar className="h-4 w-4" />
                <span>Prendre consultation (125 € TTC)</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>

              <a
                href={`tel:${CABINET_INFO.phones.cabinet.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 rounded-md border border-slate-700/80 bg-slate-900/60 px-5 py-3.5 text-xs sm:text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white w-full sm:w-auto text-center"
              >
                <PhoneCall className="h-4 w-4 text-amber-400" />
                <span>{CABINET_INFO.phones.cabinet}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Prestigious Law Shield & Cabinet Emblem */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-xl border border-slate-700/60 bg-gradient-to-br from-[#122035]/90 via-[#0e192a]/95 to-[#0b1422] p-8 shadow-2xl backdrop-blur-sm">
              
              {/* Crest Header */}
              <div className="flex flex-col items-center text-center pb-6 border-b border-slate-800">
                
                {/* SVG Emblem of Law & Justice */}
                <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-[#9C762E] via-[#B58D3D] to-[#E3C379] p-0.5 shadow-lg">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0B1523]">
                    <Scale className="h-10 w-10 text-amber-400" />
                  </div>
                </div>

                <div className="font-serif text-2xl font-bold tracking-tight text-white mb-1">
                  Maître Philippe Maistriau
                </div>
                <div className="text-xs uppercase tracking-widest text-amber-400/90 font-medium">
                  Avocat & Médiateur Agréé
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Bruxelles · Etterbeek (Montgomery)
                </div>
              </div>

              {/* Verified Legal Accreditations */}
              <div className="py-6 space-y-4 text-xs">
                
                <div className="flex items-start gap-3">
                  <div className="rounded p-1.5 bg-slate-800/80 text-amber-400 shrink-0">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">Ordre des Avocats du Barreau de Bruxelles</div>
                    <div className="text-slate-400 text-[11px] leading-relaxed">
                      Inscrit au tableau de l'Ordre français des avocats depuis 1989. Plus de 35 années de pratique juridique continue.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded p-1.5 bg-slate-800/80 text-amber-400 shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">Commission Fédérale de Médiation (CFM)</div>
                    <div className="text-slate-400 text-[11px] leading-relaxed">
                      Médiateur agréé en matières familiales et civiles par le Service Public Fédéral Justice de Belgique.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded p-1.5 bg-slate-800/80 text-amber-400 shrink-0">
                    <Scale className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">Cabinet Indépendant & Proche</div>
                    <div className="text-slate-400 text-[11px] leading-relaxed">
                      Structure à dimension humaine favorisant une relation directe de confiance, une grande réactivité et un suivi sur-mesure.
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Callout */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Boulevard Saint-Michel 11</span>
                <span className="text-amber-400 font-medium">Métro Montgomery</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Proof & Credentials Strip Below Hero Split */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-800/80 pt-10">
          
          <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 mb-1 tabular-nums">
              1989
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">Barreau de Bruxelles</div>
            <div className="text-xs text-slate-400 mt-1">Prestation de serment et 35+ ans d'expérience</div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 mb-1">
              Agréé CFM
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">Médiateur Familial</div>
            <div className="text-xs text-slate-400 mt-1">Accords amiables homologués en justice</div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 mb-1 tabular-nums">
              125 € TTC
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">1ère Consultation</div>
            <div className="text-xs text-slate-400 mt-1">Sans limite stricte de temps pour analyser vos pièces</div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 mb-1">
              Montgomery
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">Cabinet à Etterbeek</div>
            <div className="text-xs text-slate-400 mt-1">Boulevard Saint-Michel 11, accès métro immédiat</div>
          </div>

        </div>

      </div>
    </section>
  );
};
