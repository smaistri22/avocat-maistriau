/**
 * Données authentiques extraites directement du site en ligne www.avocat-maistriau.com
 * et connectées aux avis Google du cabinet
 */

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  rating: number;
  tag?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQGroup {
  title: string;
  items: FAQItem[];
}

export const LIVE_SITE_DATA = {
  brand: "Avocat-Maistriau",
  heroHeadline: "Une solution juridique experte à taille humaine",
  googleReviewUrl: "https://www.google.com/maps?cid=7035340233821221653",
  googleWriteReviewUrl: "https://www.google.com/maps?cid=7035340233821221653",
  contact: {
    lawyer: "Philippe Maistriau, Avocat",
    addressLine: "Rue Abbé Cuypers, 3",
    postalCodeCity: "1040 Etterbeek",
    country: "Belgique",
    email: "p.maistriau@gmail.com",
    phone: "+32 486 06 25 78",
    vat: "BE 0838.796.810",
    openingHours: {
      days: "Du lundi au vendredi",
      morning: "De 09 h à 12 h",
      afternoon: "De 14 h à 18 h",
    },
    socialLinks: [
      { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100009311428477" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/philippe-maistriau-9191b4111/" },
      { name: "Justifit", url: "https://www.justifit.be/avocats/avocat-etterbeek-1040-philippe-maistriau-3467/" },
    ],
    partners: [
      {
        name: "Cognitive Studio",
        url: "https://cognitive-studio.be",
        subtitle: "Recherche, méthodologie & design cognitif",
        location: "Bruxelles, Belgique",
      },
      {
        name: "Cabinet Me Ana Ferreira",
        url: "https://www.avocate-anaferreira.com",
        subtitle: "Avocate au Barreau de Bruxelles · Famille, Pénal, Roulage & Droit Collaboratif",
        location: "Rue Abbé Cuypers 3, 1040 Etterbeek",
      },
    ],
    bookingUrl: "https://calendar.app.google/DAftD8C5KJ6gi14y5",
    googleCalendarUrl: "https://calendar.app.google/DAftD8C5KJ6gi14y5",
  },
  about: {
    title: "Qui est Me Maistriau ?",
    paragraphs: [
      "Maître Philippe Maistriau met ses 36 ans d’expérience et sa combativité au service de vos intérêts. Parce que chaque situation est unique, il s'engage à vous offrir une écoute attentive et un accompagnement entièrement personnalisé pour traverser votre crise.",
      "Son champ d'intervention couvre l'ensemble du droit de la famille (divorce, garde d'enfants, pension) ainsi que le règlement des successions.",
      "Formé à la médiation, Maître Maistriau privilégiera toujours, lorsque cela est possible, le dialogue et la recherche de solutions amiables pour dénouer vos litiges efficacement.",
    ],
    contactSection: {
      title: "Nous contacter",
      desc: "Vous avez envie de travailler avec nous ? Remplissez le formulaire et nous vous contacterons rapidement. N’hésitez pas à nous contacter !",
    },
  },
  contactPage: {
    title: "Contactez-nous",
    warningFr: "Attention: Tout formulaire non dûment complété ne sera pas pris en considération.",
    warningEn: "Please note: Any form that is not properly completed will not be considered.",
    headline: "Vous faites face à une crise familiale ou à un conflit immobilier ? Ne restez pas dans l'incertitude.",
    subtext: "Qu'il s'agisse d'un divorce, d'une succession ou d'un litige locatif, contactez le cabinet pour bénéficier d'une stratégie juridique claire. Nous nous engageons à défendre vos intérêts et à trouver l'issue la plus favorable, que ce soit par la médiation ou la voie judiciaire.",
    cta: "Réserver un Rendez-vous",
  },
  reviews: [
    {
      id: 1,
      author: "Alexander B.",
      rating: 5,
      tag: "Droit de la famille & médiation",
      text: "Awesome lawyer and overall human being. He has a great amount of experience in the field and a set of listening and empathy skills you rarely find in people. Maitre Maistriau will find you a solution while also protecting your principles, interests and rights.",
    },
    {
      id: 2,
      author: "Sophie D.",
      rating: 5,
      tag: "Divorce & garde d'enfants",
      text: "Son écoute, son professionnalisme et son empathie font de lui un avocat digne d'être contacté. Ses années d'expérience feront de lui votre meilleur atout.",
    },
    {
      id: 3,
      author: "Marc V.",
      rating: 5,
      tag: "Médiation familiale",
      text: "Maître Maistriau a fait preuve de professionnalisme. J'ai particulièrement apprécié sa capacité à rechercher des solutions de compromis adaptées à ma situation. Il a été à l'écoute, à la fois sur le plan juridique et humain.",
    },
    {
      id: 4,
      author: "Céline L.",
      rating: 5,
      tag: "Accompagnement juridique",
      text: "L'écoute dont il témoigne envers ses clients et aussi sa disponibilité et son humanité.",
    },
    {
      id: 5,
      author: "Jean-François R.",
      rating: 5,
      tag: "Contentieux & conciliation",
      text: "Son approche pour débloquer les situations difficiles et apaiser les émotions, sa gentillesse, son professionnalisme, toujours à l’écoute et vraiment très disponible.",
    },
    {
      id: 6,
      author: "Isabelle M.",
      rating: 5,
      tag: "Conseil en succession",
      text: "De grand conseil et de nature très humaine. C’est rassurant de savoir que de tels professionnels existent encore.",
    },
    {
      id: 7,
      author: "Thomas B.",
      rating: 5,
      tag: "Droit familial & intégrité",
      text: "Maitre Maistriau a tout des qualités qu'on attend d'un bon avocat: humanité, dignité, conscience professionnelle et probité. Je le recommande chaudement pour quiconque aura besoin d'un conseil dans le domaine familial car son intégrité, patience, discrétion, minutie ou encore sa capacité d'analyse sont parfaits.",
    },
  ],
  faqGroups: [
    {
      title: "Rendez-vous et Honoraires",
      items: [
        {
          id: "faq-1",
          question: "Quel est le coût d'une première consultation ?",
          answer: "La première consultation est facturée au tarif forfaitaire unique de 125 € TTC. Contrairement aux rendez-vous de suivi, cette première rencontre n'est pas limitée dans le temps : nous prenons la durée nécessaire pour analyser votre situation, répondre à vos questions et définir ensemble la stratégie à adopter.",
        },
        {
          id: "faq-2",
          question: "Comment sont facturées les prestations suivantes ?",
          answer: "Si nous décidons de travailler ensemble après le premier rendez-vous, les prestations (rédaction d'actes, conclusions, assistance aux audiences, courriers) sont facturées au taux horaire, selon les conditions générales convenues et signées lors de l'ouverture du dossier. Vous recevrez des états de frais et honoraires détaillés pour une totale transparence.",
        },
        {
          id: "faq-3",
          question: "Que se passe-t-il si je dois annuler mon rendez-vous ?",
          answer: "Nous comprenons que des imprévus peuvent survenir. Toutefois, toute annulation doit être communiquée au cabinet au moins 24 heures à l'avance. Passé ce délai, ou en cas d'absence non justifiée, une indemnité forfaitaire de 50 € sera facturée.",
        },
        {
          id: "faq-4",
          question: "Acceptez-vous les dossiers à l'aide juridique (Pro Deo) ?",
          answer: "Le cabinet privilégie un accompagnement personnalisé et n'intervient généralement pas dans le cadre de l'aide juridique de deuxième ligne (anciennement Pro Deo). Nous vous invitons à vérifier votre éligibilité auprès du Bureau d'Aide Juridique de Bruxelles.",
        },
      ],
    },
    {
      title: "Droit de la Famille & Divorce",
      items: [
        {
          id: "faq-5",
          question: "Quelle est la différence entre un divorce à l'amiable et un divorce contentieux ?",
          answer: "Le divorce par consentement mutuel (amiable) suppose que les époux soient d'accord sur tout : le principe du divorce et ses conséquences (garde des enfants, partage des biens, pensions). C'est la voie la plus rapide. Le divorce pour désunion irrémédiable (contentieux) est nécessaire lorsqu'il y a désaccord. Le juge tranchera alors les points de litige.",
        },
        {
          id: "faq-6",
          question: "Combien de temps dure une procédure de divorce ?",
          answer: "Cela dépend de la complexité du dossier et de la volonté des parties. Un divorce à l'amiable peut être prononcé en quelques mois (3 à 6 mois). Un divorce contentieux peut durer plus longtemps, surtout si le partage du patrimoine ou la garde des enfants fait l'objet de vifs débats.",
        },
        {
          id: "faq-7",
          question: "Comment est fixé le montant de la pension alimentaire ?",
          answer: "Il n'existe pas de barème unique et automatique. Le montant de la contribution alimentaire pour les enfants est calculé en fonction des facultés contributives de chaque parent (revenus) et des besoins de l'enfant (frais scolaires, hébergement, âge). Chaque situation est évaluée au cas par cas.",
        },
        {
          id: "faq-8",
          question: "Pourquoi choisir la médiation familiale ?",
          answer: "En tant qu'avocat formé à la médiation, je recommande cette voie pour préserver les relations familiales, surtout en présence d'enfants. La médiation permet de construire ensemble une solution durable et acceptée par tous, plutôt que de se voir imposer une décision par un juge. C'est souvent moins coûteux et moins traumatisant qu'un procès.",
        },
      ],
    },
    {
      title: "Baux à Loyer & Immobilier",
      items: [
        {
          id: "faq-9",
          question: "Mon locataire ne paie plus son loyer, que faire ?",
          answer: "Il ne faut pas attendre que la dette s'accumule. La première étape est l'envoi d'une mise en demeure formelle. Si celle-ci reste sans effet, nous saisirons le Juge de Paix pour obtenir la condamnation au paiement des arriérés et, si nécessaire, la résolution du bail (expulsion).",
        },
        {
          id: "faq-10",
          question: "Puis-je changer les serrures si mon locataire ne paie pas ?",
          answer: "Absolument pas. Se faire justice soi-même est illégal et peut se retourner contre vous pénalement. L'expulsion d'un locataire ne peut se faire que sur base d'un titre exécutoire (jugement) et doit être réalisée par un huissier de justice.",
        },
        {
          id: "faq-11",
          question: "Je suis locataire et mon propriétaire refuse de me rendre ma garantie locative. Quels sont mes droits ?",
          answer: "Le propriétaire ne peut retenir la garantie que s'il prouve l'existence de dégâts locatifs (via un état des lieux de sortie comparé à l'entrée) ou d'arriérés de loyers/charges. S'il retient la garantie abusivement, nous pouvons introduire une action pour en obtenir la libération, majorée des intérêts.",
        },
      ],
    },
  ],
};
