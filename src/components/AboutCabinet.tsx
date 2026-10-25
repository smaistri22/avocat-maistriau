import React from 'react';
import { UserCheck, Compass, HeartHandshake, FileText, ArrowRight, Shield } from 'lucide-react';
import { CABINET_INFO } from '../data/legalData';

interface AboutCabinetProps {
  onOpenBooking: () => void;
}

export const AboutCabinet: React.FC<AboutCabinetProps> = ({ onOpenBooking }) => {
  return (
    <section id="cabinet" className="py-20 lg:py-28 bg-[#FBFBFA] border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B58D3D] mb-3">
            Le Cabinet · Présentation & Valeurs
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1523] mb-6 [text-wrap:balance]">
            Un exercice indépendant et engagé du droit à Bruxelles.
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Depuis sa prestation de serment au Barreau de Bruxelles en 1989, Maître Philippe Maistriau 
            a fait le choix d’une structure indépendante, réactive et profondément humaine. 
            Loin des structures anonymes, chaque dossier fait l’objet d'un engagement personnel, 
            d'une analyse technique rigoureuse et d’une écoute sans concession.
          </p>
        </div>

        {/* 2-Column Editorial Grid: The Practitioner & The Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Left Column: Focus on Me Philippe Maistriau */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl bg-white p-8 sm:p-10 border border-stone-200 shadow-sm">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
                Parcours & Expérience
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1523] mb-5">
                Maître Philippe Maistriau
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Inscrit au Barreau de Bruxelles depuis plus de trois décennies, Maître Philippe Maistriau 
                  a développé une solide maîtrise des contentieux civils, avec une prédilection affirmée 
                  pour le <strong>droit de la famille</strong>, le <strong>droit des baux</strong> et 
                  le <strong>droit des successions</strong>.
                </p>
                <p>
                  Parallèlement à sa pratique judiciaire devant les cours et tribunaux, il a complété sa 
                  formation pour devenir <strong>Médiateur Familial Agréé</strong> par la Commission Fédérale 
                  de Médiation. Cette double casquette constitue une force majeure : elle lui permet d'évaluer 
                  lucidement si une issue négociée amiable est envisageable et bénéfique, ou si une défense 
                  procédurale ferme devant le juge s'impose.
                </p>
                <p>
                  À chaque étape, vous dialoguez directement avec l'avocat qui traitera effectivement votre dossier 
                  et vous représentera à l’audience.
                </p>
              </div>
            </div>

            {/* Quote callout */}
            <div className="mt-8 pt-6 border-t border-stone-100 flex items-start gap-4 text-sm italic text-slate-800">
              <span className="font-serif text-4xl text-[#B58D3D] leading-none select-none">“</span>
              <p className="leading-snug">
                Un bon conseil juridique commence par le temps qu'on prend à vous écouter. 
                Comprendre vos craintes et vos objectifs est le socle d'une stratégie efficace.
              </p>
            </div>
          </div>

          {/* Right Column: The 4 Core Commitments */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-4">
              
              <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-sm transition-all hover:border-amber-400/60">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-amber-50 text-amber-800 shrink-0">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#0B1523] mb-1">
                      Une relation directe et personnalisée
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Aucune dilution des responsabilités ni transmission de votre dossier à des stagiaires de passage. 
                      Maître Maistriau assure lui-même l'étude, la rédaction des conclusions et les plaidoiries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-sm transition-all hover:border-amber-400/60">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-amber-50 text-amber-800 shrink-0">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#0B1523] mb-1">
                      Pragmatisme & Clarté Stratégique
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Un langage juridique accessible, dénué de jargon inutile. Vous êtes informé des chances réelles 
                      de succès, des délais procéduraux prévisibles et des risques éventuels avant toute décision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-sm transition-all hover:border-amber-400/60">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-amber-50 text-amber-800 shrink-0">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#0B1523] mb-1">
                      Culture de l'accord & Médiation
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Lorsque les liens familiaux ou humains sont en jeu, l'affrontement judiciaire systématique 
                      peut être dévastateur. Nous explorons toujours la voie d'un accord équilibré avant de judiciariser le litige.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-sm transition-all hover:border-amber-400/60">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-amber-50 text-amber-800 shrink-0">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#0B1523] mb-1">
                      Rigueur déontologique & Secret professionnel
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Respect strict des règles de l’Ordre français des avocats du Barreau de Bruxelles. 
                      Confidentialité absolue de vos échanges et défense loyale de vos intérêts.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom action banner */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-slate-700">
              <span>Besoin d'un premier avis juridique clair sur votre litige ?</span>
              <button
                onClick={onOpenBooking}
                className="font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1"
              >
                <span>Fixer un entretien</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
