import React, { useState } from 'react';
import { Compass, CheckCircle2, ArrowRight, RefreshCw, FileText, Scale } from 'lucide-react';

interface OrientationToolProps {
  onOpenBooking: (subject?: string) => void;
}

export const OrientationTool: React.FC<OrientationToolProps> = ({ onOpenBooking }) => {
  const [matter, setMatter] = useState<string>('divorce');
  const [dialogueState, setDialogueState] = useState<string>('possible');
  const [hasInsurance, setHasInsurance] = useState<string>('unsure');

  const getRecommendation = () => {
    if (matter === 'divorce') {
      if (dialogueState === 'possible') {
        return {
          title: "Médiation Familiale ou Divorce par Consentement Mutuel (EAM)",
          path: "Voie Amiable Privilégiée",
          desc: "Votre situation se prête parfaitement à une résolution constructive. Maître Philippe Maistriau peut intervenir soit comme médiateur familial agréé (neutre et impartial), soit pour rédiger vos conventions préalables complètes.",
          steps: [
            "Établissement du projet d'hébergement pour les enfants",
            "Calcul partagé des contributions et frais extraordinaires",
            "Homologation de la convention par le Tribunal de la Famille sans audience lourde",
          ],
          feeNote: "Première consultation forfaitaire à 125 € TTC pour cadrer la démarche.",
          badgeColor: "text-amber-800 bg-amber-50 border-amber-200",
          bookingSubject: "mediation",
        };
      } else {
        return {
          title: "Procédure devant le Tribunal de la Famille (EOD)",
          path: "Voie Contentieuse & Mesures Urgentes",
          desc: "Lorsque le dialogue est rompu ou que l'urgence commande (violences, rétention d'enfants, dégradation du patrimoine), une requête contradictoire devant le Tribunal de la Famille permet d'obtenir des mesures provisoires immédiates du juge.",
          steps: [
            "Dépôt d'une requête contradictoire urgente",
            "Fixation des mesures provisoires relatives aux enfants et à la résidence",
            "Défense ferme de vos droits patrimoniaux et parentaux",
          ],
          feeNote: "125 € TTC pour l'étude initiale des pièces et la stratégie procédurale.",
          badgeColor: "text-blue-800 bg-blue-50 border-blue-200",
          bookingSubject: "famille",
        };
      }
    }

    if (matter === 'bail') {
      return {
        title: "Contentieux du Bail devant la Justice de Paix",
        path: "Procédure Locative Spécifique",
        desc: "En matière de baux de résidence ou commerciaux à Bruxelles, la célérité est essentielle. Le cabinet adresse d'abord une mise en demeure formelle avant de saisir le Juge de paix si nécessaire pour obtenir paiement ou résolution.",
        steps: [
          "Mise en demeure préalable détaillée par avocat",
          "Dépôt de requête devant le Juge de paix du canton compétent",
          "Récupération des arriérés, libération de garantie ou expulsion légale",
        ],
        feeNote: "Consultation initiale à 125 € TTC pour vérifier les clauses du bail et décompter les arriérés.",
        badgeColor: "text-emerald-800 bg-emerald-50 border-emerald-200",
        bookingSubject: "baux",
      };
    }

    if (matter === 'roulage') {
      return {
        title: "Défense Pénale devant le Tribunal de Police",
        path: "Prise en charge Protection Juridique possible",
        desc: "Les poursuites pour infraction routière mettent en jeu votre permis et des amendes. Vérifiez votre contrat d'assurance : les honoraires peuvent être pris en charge par votre assurance protection juridique, selon les conditions de votre contrat.",
        steps: [
          "Examen de la régularité du procès-verbal et des délais de prescription",
          "Démarche auprès de votre compagnie d'assurance pour la prise en charge",
          "Représentation ou assistance à l'audience du Tribunal de Police",
        ],
        feeNote: "Les honoraires peuvent être pris en charge par votre assurance protection juridique, selon les conditions de votre contrat.",
        badgeColor: "text-amber-800 bg-amber-50 border-amber-200",
        bookingSubject: "roulage",
      };
    }

    // Successions
    return {
      title: "Règlement Successoral & Liquidation d'Indivision",
      path: "Analyse Patrimoniale & Partage",
      desc: "Analyse des droits réservataires, contestation des donations litigieuses ou sortie d'indivision. Le cabinet recherche une transaction amiable avant d'engager une action en partage judiciaire.",
      steps: [
        "Audit de l'actif et du passif successoral avec le notaire",
        "Négociation d'un protocole transactionnel entre héritiers",
        "Action judiciaire en cas de blocage persistant",
      ],
      feeNote: "125 € TTC pour le diagnostic initial des titres et de l'arbre successoral.",
      badgeColor: "text-indigo-800 bg-indigo-50 border-indigo-200",
      bookingSubject: "successions",
    };
  };

  const recommendation = getRecommendation();

  return (
    <section className="py-12 lg:py-16 bg-[#F8F5EE] border-b border-[#E2DBD0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B58D3D] mb-3">
            Outil d'Orientation en 3 clics
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#181615] mb-4 [text-wrap:balance]">
            Identifier la démarche juridique adaptée à votre situation.
          </h2>
          <p className="text-base text-stone-600 leading-relaxed font-serif">
            Chaque dossier est unique. Répondez à ces questions rapides pour obtenir une première 
            orientation entre médiation négociée et action judiciaire devant les tribunaux belges.
          </p>
        </div>

        {/* Diagnostic Interactive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Input Selection Form */}
          <div className="lg:col-span-5 rounded-2xl bg-[#FAF8F3] border border-[#E2DBD0] p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Matter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Quel est l'objet de votre litige ?
              </label>
              <div className="space-y-1.5">
                {[
                  { id: 'divorce', label: 'Séparation, Divorce ou Garde d’enfants' },
                  { id: 'bail', label: 'Bail locatif (arriérés, expulsion, litige)' },
                  { id: 'roulage', label: 'Infraction routière (Tribunal de Police)' },
                  { id: 'successions', label: 'Succession & Héritage conflictuel' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMatter(item.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                      matter === item.id
                        ? 'bg-[#0B1523] border-[#0B1523] text-white shadow-sm'
                        : 'bg-white border-stone-200 text-slate-700 hover:border-amber-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dialogue State */}
            {matter === 'divorce' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  2. Le dialogue avec l'autre partie est-il envisageable ?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDialogueState('possible')}
                    className={`px-3 py-2.5 rounded-lg border text-xs text-center font-medium transition-all ${
                      dialogueState === 'possible'
                        ? 'bg-[#0B1523] border-[#0B1523] text-white shadow-sm'
                        : 'bg-white border-stone-200 text-slate-700 hover:border-amber-400'
                    }`}
                  >
                    Oui, accord souhaité
                  </button>
                  <button
                    type="button"
                    onClick={() => setDialogueState('rompu')}
                    className={`px-3 py-2.5 rounded-lg border text-xs text-center font-medium transition-all ${
                      dialogueState === 'rompu'
                        ? 'bg-[#0B1523] border-[#0B1523] text-white shadow-sm'
                        : 'bg-white border-stone-200 text-slate-700 hover:border-amber-400'
                    }`}
                  >
                    Non, conflit ouvert
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Insurance */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                {matter === 'divorce' ? '3.' : '2.'} Avez-vous une assurance protection juridique ?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'yes', label: 'Oui' },
                  { id: 'unsure', label: 'À vérifier' },
                  { id: 'no', label: 'Non' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setHasInsurance(item.id)}
                    className={`px-3 py-2 rounded-lg border text-xs text-center font-medium transition-all ${
                      hasInsurance === item.id
                        ? 'bg-[#0B1523] border-[#0B1523] text-white shadow-sm'
                        : 'bg-white border-stone-200 text-slate-700 hover:border-amber-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-slate-500 pt-2 border-t border-stone-200">
              Cet outil fournit une indication d'orientation générale ne remplaçant pas une consultation formelle.
            </div>

          </div>

          {/* Right: Recommendation Outcome Box */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-[#0B1523] to-[#122035] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Orientation Recommandée
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-medium">
                  {recommendation.path}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-5 mb-3">
                {recommendation.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {recommendation.desc}
              </p>

              <div className="space-y-3 mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Démarches prioritaires conseillées :
                </div>
                {recommendation.steps.map((st, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-amber-300/90 leading-relaxed">
                <strong>Honoraires :</strong> {recommendation.feeNote}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Consulter Maître Philippe Maistriau sur cette base :
              </span>
              <button
                onClick={() => onOpenBooking(recommendation.bookingSubject)}
                className="flex items-center gap-2 rounded-md bg-[#B58D3D] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 hover:bg-[#C89F4E] transition-all"
              >
                <span>Prendre consultation (125 €)</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
