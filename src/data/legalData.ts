/**
 * Données officielles et complètes du Cabinet d'Avocat Philippe Maistriau
 * Barreau de Bruxelles - Etterbeek (Montgomery)
 */

export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  badge: string;
  fullDesc: string;
  keyPoints: string[];
  cases: string[];
  jurisdiction: string;
  quote?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'famille' | 'mediation' | 'baux' | 'honoraires' | 'roulage';
}

export const CABINET_INFO = {
  name: "Maître Philippe Maistriau",
  title: "Avocat au Barreau de Bruxelles & Médiateur Agréé",
  cabinetName: "Cabinet Philippe Maistriau",
  barreau: "Ordre français des avocats du Barreau de Bruxelles",
  sermentYear: 1989,
  experienceYears: "Plus de 35 ans",
  address: {
    street: "Boulevard Saint-Michel 11",
    postalCode: "1040",
    city: "Bruxelles (Etterbeek)",
    country: "Belgique",
    neighborhood: "Quartier Montgomery / Boileau",
  },
  phones: {
    cabinet: "+32 (0)2 347 32 54",
    mobile: "+32 (0)486 06 25 78",
  },
  email: "contact@avocat-maistriau.com",
  consultationFee: {
    amountTTC: "125 €",
    amountHTVA: "103,31 €",
    description: "Première consultation approfondie en cabinet ou visioconférence, sans limite stricte de temps pour une analyse rigoureuse de vos pièces.",
  },
  hourlyRate: "150 € HTVA",
  hours: "Du lundi au vendredi de 08h30 à 18h30 (sur rendez-vous)",
  transit: {
    metro: "Lignes 1 et 5 (Stations Montgomery ou Boileau à 3 min)",
    tram: "Lignes 7, 25, 39, 44 (Arrêts Boileau ou Montgomery)",
    bus: "Ligne STIB 36",
    car: "Stationnement aisé sur le Boulevard Saint-Michel (zone bleue/horodateur) ou Parking Montgomery",
  },
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "famille",
    number: "01",
    title: "Droit de la Famille & Divorce",
    shortDesc: "Accompagnement humain et stratégique lors des ruptures familiales, divorces et organisation de la vie des enfants.",
    badge: "Matière Principale",
    fullDesc: "Les crises familiales exigent un équilibre délicat entre fermeté juridique et bienveillance humaine. Maître Philippe Maistriau assiste les époux et conjoints à chaque étape de la séparation, veillant avant tout à la préservation de l'intérêt supérieur des enfants et à la juste défense de vos droits patrimoniaux.",
    keyPoints: [
      "Divorce par consentement mutuel (EAM) avec rédaction intégrale des conventions préalables",
      "Divorce pour désunion irrémédiable (EOD) et mesures provisoires urgentes",
      "Modalités d'hébergement des enfants (hébergement égalitaire ou adapté)",
      "Fixation, indexation et révision des contributions alimentaires",
      "Fin de cohabitation légale ou séparation de concubins et sortie d'indivision",
      "Actions relatives à la filiation, contestation ou reconnaissance de paternité",
      "Liquidation et partage des régimes matrimoniaux (communauté ou séparation de biens)",
    ],
    cases: [
      "Désaccord sur l'hébergement des enfants lors d'un déménagement",
      "Calcul des frais extraordinaires et pensions impayées",
      "Séparation difficile avec patrimoine immobilier commun",
    ],
    jurisdiction: "Tribunal de la Famille de Bruxelles, Hal-Vilvorde, Brabant wallon",
    quote: "Privilégier le dialogue constructif lorsque c'est possible, plaider avec vigueur et détermination lorsque c'est nécessaire.",
  },
  {
    id: "mediation",
    number: "02",
    title: "Médiation Familiale Agréée",
    shortDesc: "Résolution amiable et pérenne des conflits familiaux sous l'égide d'un médiateur agréé par la Commission Fédérale de Médiation.",
    badge: "Agrément Fédéral",
    fullDesc: "En qualité de médiateur familial agréé, Maître Maistriau n'agit pas en juge ni en arbitre, mais comme tiers neutre et impartial. Il guide les parties pour renouer un dialogue rompu et construire ensemble des solutions sur-mesure, beaucoup plus durables et économiques qu'une bataille judiciaire éprouvante.",
    keyPoints: [
      "Processus confidentiel garanti par la loi belge sur la médiation",
      "Rétablissement d'une communication parentale apaisée et constructive",
      "Co-construction d'accords parentaux complets et équilibrés",
      "Homologation de la convention de médiation par le Tribunal de la Famille (force exécutoire identique à un jugement)",
      "Coût et durée très nettement inférieurs à une procédure contentieuse classique",
      "Diminution de la charge émotionnelle et protection des enfants du conflit de loyauté",
    ],
    cases: [
      "Parents désireux d'éviter un procès traumatisant pour leurs enfants",
      "Blocage persistant sur la répartition des vacances ou des choix scolaires",
      "Conflits entre héritiers lors d'une succession conflictuelle",
    ],
    jurisdiction: "Commission Fédérale de Médiation (CFM) & Homologation Tribunal de la Famille",
    quote: "La médiation ne cherche pas de coupable, elle construit l'avenir.",
  },
  {
    id: "baux",
    number: "03",
    title: "Baux à Loyer & Droit Locatif",
    shortDesc: "Conseil et défense des propriétaires et locataires en matière de baux de résidence principale et commerciaux.",
    badge: "Contentieux & Conseil",
    fullDesc: "Le droit du bail est soumis à des réglementations régionales strictes (notamment le Code bruxellois du Logement). Le cabinet intervient avec célérité pour sécuriser les contrats, recouvrer les impayés et résoudre les litiges locatifs devant les Justices de paix.",
    keyPoints: [
      "Rédaction et audit de contrats de bail de résidence principale ou commerciale",
      "Recouvrement rapide d'arriérés de loyers et de charges locatives",
      "Procédure de résiliation de bail et d'expulsion dans le respect des règles légales",
      "Litiges relatifs aux dégâts locatifs et à l'état des lieux d'entrée/sortie",
      "Libération contentieuse de la garantie locative",
      "Défense contre les allégations d'insalubrité ou de manquement aux obligations d'entretien",
    ],
    cases: [
      "Locataire en défaut de paiement accumulant plusieurs mois de loyers",
      "Propriétaire refusant indûment de restituer la garantie locative",
      "Congé pour occupation personnelle contesté devant le Juge de paix",
    ],
    jurisdiction: "Justices de Paix de Bruxelles-Capitale et de la périphérie",
    quote: "La rapidité d'action est déterminante pour endiguer l'aggravation d'un arriéré locatif.",
  },
  {
    id: "successions",
    number: "04",
    title: "Droit des Successions & Héritages",
    shortDesc: "Accompagnement lors du règlement des successions, liquidation d'indivision et résolution des litiges successoraux.",
    badge: "Patrimoine & Transmission",
    fullDesc: "La disparition d'un proche s'accompagne fréquemment de tensions financières et affectives complexes entre cohéritiers. Le cabinet analyse le patrimoine héréditaire, préserve vos droits réservataires et recherche un partage amiable avant toute assignation en liquidation-partage judiciaire.",
    keyPoints: [
      "Analyse de la validité des testaments et donations antérieures",
      "Protection de la réserve héréditaire et action en réduction",
      "Sortie d'indivision successorale et valorisation des biens immobiliers",
      "Assistance lors des opérations notariales d'inventaire et d'état liquidatif",
      "Contestation d'abus de faiblesse ou de détournement d'actifs successoraux",
      "Négociation de protocoles d'accord transactionnels entre héritiers",
    ],
    cases: [
      "Divergence majeure sur l'estimation d'un immeuble familial",
      "Donation déguisée ayant lésé un enfant réservataire",
      "Héritier bloquant unilatéralement la vente d'un bien de la succession",
    ],
    jurisdiction: "Tribunal de Première Instance de Bruxelles & Notariats",
    quote: "Démêler les conflits patrimoniaux avec rigueur pour préserver ce qui peut l'être des liens familiaux.",
  },
  {
    id: "roulage",
    number: "05",
    title: "Circulation Routière & Tribunal de Police",
    shortDesc: "Défense des automobilistes et usagers de la route poursuivis devant le Tribunal de Police.",
    badge: "Prise en charge Assurance",
    fullDesc: "Une infraction de roulage peut entraîner des conséquences lourdes : suspension de permis, amendes substantielles ou examens de réintégration. Maître Maistriau examine minutieusement la régularité du procès-verbal et plaide pour limiter au strict minimum les sanctions prononcées.",
    keyPoints: [
      "Défense pour excès de vitesse, alcoolémie au volant et stupéfiants",
      "Délit de fuite, franchissement de feu rouge et priorité de droite",
      "Aménagement de la déchéance du droit de conduire (déchéance limitée au week-end)",
      "Recours contre les révocations de sursis",
      "Les honoraires peuvent être pris en charge par votre assurance protection juridique, selon les conditions de votre contrat",
      "Libre choix absolu de votre avocat garanti par la loi européenne et belge",
    ],
    cases: [
      "Citation à comparaître devant le Tribunal de Police de Bruxelles",
      "Risque d'annulation de permis pour un jeune conducteur ou un professionnel de la route",
      "Accident avec contestation des circonstances et des responsabilités",
    ],
    jurisdiction: "Tribunaux de Police de Bruxelles, Hal, Nivelles, Louvain",
    quote: "Les honoraires peuvent être pris en charge par votre assurance protection juridique, selon les conditions de votre contrat.",
  },
  {
    id: "responsabilite",
    number: "06",
    title: "Responsabilité Civile & Dommage Corporel",
    shortDesc: "Défense des victimes d'accidents de la vie et de la circulation pour l'indemnisation complète des préjudices subis.",
    badge: "Indemnisation des Victimes",
    fullDesc: "Être victime d'un accident implique de faire face à des compagnies d'assurance dotées de médecins conseils rompus à l'évaluation a minima. Le cabinet vous conseille et vous assiste lors des expertises médicales pour chiffrer l'intégralité des préjudices physiques, esthétiques, moraux et professionnels.",
    keyPoints: [
      "Indemnisation selon le Tableau Indicatif belge des dommages corporels",
      "Assistance par un médecin-conseil indépendant lors des expertises médicales",
      "Évaluation des incapacités temporaires et permanentes, pretium doloris",
      "Prise en compte des pertes de revenus actuelles et des pertes d'autonomie futures",
      "Négociation d'une indemnité provisionnelle dès le début du dossier",
      "Recours judiciaire contre les offres manifestement insuffisantes des assureurs",
    ],
    cases: [
      "Piéton ou cycliste renversé par un véhicule en agglomération",
      "Passager blessé dans un accident de voiture",
      "Accident de la vie quotidienne avec tiers responsable identifié",
    ],
    jurisdiction: "Tribunaux Civils et Tribunaux de Police",
    quote: "Ne jamais accepter une transaction d'assurance sans un avis juridique et médical indépendant.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Comment se déroule la première consultation et quel est son coût ?",
    answer: "La première consultation est proposée au tarif forfaitaire unique de 125 € TTC (103,31 € HTVA). Ce premier rendez-vous, qui dure généralement entre 45 minutes et 1h30, n'est pas chronométré de manière rigide. Il permet à Maître Philippe Maistriau de prendre le temps d'écouter votre situation dans le détail, d'examiner vos pièces et de vous livrer un premier avis juridique concret et objectif sur les démarches à entreprendre.",
    category: "honoraires",
  },
  {
    id: "faq-2",
    question: "Le cabinet accepte-t-il les dossiers à l'aide juridique (anciennement Pro Deo) ?",
    answer: "Non. Le cabinet de Maître Philippe Maistriau n'intervient pas dans le cadre de l'aide juridique de deuxième ligne (système Pro Deo). Si vos ressources financières vous rendent éligible au Pro Deo, vous êtes invité à vous adresser directement au Bureau d'Aide Juridique (BAJ) du Barreau de Bruxelles.",
    category: "honoraires",
  },
  {
    id: "faq-3",
    question: "Comment fonctionne la prise en charge par l'assurance Protection Juridique ?",
    answer: "Les honoraires peuvent être pris en charge par votre assurance protection juridique, selon les conditions de votre contrat. Si vous disposez d'une garantie protection juridique (souvent adossée à votre assurance auto, familiale ou habitation), votre compagnie intervient dans les limites du contrat. Vous conservez par ailleurs le libre choix absolu de votre avocat garanti par la loi.",
    category: "honoraires",
  },
  {
    id: "faq-4",
    question: "Quelle est la différence entre un divorce par consentement mutuel et pour désunion irrémédiable ?",
    answer: "Le divorce par consentement mutuel (EAM) intervient lorsque les deux époux s'accordent sur le principe de la rupture et sur toutes ses conséquences (hébergement des enfants, contributions alimentaires, sort du domicile, partage des comptes et du patrimoine immobilier). Le divorce pour désunion irrémédiable (EOD) est engagé lorsqu'un des époux refuse de divorcer ou lorsqu'aucun accord global n'a pu être trouvé, confiant alors au Tribunal de la Famille le soin de trancher les points de désaccord.",
    category: "famille",
  },
  {
    id: "faq-5",
    question: "Quels sont les avantages concrets de la médiation familiale par rapport à un procès ?",
    answer: "La médiation familiale offre une démarche volontaire, confidentielle et plus rapide. Au lieu de subir une décision imposée par un juge, les parties élaborent ensemble des accords durables et adaptés à la réalité de leurs enfants. En outre, le coût global est partagé entre les deux parties et l'accord final est homologué par le tribunal, conférant la même force exécutoire qu'un jugement.",
    category: "mediation",
  },
  {
    id: "faq-6",
    question: "Mon locataire ne paie plus son loyer : que dois-je faire en premier lieu ?",
    answer: "Il convient d'abord de lui adresser sans tarder une mise en demeure formelle par courrier recommandé avec accusé de réception, lui accordant un délai de régularisation (généralement 15 jours). En l'absence de réaction ou de paiement, Maître Maistriau rédige et dépose une requête devant le Juge de paix territorialement compétent afin de solliciter la condamnation au paiement des arriérés, et le cas échéant, la résolution du bail et l'expulsion.",
    category: "baux",
  },
  {
    id: "faq-7",
    question: "J'ai reçu une citation devant le Tribunal de Police : dois-je obligatoirement être présent ?",
    answer: "Dans la majorité des infractions courantes (excès de vitesse, feux rouges, légers accidents), Maître Philippe Maistriau peut vous représenter valablement à l'audience sans que votre présence physique ne soit exigée. En revanche, en cas d'infractions graves (taux d'alcoolémie très élevé, stupéfiants, récidive, accident corporel), la présence personnelle est vivement recommandée pour présenter des excuses et motiver votre situation personnelle devant le juge.",
    category: "roulage",
  },
];
