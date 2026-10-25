import React from 'react';
import { ShieldAlert, CheckCircle, FileText, Scale, Info, ArrowRight } from 'lucide-react';
import { CABINET_INFO } from '../data/legalData';
import { FeeSimulator } from './FeeSimulator';

interface FeesSectionProps {
  onOpenBooking: () => void;
}

export const FeesSection: React.FC<FeesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="honoraires" className="py-12 lg:py-16 bg-[#F8F5EE] border-b border-[#E2DBD0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B58D3D] mb-3 font-sans">
            Transparence Déontologique & Prévisibilité
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#181615] mb-4 [text-wrap:balance]">
            Des honoraires clairs, sans surprise financière.
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-serif">
            La relation de confiance entre un avocat et son client repose sur une parfaite clarté dès le premier contact. 
            Maître Philippe Maistriau applique des modalités tarifaires transparentes formalisées par une convention écrite.
          </p>
        </div>

        {/* 3 Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 font-serif">
          
          {/* Card 1: 1ère Consultation Forfaitaire */}
          <div className="relative rounded-2xl bg-[#FAF8F3] border-2 border-stone-800 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2 font-sans">
                Premier Rendez-vous
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#181615] mb-2">
                Consultation d'orientation
              </h3>
              
              <div className="my-6">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#181615] tabular-nums">
                  125 €
                </span>
                <span className="text-xs text-stone-500 ml-2 font-sans">TTC (103,31 € HTVA)</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span><strong>Durée non strictement limitée</strong> (nous prenons le temps d'analyser vos pièces).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span>Étude de vos droits et de la faisabilité juridique.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span>Définition de la stratégie (négociation amiable ou saisine du juge).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span>Au cabinet à Etterbeek ou par visioconférence.</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-8 w-full rounded-full bg-[#181615] py-3 text-center text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] transition-all hover:bg-stone-800 font-sans"
            >
              Demander ce rendez-vous
            </button>
          </div>

          {/* Card 2: Suivi au taux horaire */}
          <div className="rounded-2xl bg-[#FAF8F3] border border-[#E2DBD0] p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2 font-sans">
                Traitement au fond
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#181615] mb-2">
                Défense & Contentieux
              </h3>
              
              <div className="my-6">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#181615] tabular-nums">
                  150 €
                </span>
                <span className="text-xs text-stone-500 ml-2 font-sans">HTVA / h + 10% frais admin</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span><strong>150 € HTVA / h</strong> de travail effectif.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span><strong>+ 10% de frais administratifs</strong> (ouverture, courriers, secrétariat).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span>Convention d'honoraires écrite conclue dès le début.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span>Relevé détaillé et transparent de chaque prestation.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EAE4D8] text-xs text-stone-500 font-sans">
              Provisions échelonnées selon l'avancement réel de votre dossier.
            </div>
          </div>

          {/* Card 3: Protection Juridique */}
          <div className="rounded-2xl bg-[#FAF8F3] border border-[#E2DBD0] p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2 font-sans">
                Assurance
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#181615] mb-2">
                Protection Juridique
              </h3>
              
              <div className="my-6">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-emerald-800 tabular-nums">
                  0 €
                </span>
                <span className="text-xs text-stone-500 ml-2 font-sans">à votre charge (selon contrat)</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Les honoraires peuvent être pris en charge par votre assurance protection juridique, selon les conditions de votre contrat.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Fréquent en circulation routière (auto) et RC familiale.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Libre choix de l'avocat garanti par la loi</strong> (l'assureur ne peut vous l'imposer).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Le cabinet prend en charge le contact direct avec votre assureur.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EAE4D8] text-xs text-stone-500 font-sans">
              Munissez-vous de votre police d'assurance lors de votre consultation.
            </div>
          </div>

        </div>

        {/* Interactive Fee Simulator */}
        <div className="mb-14">
          <FeeSimulator onOpenBooking={onOpenBooking} />
        </div>

        {/* Legal Disclaimer: Non-participation in Pro Deo */}
        <div className="rounded-xl bg-[#FAF8F3] border border-[#E2DBD0] p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5">
          <div className="p-3 rounded-lg bg-[#EFEAE0] text-stone-800 shrink-0">
            <Info className="h-6 w-6" />
          </div>
          <div className="font-serif">
            <h4 className="text-lg font-bold text-[#181615] mb-1">
              Précision déontologique relative à l'aide juridique (Pro Deo)
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Le cabinet de Maître Philippe Maistriau <strong>n'intervient pas dans le cadre de l'aide juridique de deuxième ligne</strong> (système <em>Pro Deo</em>). 
              Si votre situation financière vous ouvre le droit à l'aide juridique gratuite, 
              nous vous invitons à consulter le <strong>Bureau d’Aide Juridique (BAJ)</strong> de l'Ordre français des avocats du Barreau de Bruxelles (rue de la Régence 63, 1000 Bruxelles).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
