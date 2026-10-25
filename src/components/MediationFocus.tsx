import React from 'react';
import { Handshake, Check, X, ShieldCheck, HeartHandshake, FileCheck2, ArrowRight } from 'lucide-react';

interface MediationFocusProps {
  onOpenBooking: () => void;
}

export const MediationFocus: React.FC<MediationFocusProps> = ({ onOpenBooking }) => {
  return (
    <section id="mediation" className="py-20 lg:py-28 bg-[#0F1E33] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            Commission Fédérale de Médiation · SPF Justice
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 [text-wrap:balance]">
            La Médiation Familiale : bâtir l'avenir sans détruire le dialogue.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Lorsque la vie conjugale prend fin, les liens parentaux subsistent toujours. 
            En tant que <strong className="text-white">médiateur familial agréé</strong>, 
            Maître Philippe Maistriau offre un espace neutre, serein et strictement confidentiel 
            pour trouver ensemble des solutions équilibrées, pérennes et adaptées au rythme de vos enfants.
          </p>
        </div>

        {/* 2-Column Comparison: Procédure Classique vs Médiation Agréée */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Classical Court Battle */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-2">
                Voie Contentieuse Traditionnelle
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Le procès devant le Tribunal de la Famille
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Une décision imposée par un juge tiers sur base de conclusions écrites souvent blessantes et d'une confrontation formelle.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <X className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Délais souvent longs</strong> tributaires de l'engorgement des tribunaux (plusieurs mois ou années).</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Exacerbation des tensions</strong> : logique d'accusation où chacun cherche à prouver les fautes de l'autre.</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Souffrance collatérale des enfants</strong> pris en tenaille dans un conflit de loyauté destructeur.</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Coût financier cumulé</strong> élevé avec multiplication des actes, requêtes et vacations.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 text-xs text-slate-500">
              Indispensable lorsque le dialogue est totalement impossible ou en cas de violences/urgences graves.
            </div>
          </div>

          {/* Amicable Mediation */}
          <div className="rounded-2xl bg-gradient-to-br from-[#16273f] to-[#111f33] border border-amber-500/30 p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                Voie Amiable & Négociée
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                La Médiation Familiale Agréée
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Un processus volontaire encadré par un professionnel neutre pour décider vous-mêmes de l’organisation de votre famille.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Maîtrise du calendrier</strong> : vous avancez à votre rythme en quelques séances ciblées.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Confidentialité absolue</strong> garantie par la loi belge (aucun propos ne peut être utilisé en justice).</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Accords sur-mesure et respectés</strong> car co-construits et validés par les deux parents.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Même force juridique qu'un jugement</strong> grâce à l'homologation par le tribunal.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Frais partagés</strong> équitablement entre les deux conjoints.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-amber-300/90 font-medium">
              <span>Agréation SPF Justice / CFM</span>
              <span className="text-slate-400">Taux d'adhésion &gt; 85%</span>
            </div>
          </div>

        </div>

        {/* 4-Step Mediation Workflow */}
        <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-8 sm:p-10 mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
            Méthodologie · En 4 étapes
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-8">
            Comment se déroule une médiation au cabinet ?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex flex-col justify-between p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div>
                <div className="font-serif text-xl font-bold text-amber-400 mb-2">
                  01.
                </div>
                <div className="font-semibold text-white text-sm mb-2">
                  Séance d'ouverture
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Présentation des règles du jeu (respect, écoute mutuelle, confidentialité) et signature du protocole de médiation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500">
                Durée : env. 1h30
              </div>
            </div>

            <div className="flex flex-col justify-between p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div>
                <div className="font-serif text-xl font-bold text-amber-400 mb-2">
                  02.
                </div>
                <div className="font-semibold text-white text-sm mb-2">
                  Expression des besoins
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Clarification des attentes de chacun, des contraintes d'horaires des enfants et des besoins financiers réels.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500">
                1 à 2 séances
              </div>
            </div>

            <div className="flex flex-col justify-between p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div>
                <div className="font-serif text-xl font-bold text-amber-400 mb-2">
                  03.
                </div>
                <div className="font-semibold text-white text-sm mb-2">
                  Options concrètes
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Test et simulation des calendriers de garde, répartition des vacances, frais extraordinaires et partage patrimonial.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500">
                Recherche de consensus
              </div>
            </div>

            <div className="flex flex-col justify-between p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div>
                <div className="font-serif text-xl font-bold text-amber-400 mb-2">
                  04.
                </div>
                <div className="font-semibold text-white text-sm mb-2">
                  Accord & Homologation
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Rédaction par Me Maistriau de la convention finale, signée puis déposée pour homologation devant le tribunal.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-amber-400 font-medium">
                Force exécutoire légale
              </div>
            </div>

          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-wrap items-center justify-between gap-6 p-6 rounded-xl bg-[#16273f] border border-amber-500/30">
          <div>
            <div className="font-serif text-xl font-bold text-white mb-1">
              Vous hésitez entre médiation et procédure judiciaire ?
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Un premier rendez-vous permet de faire le point en toute confidentialité sur la voie la plus adaptée à votre situation.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 rounded-md bg-[#B58D3D] px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-950 transition-all hover:bg-[#C89F4E] active:scale-[0.98] shrink-0"
          >
            <span>Prendre rendez-vous</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
