export type Language = 'fr' | 'en';

export interface Translations {
  header: {
    nav: {
      home: string;
      about: string;
      orientation: string;
      honoraires: string;
      contact: string;
      faq: string;
    };
    bookingBtn: string;
    bookingBtnShort: string;
  };
  home: {
    heroHeadline: string;
    bookAppointment: string;
    orientationBtn: string;
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    googleBoxText: string;
    viewGoogleReviews: string;
    leaveGoogleReview: string;
    areaLabel: string;
    prevReviewAria: string;
    nextReviewAria: string;
    goToReviewAria: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    contactSectionTitle: string;
    contactSectionDesc: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      message: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successMsg: string;
      sendAnother: string;
      errorMsg: string;
      gdpr: string;
    };
  };
  orientation: {
    pageTitle: string;
    pageSubtitle: string;
    sectionBadge: string;
    sectionTitle: string;
    sectionDesc: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    step3TitleShort: string;
    disclaimer: string;
    recommendedBadge: string;
    priorityStepsLabel: string;
    feesLabel: string;
    consultBasisLabel: string;
    bookConsultationBtn: string;
    dialoguePossible: string;
    dialogueBroken: string;
    insuranceYes: string;
    insuranceUnsure: string;
    insuranceNo: string;
    matters: {
      divorce: string;
      bail: string;
      roulage: string;
      successions: string;
    };
    recommendations: {
      divorceAmiable: {
        title: string;
        path: string;
        desc: string;
        steps: string[];
        feeNote: string;
      };
      divorceContentieux: {
        title: string;
        path: string;
        desc: string;
        steps: string[];
        feeNote: string;
      };
      bail: {
        title: string;
        path: string;
        desc: string;
        steps: string[];
        feeNote: string;
      };
      roulage: {
        title: string;
        path: string;
        desc: string;
        steps: string[];
        feeNote: string;
      };
      successions: {
        title: string;
        path: string;
        desc: string;
        steps: string[];
        feeNote: string;
      };
    };
  };
  fees: {
    pageTitle: string;
    pageSubtitle: string;
    sectionBadge: string;
    sectionTitle: string;
    sectionIntro: string;
    card1: {
      category: string;
      title: string;
      amount: string;
      subAmount: string;
      p1: string;
      p2: string;
      p3: string;
      p4: string;
      btn: string;
    };
    card2: {
      category: string;
      title: string;
      amount: string;
      subAmount: string;
      p1: string;
      p2: string;
      p3: string;
      p4: string;
      footerNote: string;
    };
    card3: {
      category: string;
      title: string;
      amount: string;
      subAmount: string;
      p1: string;
      p2: string;
      p3: string;
      p4: string;
      footerNote: string;
    };
    proDeo: {
      title: string;
      text: string;
    };
  };
  simulator: {
    badge: string;
    title: string;
    referenceRateLabel: string;
    referenceRateValue: string;
    presetsLabel: string;
    presets: {
      advice: string;
      bail: string;
      divorceConsent: string;
      familyCourt: string;
      inheritance: string;
    };
    hoursLabel: string;
    hourUnit: string;
    hoursUnit: string;
    hoursScale1: string;
    hoursScale10: string;
    hoursScale20: string;
    hoursScale30: string;
    hoursScale40: string;
    notes: {
      admin: string;
      vat: string;
      firstConsult: string;
    };
    breakdownTitle: string;
    breakdownFor: string;
    baseFeesLabel: string;
    adminFeesLabel: string;
    subtotalLabel: string;
    vatLabel: string;
    totalLabel: string;
    approxHourlyLabel: string;
    disclaimer: string;
    bookBtn: string;
  };
  contact: {
    pageTitle: string;
    warningNotice: string;
    headline: string;
    subtext: string;
    googleCalendarBtn: string;
    optionsBtn: string;
    formTitle: string;
    form: {
      fullName: string;
      fullNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      subject: string;
      subjects: {
        family: string;
        mediation: string;
        bail: string;
        successions: string;
        other: string;
      };
      message: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successMsg: string;
      sendAnother: string;
      errorMsg: string;
      gdpr: string;
    };
  };
  faq: {
    pageTitle: string;
    pageSubtitle: string;
    bottomTitle: string;
    bottomSubtitle: string;
    bookBtn: string;
    groups: Array<{
      title: string;
      items: Array<{
        id: string;
        question: string;
        answer: string;
      }>;
    }>;
  };
  mentions: {
    title: string;
    subtitle: string;
    companyTitle: string;
    lawyerNameLabel: string;
    vatLabel: string;
    addressLabel: string;
    phoneEmailLabel: string;
    ipTitle: string;
    ipText: string;
    disclaimerTitle: string;
    disclaimerP1: string;
    disclaimerP2: string;
    gdprTitle: string;
    gdprP1: string;
    gdprItems: {
      controller: string;
      purposes: string;
      secrecy: string;
      rights: string;
    };
  };
  footer: {
    openingHoursTitle: string;
    days: string;
    morning: string;
    afternoon: string;
    followUsTitle: string;
    subtext: string;
    partnersLabel: string;
    partnerCognitiveDesc: string;
    partnerAnaDesc: string;
    legalNoticeLink: string;
    feeTransparencyLink: string;
    copyright: string;
  };
  bookingModal: {
    cabinetEtterbeek: string;
    title: string;
    subtitle: string;
    option1Title: string;
    option1Realtime: string;
    option1Desc: string;
    option2Title: string;
    option2Desc: string;
    option3Title: string;
    option3Desc: string;
    phoneLabel: string;
    addressLabel: string;
    calendarHeader: string;
    fullscreen: string;
    calendarDesc: string;
    calendarQuestion: string;
    calendarNewTab: string;
    backBtn: string;
    feeNotice: string;
    formHeader: string;
    backToOptions: string;
    cabinetChoice: string;
    visioChoice: string;
    fullName: string;
    email: string;
    phone: string;
    date: string;
    purpose: string;
    purposePlaceholder: string;
    cancelBtn: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successMsg: string;
    modeLabel: string;
    cabinetLabel: string;
    visioLabel: string;
    requestedDateLabel: string;
    flatFeeLabel: string;
    flatFeeDetail: string;
    closeBtn: string;
    errorMsg: string;
    gdpr: string;
  };
  reviewModal: {
    tag: string;
    title: string;
    desc: string;
    boxText: string;
    leaveReviewBtn: string;
    viewReviewsBtn: string;
    closeBtn: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    header: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        orientation: 'Orientation (3 clics)',
        honoraires: 'Honoraires',
        contact: 'Contact',
        faq: 'FAQ',
      },
      bookingBtn: 'Rendez-vous',
      bookingBtnShort: 'RDV',
    },
    home: {
      heroHeadline: 'Une solution juridique experte à taille humaine',
      bookAppointment: 'Prendre rendez-vous',
      orientationBtn: 'Orientation en 3 clics',
      testimonialsTitle: 'Témoignages de clients',
      testimonialsSubtitle: "Retours d'expérience de justiciables accompagnés par Maître Philippe Maistriau.",
      googleBoxText: "Retrouvez l'ensemble des avis sur notre fiche Google",
      viewGoogleReviews: 'Voir les avis sur Google',
      leaveGoogleReview: 'Laisser un avis sur Google',
      areaLabel: 'Domaine :',
      prevReviewAria: 'Avis précédent',
      nextReviewAria: 'Avis suivant',
      goToReviewAria: "Aller à l'avis",
    },
    about: {
      title: 'Qui est Me Maistriau ?',
      paragraphs: [
        "Maître Philippe Maistriau met ses 36 ans d’expérience et sa combativité au service de vos intérêts. Parce que chaque situation est unique, il s'engage à vous offrir une écoute attentive et un accompagnement entièrement personnalisé pour traverser votre crise.",
        "Son champ d'intervention couvre l'ensemble du droit de la famille (divorce, garde d'enfants, pension) ainsi que le règlement des successions.",
        "Formé à la médiation, Maître Maistriau privilégiera toujours, lorsque cela est possible, le dialogue et la recherche de solutions amiables pour dénouer vos litiges efficacement.",
      ],
      contactSectionTitle: 'Nous contacter',
      contactSectionDesc: 'Vous avez envie de travailler avec nous ? Remplissez le formulaire et nous vous contacterons rapidement. N’hésitez pas à nous contacter !',
      form: {
        firstName: 'Prénom *',
        lastName: 'Nom *',
        email: 'E-mail *',
        message: 'Message *',
        submitBtn: 'Envoyer',
        submittingBtn: 'Envoi en cours…',
        successTitle: 'Message envoyé',
        successMsg: 'Merci, votre message a bien été envoyé. Le cabinet vous répondra dans les meilleurs délais.',
        sendAnother: 'Envoyer un autre message',
        errorMsg: "L'envoi a échoué. Merci de réessayer ou d'écrire directement à p.maistriau@gmail.com.",
        gdpr: 'Les données transmises sont utilisées uniquement pour répondre à votre demande, dans le respect du secret professionnel.',
      },
    },
    orientation: {
      pageTitle: "Outil d'Orientation en 3 clics",
      pageSubtitle: 'Évaluez en quelques secondes la voie la plus appropriée entre médiation amiable et procédure judiciaire.',
      sectionBadge: "Outil d'Orientation en 3 clics",
      sectionTitle: 'Identifier la démarche juridique adaptée à votre situation.',
      sectionDesc: 'Chaque dossier est unique. Répondez à ces questions rapides pour obtenir une première orientation entre médiation négociée et action judiciaire devant les tribunaux belges.',
      step1Title: "1. Quel est l'objet de votre litige ?",
      step2Title: "2. Le dialogue avec l'autre partie est-il envisageable ?",
      step3Title: '3. Avez-vous une assurance protection juridique ?',
      step3TitleShort: '2. Avez-vous une assurance protection juridique ?',
      disclaimer: "Cet outil fournit une indication d'orientation générale ne remplaçant pas une consultation formelle.",
      recommendedBadge: 'Orientation Recommandée',
      priorityStepsLabel: 'Démarches prioritaires conseillées :',
      feesLabel: 'Honoraires :',
      consultBasisLabel: 'Consulter Maître Philippe Maistriau sur cette base :',
      bookConsultationBtn: 'Prendre consultation (125 €)',
      dialoguePossible: 'Oui, accord souhaité',
      dialogueBroken: 'Non, conflit ouvert',
      insuranceYes: 'Oui',
      insuranceUnsure: 'À vérifier',
      insuranceNo: 'Non',
      matters: {
        divorce: 'Séparation, Divorce ou Garde d’enfants',
        bail: 'Bail locatif (arriérés, expulsion, litige)',
        roulage: 'Infraction routière (Tribunal de Police)',
        successions: 'Succession & Héritage conflictuel',
      },
      recommendations: {
        divorceAmiable: {
          title: 'Médiation Familiale ou Divorce par Consentement Mutuel (EAM)',
          path: 'Voie Amiable Privilégiée',
          desc: 'Votre situation se prête parfaitement à une résolution constructive. Maître Philippe Maistriau peut intervenir soit comme médiateur familial agréé (neutre et impartial), soit pour rédiger vos conventions préalables complètes.',
          steps: [
            "Établissement du projet d'hébergement pour les enfants",
            'Calcul partagé des contributions et frais extraordinaires',
            'Homologation de la convention par le Tribunal de la Famille sans audience lourde',
          ],
          feeNote: 'Première consultation forfaitaire à 125 € TTC pour cadrer la démarche.',
        },
        divorceContentieux: {
          title: 'Procédure devant le Tribunal de la Famille (EOD)',
          path: 'Voie Contentieuse & Mesures Urgentes',
          desc: "Lorsque le dialogue est rompu ou que l'urgence commande (violences, rétention d'enfants, dégradation du patrimoine), une requête contradictoire devant le Tribunal de la Famille permet d'obtenir des mesures provisoires immédiates du juge.",
          steps: [
            "Dépôt d'une requête contradictoire urgente",
            'Fixation des mesures provisoires relatives aux enfants et à la résidence',
            'Défense ferme de vos droits patrimoniaux et parentaux',
          ],
          feeNote: "125 € TTC pour l'étude initiale des pièces et la stratégie procédurale.",
        },
        bail: {
          title: 'Contentieux du Bail devant la Justice de Paix',
          path: 'Procédure Locative Spécifique',
          desc: "En matière de baux de résidence ou commerciaux à Bruxelles, la célérité est essentielle. Le cabinet adresse d'abord une mise en demeure formelle avant de saisir le Juge de paix si nécessaire pour obtenir paiement ou résolution.",
          steps: [
            'Mise en demeure préalable détaillée par avocat',
            'Dépôt de requête devant le Juge de paix du canton compétent',
            'Récupération des arriérés, libération de garantie ou expulsion légale',
          ],
          feeNote: 'Consultation initiale à 125 € TTC pour vérifier les clauses du bail et décompter les arriérés.',
        },
        roulage: {
          title: 'Défense Pénale devant le Tribunal de Police',
          path: 'Prise en charge Protection Juridique possible',
          desc: 'Les poursuites pour infraction routière mettent en jeu votre permis et des amendes. Vérifiez votre contrat d\'assurance : les honoraires peuvent être pris en charge par votre assurance protection juridique, selon les conditions de votre contrat.',
          steps: [
            'Examen de la régularité du procès-verbal et des délais de prescription',
            'Démarche auprès de votre compagnie d\'assurance pour la prise en charge',
            'Représentation ou assistance à l\'audience du Tribunal de Police',
          ],
          feeNote: 'Les honoraires peuvent être pris en charge par votre assurance protection juridique, selon les conditions de votre contrat.',
        },
        successions: {
          title: "Règlement Successoral & Liquidation d'Indivision",
          path: 'Analyse Patrimoniale & Partage',
          desc: "Analyse des droits réservataires, contestation des donations litigieuses ou sortie d'indivision. Le cabinet recherche une transaction amiable avant d'engager une action en partage judiciaire.",
          steps: [
            "Audit de l'actif et du passif successoral avec le notaire",
            "Négociation d'un protocole transactionnel entre héritiers",
            'Action judiciaire en cas de blocage persistant',
          ],
          feeNote: "125 € TTC pour le diagnostic initial des titres et de l'arbre successoral.",
        },
      },
    },
    fees: {
      pageTitle: 'Transparence des Honoraires',
      pageSubtitle: 'Une grille tarifaire prévisible et transparente dès le premier rendez-vous, sans mauvaise surprise.',
      sectionBadge: 'Transparence Déontologique & Prévisibilité',
      sectionTitle: 'Des honoraires clairs, sans surprise financière.',
      sectionIntro: 'La relation de confiance entre un avocat et son client repose sur une parfaite clarté dès le premier contact. Maître Philippe Maistriau applique des modalités tarifaires transparentes formalisées par une convention écrite.',
      card1: {
        category: 'Premier Rendez-vous',
        title: "Consultation d'orientation",
        amount: '125 €',
        subAmount: 'TTC (103,31 € HTVA)',
        p1: 'Durée non strictement limitée (nous prenons le temps d’analyser vos pièces).',
        p2: 'Étude de vos droits et de la faisabilité juridique.',
        p3: 'Définition de la stratégie (négociation amiable ou saisine du juge).',
        p4: 'Au cabinet à Etterbeek ou par visioconférence.',
        btn: 'Demander ce rendez-vous',
      },
      card2: {
        category: 'Traitement au fond',
        title: 'Défense & Contentieux',
        amount: '150 €',
        subAmount: 'HTVA / h + 10% frais admin',
        p1: '150 € HTVA / h de travail effectif.',
        p2: '+ 10% de frais administratifs (ouverture, courriers, secrétariat).',
        p3: 'Convention d’honoraires écrite conclue dès le début.',
        p4: 'Relevé détaillé et transparent de chaque prestation.',
        footerNote: 'Provisions échelonnées selon l’avancement réel de votre dossier.',
      },
      card3: {
        category: 'Assurance',
        title: 'Protection Juridique',
        amount: '0 €',
        subAmount: 'à votre charge (selon contrat)',
        p1: 'Les honoraires peuvent être pris en charge par votre assurance protection juridique, selon les conditions de votre contrat.',
        p2: 'Fréquent en circulation routière (auto) et RC familiale.',
        p3: 'Libre choix de l’avocat garanti par la loi (l’assureur ne peut vous l’imposer).',
        p4: 'Le cabinet prend en charge le contact direct avec votre assureur.',
        footerNote: 'Munissez-vous de votre police d’assurance lors de votre consultation.',
      },
      proDeo: {
        title: "Précision déontologique relative à l'aide juridique (Pro Deo)",
        text: "Le cabinet de Maître Philippe Maistriau n'intervient pas dans le cadre de l'aide juridique de deuxième ligne (système Pro Deo). Si votre situation financière vous ouvre le droit à l'aide juridique gratuite, nous vous invitons à consulter le Bureau d’Aide Juridique (BAJ) de l'Ordre français des avocats du Barreau de Bruxelles (rue de la Régence 63, 1000 Bruxelles).",
      },
    },
    simulator: {
      badge: "Simulateur d'honoraires transparent",
      title: 'Simulation du coût horaire',
      referenceRateLabel: 'Tarif de référence',
      referenceRateValue: '150 € HTVA / h + 10% frais admin',
      presetsLabel: 'Scénarios types fréquents :',
      presets: {
        advice: 'Conseil & Mise en demeure',
        bail: 'Litige locatif (Bail)',
        divorceConsent: 'Divorce consentement mutuel',
        familyCourt: 'Procédure Tribunal de la Famille',
        inheritance: 'Contentieux successoral complexe',
      },
      hoursLabel: "Nombre d'heures estimées :",
      hourUnit: 'heure',
      hoursUnit: 'heures',
      hoursScale1: '1 heure',
      hoursScale10: '10 heures',
      hoursScale20: '20 heures',
      hoursScale30: '30 heures',
      hoursScale40: '40+ heures',
      notes: {
        admin: "Frais administratifs de 10% : couvrent l'ouverture du dossier, les correspondances, l'archivage sécurisé et le secrétariat juridique.",
        vat: "TVA légale de 21% : applicable en Belgique sur toutes les prestations juridiques d'avocat depuis 2014.",
        firstConsult: "1ère consultation d'orientation : reste toujours au tarif forfaitaire unique de 125 € TTC (non soumise au taux horaire).",
      },
      breakdownTitle: "Détail de l'estimation",
      breakdownFor: 'Pour {hours} heure{s} de travail',
      baseFeesLabel: 'Honoraires de base ({hours}h × 150 €) :',
      adminFeesLabel: 'Frais administratifs (+10%) :',
      subtotalLabel: 'Sous-total HTVA (165 € / h) :',
      vatLabel: 'TVA belge (21%) :',
      totalLabel: 'Total estimé TTC :',
      approxHourlyLabel: '(~{rate} € TTC / h)',
      disclaimer: "Ce simulateur fournit une estimation indicative. Une convention d'honoraires écrite détaillée est systématiquement établie avec vous lors de l'ouverture du dossier.",
      bookBtn: 'Prendre consultation (125 € TTC)',
    },
    contact: {
      pageTitle: 'Contactez-nous',
      warningNotice: 'Attention: Tout formulaire non dûment complété ne sera pas pris en considération.',
      headline: 'Vous faites face à une crise familiale ou à un conflit immobilier ? Ne restez pas dans l\'incertitude.',
      subtext: 'Qu\'il s\'agisse d\'un divorce, d\'une succession ou d\'un litige locatif, contactez le cabinet pour bénéficier d\'une stratégie juridique claire. Nous nous engageons à défendre vos intérêts et à trouver l\'issue la plus favorable, que ce soit par la médiation ou la voie judiciaire.',
      googleCalendarBtn: 'Réserver via Google Agenda',
      optionsBtn: 'Options de rendez-vous',
      formTitle: 'Envoyer un message',
      form: {
        fullName: 'Nom complet *',
        fullNamePlaceholder: 'Votre nom et prénom',
        email: 'Adresse e-mail *',
        emailPlaceholder: 'votre.email@exemple.be',
        phone: 'Numéro de téléphone *',
        phonePlaceholder: '+32 ...',
        subject: 'Matière concernée',
        subjects: {
          family: 'Droit de la Famille & Divorce',
          mediation: 'Médiation Familiale Agréée',
          bail: 'Baux à Loyer & Conflit Immobilier',
          successions: 'Règlement de Succession',
          other: 'Autre demande',
        },
        message: 'Votre message *',
        messagePlaceholder: 'Veuillez décrire succinctement votre litige...',
        submitBtn: 'Transmettre le formulaire',
        submittingBtn: 'Envoi en cours…',
        successTitle: 'Message envoyé',
        successMsg: 'Merci, votre message a bien été envoyé. Le cabinet vous répondra dans les meilleurs délais.',
        sendAnother: 'Envoyer un autre message',
        errorMsg: "L'envoi a échoué. Merci de réessayer ou d'écrire directement à p.maistriau@gmail.com.",
        gdpr: 'Les données transmises sont utilisées uniquement pour répondre à votre demande, dans le respect du secret professionnel.',
      },
    },
    faq: {
      pageTitle: 'Foire aux Questions',
      pageSubtitle: 'Trouvez les réponses détaillées à vos questions relatives aux honoraires, au droit de la famille et aux baux à loyer.',
      bottomTitle: 'Une question reste sans réponse ?',
      bottomSubtitle: 'Contactez directement le cabinet pour une consultation d\'orientation personnalisée.',
      bookBtn: 'Prendre rendez-vous (125 € TTC)',
      groups: [
        {
          title: 'Rendez-vous et Honoraires',
          items: [
            {
              id: 'faq-1',
              question: "Quel est le coût d'une première consultation ?",
              answer: "La première consultation est facturée au tarif forfaitaire unique de 125 € TTC. Contrairement aux rendez-vous de suivi, cette première rencontre n'est pas limitée dans le temps : nous prenons la durée nécessaire pour analyser votre situation, répondre à vos questions et définir ensemble la stratégie à adopter.",
            },
            {
              id: 'faq-2',
              question: 'Comment sont facturées les prestations suivantes ?',
              answer: "Si nous décidons de travailler ensemble après le premier rendez-vous, les prestations (rédaction d'actes, conclusions, assistance aux audiences, courriers) sont facturées au taux horaire, selon les conditions générales convenues et signées lors de l'ouverture du dossier. Vous recevrez des états de frais et honoraires détaillés pour une totale transparence.",
            },
            {
              id: 'faq-3',
              question: 'Que se passe-t-il si je dois annuler mon rendez-vous ?',
              answer: "Nous comprenons que des imprévus peuvent survenir. Toutefois, toute annulation doit être communiquée au cabinet au moins 24 heures à l'avance. Passé ce délai, ou en cas d'absence non justifiée, une indemnité forfaitaire de 50 € sera facturée.",
            },
            {
              id: 'faq-4',
              question: 'Acceptez-vous les dossiers à l\'aide juridique (Pro Deo) ?',
              answer: "Le cabinet privilégie un accompagnement personnalisé et n'intervient généralement pas dans le cadre de l'aide juridique de deuxième ligne (anciennement Pro Deo). Nous vous invitons à vérifier votre éligibilité auprès du Bureau d'Aide Juridique de Bruxelles.",
            },
          ],
        },
        {
          title: 'Droit de la Famille & Divorce',
          items: [
            {
              id: 'faq-5',
              question: 'Quelle est la différence entre un divorce à l\'amiable et un divorce contentieux ?',
              answer: "Le divorce par consentement mutuel (amiable) suppose que les époux soient d'accord sur tout : le principe du divorce et ses conséquences (garde des enfants, partage des biens, pensions). C'est la voie la plus rapide. Le divorce pour désunion irrémédiable (contentieux) est nécessaire lorsqu'il y a désaccord. Le juge tranchera alors les points de litige.",
            },
            {
              id: 'faq-6',
              question: 'Combien de temps dure une procédure de divorce ?',
              answer: "Cela dépend de la complexité du dossier et de la volonté des parties. Un divorce à l'amiable peut être prononcé en quelques mois (3 à 6 mois). Un divorce contentieux peut durer plus longtemps, surtout si le partage du patrimoine ou la garde des enfants fait l'objet de vifs débats.",
            },
            {
              id: 'faq-7',
              question: 'Comment est fixé le montant de la pension alimentaire ?',
              answer: "Il n'existe pas de barème unique et automatique. Le montant de la contribution alimentaire pour les enfants est calculé en fonction des facultés contributives de chaque parent (revenus) et des besoins de l'enfant (frais scolaires, hébergement, âge). Chaque situation est évaluée au cas par cas.",
            },
            {
              id: 'faq-8',
              question: 'Pourquoi choisir la médiation familiale ?',
              answer: "En tant qu'avocat formé à la médiation, je recommande cette voie pour préserver les relations familiales, surtout en présence d'enfants. La médiation permet de construire ensemble une solution durable et acceptée par tous, plutôt que de se voir imposer une décision par un juge. C'est souvent moins coûteux et moins traumatisant qu'un procès.",
            },
          ],
        },
        {
          title: 'Baux à Loyer & Immobilier',
          items: [
            {
              id: 'faq-9',
              question: 'Mon locataire ne paie plus son loyer, que faire ?',
              answer: "Il ne faut pas attendre que la dette s'accumule. La première étape est l'envoi d'une mise en demeure formelle. Si celle-ci reste sans effet, nous saisirons le Juge de Paix pour obtenir la condamnation au paiement des arriérés et, si nécessaire, la résolution du bail (expulsion).",
            },
            {
              id: 'faq-10',
              question: 'Puis-je changer les serrures si mon locataire ne paie pas ?',
              answer: "Absolument pas. Se faire justice soi-même est illégal et peut se retourner contre vous pénalement. L'expulsion d'un locataire ne peut se faire que sur base d'un titre exécutoire (jugement) et doit être réalisée par un huissier de justice.",
            },
            {
              id: 'faq-11',
              question: 'Je suis locataire et mon propriétaire refuse de me rendre ma garantie locative. Quels sont mes droits ?',
              answer: "Le propriétaire ne peut retenir la garantie que s'il prouve l'existence de dégâts locatifs (via un état des lieux de sortie comparé à l'entrée) ou d'arriérés de loyers/charges. S'il retient la garantie abusivement, nous pouvons introduire une action pour en obtenir la libération, majorée des intérêts.",
            },
          ],
        },
      ],
    },
    mentions: {
      title: 'Mentions légales',
      subtitle: 'Cabinet de Maître Philippe Maistriau · Avocat au Barreau de Bruxelles',
      companyTitle: 'Identité de l’entreprise',
      lawyerNameLabel: 'Nom de l\'avocat',
      vatLabel: "Numéro d'identification TVA",
      addressLabel: 'Adresse du cabinet',
      phoneEmailLabel: 'Téléphone & Email',
      ipTitle: 'Propriété intellectuelle',
      ipText: 'La structure générale du site ainsi que les textes, graphiques, images, sons et vidéos la composant, sont la propriété exclusive du cabinet de Maître Philippe MAISTRIAU ou de ses partenaires. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de ce site, par quelque procédé que ce soit, sans l\'autorisation préalable et par écrit de Maître Philippe MAISTRIAU est strictement interdite et serait susceptible de constituer une contrefaçon au sens du Code de droit économique belge.',
      disclaimerTitle: 'Clause de non-responsabilité',
      disclaimerP1: 'Les informations contenues sur le site ont un caractère strictement informatif et général. Elles ne prétendent pas à l\'exhaustivité et ne constituent en aucun cas un avis juridique, une consultation ou une sollicitation personnalisée. La lecture de ces informations ne crée pas de relation avocat-client entre l\'utilisateur et le cabinet de Maître Philippe MAISTRIAU.',
      disclaimerP2: 'Bien que le cabinet s\'efforce de fournir des informations précises et à jour, l\'actualité juridique et législative (notamment en droit de la famille et droit du bail) est en constante évolution. En conséquence, Maître Philippe MAISTRIAU ne peut garantir l\'exactitude, la précision ou la mise à jour des informations diffusées sur ce site au moment où l\'utilisateur en prend connaissance.',
      gdprTitle: 'Traitement des données personnelles (RGPD)',
      gdprP1: 'Le cabinet de Maître Philippe MAISTRIAU attache une importance capitale à la protection de votre vie privée et de vos données personnelles. Cette politique vise à vous informer de la manière dont nous collectons et traitons vos données, conformément au Règlement Général sur la Protection des Données (RGPD) et à la législation belge.',
      gdprItems: {
        controller: 'Responsable du traitement : Maître Philippe MAISTRIAU, Rue Abbé Cuypers 3 à 1040 Etterbeek, Belgique (p.maistriau@gmail.com).',
        purposes: 'Finalités : Gestion des demandes de rendez-vous et de contact, traitement de votre dossier juridique, facturation et respect des obligations légales.',
        secrecy: 'Secret Professionnel : En tant qu\'avocat, Maître Philippe MAISTRIAU est tenu au secret professionnel le plus strict. Vos données ne sont jamais vendues ni cédées à des tiers.',
        rights: 'Vos droits : Droit d\'accès, de rectification, d\'effacement et de limitation sur simple demande écrite.',
      },
    },
    footer: {
      openingHoursTitle: "Horaires d'ouverture",
      days: 'Du lundi au vendredi',
      morning: 'De 09 h à 12 h',
      afternoon: 'De 14 h à 18 h',
      followUsTitle: 'Nous suivre',
      subtext: 'Barreau de Bruxelles · Consultations sur rendez-vous',
      partnersLabel: 'Partenaires :',
      partnerCognitiveDesc: 'cognitive-studio.be',
      partnerAnaDesc: 'Me Ana Ferreira (avocate-anaferreira.com)',
      legalNoticeLink: 'Mentions Légales',
      feeTransparencyLink: 'Transparence des honoraires',
      copyright: '© 2026 Cabinet d\'Avocat Philippe Maistriau. All rights reserved.',
    },
    bookingModal: {
      cabinetEtterbeek: 'Cabinet Maistriau · Etterbeek',
      title: 'Prendre Rendez-vous',
      subtitle: 'Première consultation forfaitaire à 125 € TTC (durée non strictement limitée).',
      option1Title: 'Agenda Google officiel',
      option1Realtime: 'Temps réel',
      option1Desc: 'Consulter les créneaux disponibles et réserver instantanément',
      option2Title: 'Afficher l\'agenda Google dans la fenêtre',
      option2Desc: 'Consulter sans quitter le site',
      option3Title: 'Remplir une demande par formulaire',
      option3Desc: 'Si vous préférez être recontacté directement',
      phoneLabel: 'Téléphone :',
      addressLabel: 'Rue Abbé Cuypers, 3 · Etterbeek',
      calendarHeader: 'Agenda Google · Prendre Rendez-vous en direct',
      fullscreen: 'Plein écran',
      calendarDesc: 'Choisissez directement votre date et votre plage horaire parmi les créneaux synchronisés de Maître Philippe Maistriau.',
      calendarQuestion: 'Une question ?',
      calendarNewTab: 'Ouvrir l\'agenda dans un nouvel onglet',
      backBtn: '← Retour',
      feeNotice: 'Première consultation forfaitaire : 125 € TTC',
      formHeader: 'Formulaire de rendez-vous',
      backToOptions: '← Retour aux options',
      cabinetChoice: 'Au cabinet (Etterbeek)',
      visioChoice: 'Visioconférence',
      fullName: 'Nom et Prénom *',
      email: 'Email *',
      phone: 'Téléphone *',
      date: 'Date souhaitée *',
      purpose: 'Objet du rendez-vous',
      purposePlaceholder: 'Divorce, succession, litige locatif, médiation...',
      cancelBtn: 'Annuler',
      submitBtn: 'Confirmer la demande',
      submittingBtn: 'Envoi en cours…',
      successTitle: 'Demande enregistrée',
      successMsg: 'Merci, votre message a bien été envoyé. Le cabinet vous répondra dans les meilleurs délais.',
      modeLabel: 'Mode :',
      cabinetLabel: 'Au cabinet (Rue Abbé Cuypers, 3)',
      visioLabel: 'Visioconférence',
      requestedDateLabel: 'Date souhaitée :',
      flatFeeLabel: 'Tarif forfaitaire :',
      flatFeeDetail: '125 € TTC (durée non strictement limitée)',
      closeBtn: 'Fermer',
      errorMsg: "L'envoi a échoué. Merci de réessayer ou d'écrire directement à p.maistriau@gmail.com.",
      gdpr: 'Les données transmises sont utilisées uniquement pour répondre à votre demande, dans le respect du secret professionnel.',
    },
    reviewModal: {
      tag: 'Témoignage',
      title: 'Laisser un avis',
      desc: 'Votre retour d\'expérience est précieux pour faire connaître la qualité de l\'accompagnement de Maître Philippe Maistriau.',
      boxText: 'Les avis sont collectés directement sur notre fiche Google Maps afin de garantir leur consultation publique et transparente.',
      leaveReviewBtn: 'Laisser votre avis sur Google',
      viewReviewsBtn: 'Voir les avis sur Google',
      closeBtn: 'Fermer',
    },
  },
  en: {
    header: {
      nav: {
        home: 'Home',
        about: 'About',
        orientation: 'Guidance (3 clicks)',
        honoraires: 'Fees',
        contact: 'Contact',
        faq: 'FAQ',
      },
      bookingBtn: 'Appointment',
      bookingBtnShort: 'Book',
    },
    home: {
      heroHeadline: 'Expert legal solutions with a human approach',
      bookAppointment: 'Book an appointment',
      orientationBtn: '3-click legal guidance',
      testimonialsTitle: 'Client Testimonials',
      testimonialsSubtitle: 'Feedback from clients assisted and represented by Maître Philippe Maistriau.',
      googleBoxText: 'Find all verified reviews on our Google profile',
      viewGoogleReviews: 'View reviews on Google',
      leaveGoogleReview: 'Leave a review on Google',
      areaLabel: 'Practice area:',
      prevReviewAria: 'Previous review',
      nextReviewAria: 'Next review',
      goToReviewAria: 'Go to review',
    },
    about: {
      title: 'About Me Philippe Maistriau',
      paragraphs: [
        'Maître Philippe Maistriau brings over 35 years of experience and dedicated advocacy to serve your interests. Because every situation is unique, he is committed to providing attentive listening and fully tailored guidance to help you navigate through challenging times.',
        'His practice encompasses all aspects of family law (divorce, child custody, maintenance / child support) as well as estate and inheritance settlements.',
        'Accredited in family mediation, Maître Maistriau consistently prioritises dialogue and amicable out-of-court solutions whenever possible to resolve disputes efficiently.',
      ],
      contactSectionTitle: 'Contact Us',
      contactSectionDesc: 'Would you like to discuss your matter with us? Fill out the form and we will get back to you promptly. Do not hesitate to contact us!',
      form: {
        firstName: 'First name *',
        lastName: 'Last name *',
        email: 'Email *',
        message: 'Message *',
        submitBtn: 'Send Message',
        submittingBtn: 'Sending…',
        successTitle: 'Message Sent',
        successMsg: 'Thank you, your message has been successfully sent. The firm will reply as soon as possible.',
        sendAnother: 'Send another message',
        errorMsg: 'Sending failed. Please try again or write directly to p.maistriau@gmail.com.',
        gdpr: 'The data submitted is used solely to respond to your request, in strict compliance with professional secrecy.',
      },
    },
    orientation: {
      pageTitle: '3-Click Legal Guidance Tool',
      pageSubtitle: 'Assess in seconds the most appropriate route between amicable mediation and court proceedings.',
      sectionBadge: '3-Click Guidance Tool',
      sectionTitle: 'Identify the appropriate legal course of action for your situation.',
      sectionDesc: 'Every case is unique. Answer these quick questions to get initial guidance between negotiated mediation and legal action before Belgian courts.',
      step1Title: '1. What is the subject of your dispute?',
      step2Title: '2. Is dialogue with the other party possible?',
      step3Title: '3. Do you have legal expenses insurance?',
      step3TitleShort: '2. Do you have legal expenses insurance?',
      disclaimer: 'This tool provides general orientation and does not replace a formal legal consultation.',
      recommendedBadge: 'Recommended Course of Action',
      priorityStepsLabel: 'Recommended priority steps:',
      feesLabel: 'Legal fees:',
      consultBasisLabel: 'Consult Maître Philippe Maistriau on this basis:',
      bookConsultationBtn: 'Book consultation (€ 125)',
      dialoguePossible: 'Yes, amicable agreement sought',
      dialogueBroken: 'No, contentious dispute',
      insuranceYes: 'Yes',
      insuranceUnsure: 'To be checked',
      insuranceNo: 'No',
      matters: {
        divorce: 'Separation, Divorce or Child Custody',
        bail: 'Tenancy lease (rent arrears, eviction, dispute)',
        roulage: 'Road traffic offence (Police Court)',
        successions: 'Inheritance & Disputed Estate',
      },
      recommendations: {
        divorceAmiable: {
          title: 'Family Mediation or Divorce by Mutual Consent',
          path: 'Preferred Amicable Route',
          desc: 'Your situation is well-suited to a constructive out-of-court resolution. Maître Philippe Maistriau can act either as an accredited family mediator (neutral and impartial) or to draft comprehensive prior settlement agreements.',
          steps: [
            'Drafting parental residence and custody arrangements for children',
            'Collaborative calculation of child maintenance and extraordinary expenses',
            'Formal ratification of the agreement by the Family Court without burdensome trial hearings',
          ],
          feeNote: 'Initial flat-fee consultation at € 125 incl. VAT to structure the approach.',
        },
        divorceContentieux: {
          title: 'Proceedings before the Family Court',
          path: 'Contentious Proceedings & Urgent Measures',
          desc: 'When dialogue has broken down or urgency requires (safety, retention of children, dissipation of assets), a formal application before the Family Court allows obtaining immediate provisional measures from the judge.',
          steps: [
            'Filing an urgent contested application before the court',
            'Determination of provisional orders regarding children and family home',
            'Firm defence of your financial, property and parental rights',
          ],
          feeNote: '€ 125 incl. VAT for initial review of documents and procedural strategy.',
        },
        bail: {
          title: 'Tenancy Disputes before the Justice of the Peace',
          path: 'Specific Tenancy Procedure',
          desc: 'For residential and commercial leases in Brussels, prompt action is essential. The firm first issues a formal notice of default before bringing the matter before the Justice of the Peace if necessary to secure payment or termination.',
          steps: [
            'Detailed formal notice of default drafted by counsel',
            'Filing an application before the competent Justice of the Peace',
            'Recovery of rent arrears, release of rental deposit or lawful eviction',
          ],
          feeNote: 'Initial consultation at € 125 incl. VAT to review lease clauses and calculate arrears.',
        },
        roulage: {
          title: 'Criminal Defence before the Police Court',
          path: 'Legal expenses insurance coverage possible',
          desc: 'Prosecutions for traffic offences put your driving licence and finances at risk. Check your insurance policy: the fees may be covered by your legal expenses insurance, subject to your contract terms.',
          steps: [
            'Examination of the official police report and limitation periods',
            'Liaising with your insurance company for fee coverage',
            'Representation or assistance at the Police Court hearing',
          ],
          feeNote: 'The fees may be covered by your legal expenses insurance, subject to the conditions of your contract.',
        },
        successions: {
          title: 'Estate Settlement & Division of Co-ownership',
          path: 'Estate Analysis & Division',
          desc: 'Analysis of reserved shares (forced heirship), challenging questionable lifetime gifts, or exiting co-ownership. The firm seeks an amicable settlement before initiating judicial liquidation and division.',
          steps: [
            'Audit of estate assets and liabilities with the notary',
            'Negotiation of a settlement protocol among heirs',
            'Court action in case of persistent deadlock',
          ],
          feeNote: '€ 125 incl. VAT for initial diagnostic of estate deeds and heirship structure.',
        },
      },
    },
    fees: {
      pageTitle: 'Fee Transparency',
      pageSubtitle: 'A predictable and transparent fee structure from the very first meeting, with no unpleasant surprises.',
      sectionBadge: 'Professional Ethics & Predictability',
      sectionTitle: 'Clear fees, without financial surprises.',
      sectionIntro: 'The relationship of trust between a lawyer and client is built on complete clarity from the first contact. Maître Philippe Maistriau applies transparent pricing terms formalized by a written fee agreement.',
      card1: {
        category: 'Initial Meeting',
        title: 'Guidance consultation',
        amount: '€ 125',
        subAmount: 'incl. VAT (€ 103.31 excl. VAT)',
        p1: 'Not strictly time-limited (we take the necessary time to analyse your documents).',
        p2: 'Assessment of your legal rights and feasibility.',
        p3: 'Definition of strategy (amicable negotiation or court referral).',
        p4: 'At the office in Etterbeek or via videoconference.',
        btn: 'Request this appointment',
      },
      card2: {
        category: 'Substantive Handling',
        title: 'Defence & Litigation',
        amount: '€ 150',
        subAmount: 'excl. VAT / hour + 10% administrative costs',
        p1: '€ 150 excl. VAT / hour of effective work.',
        p2: '+ 10% administrative costs (file setup, correspondence, legal secretariat).',
        p3: 'Written fee agreement concluded from the outset.',
        p4: 'Detailed and transparent breakdown of every service provided.',
        footerNote: 'Provisional payments phased according to the actual progress of your file.',
      },
      card3: {
        category: 'Insurance',
        title: 'Legal Expenses Insurance',
        amount: '€ 0',
        subAmount: 'at your expense (subject to policy)',
        p1: 'The fees may be covered by your legal expenses insurance, subject to the conditions of your contract.',
        p2: 'Common in road traffic (motor) and family civil liability policies.',
        p3: 'Free choice of lawyer guaranteed by law (the insurer cannot impose counsel on you).',
        p4: 'The firm handles direct communications with your insurer.',
        footerNote: 'Please bring your insurance policy details to your consultation.',
      },
      proDeo: {
        title: 'Professional ethics notice regarding legal aid (Pro Deo)',
        text: 'The law firm of Maître Philippe Maistriau does not handle cases under secondary legal aid (Pro Deo). If your financial circumstances qualify you for free legal aid, we invite you to contact the Legal Aid Bureau (BAJ) of the Brussels Bar (rue de la Régence 63, 1000 Brussels).',
      },
    },
    simulator: {
      badge: 'Transparent Fee Simulator',
      title: 'Hourly Rate Simulation',
      referenceRateLabel: 'Reference rate',
      referenceRateValue: '€ 150 excl. VAT / hour + 10% administrative costs',
      presetsLabel: 'Frequent standard scenarios:',
      presets: {
        advice: 'Advice & Formal Notice',
        bail: 'Tenancy Dispute (Lease)',
        divorceConsent: 'Divorce by Mutual Consent',
        familyCourt: 'Family Court Proceedings',
        inheritance: 'Complex Inheritance Dispute',
      },
      hoursLabel: 'Estimated number of hours:',
      hourUnit: 'hour',
      hoursUnit: 'hours',
      hoursScale1: '1 hour',
      hoursScale10: '10 hours',
      hoursScale20: '20 hours',
      hoursScale30: '30 hours',
      hoursScale40: '40+ hours',
      notes: {
        admin: '10% administrative costs: covers file setup, communications, secure archiving, and legal secretariat.',
        vat: 'Statutory 21% VAT: applicable in Belgium to all legal services rendered by lawyers since 2014.',
        firstConsult: 'Initial guidance consultation: always remains at the single flat rate of € 125 incl. VAT (not subject to hourly billing).',
      },
      breakdownTitle: 'Estimation Breakdown',
      breakdownFor: 'For {hours} hour{s} of work',
      baseFeesLabel: 'Base fees ({hours}h × € 150):',
      adminFeesLabel: 'Administrative costs (+10%):',
      subtotalLabel: 'Subtotal excl. VAT (€ 165 / h):',
      vatLabel: 'Belgian VAT (21%):',
      totalLabel: 'Estimated total incl. VAT:',
      approxHourlyLabel: '(~€ {rate} incl. VAT / h)',
      disclaimer: 'This simulator provides an indicative estimate. A detailed written fee agreement is systematically executed with you upon opening the file.',
      bookBtn: 'Book consultation (€ 125 incl. VAT)',
    },
    contact: {
      pageTitle: 'Contact Us',
      warningNotice: 'Please note: Any form that is not properly completed will not be considered.',
      headline: 'Facing a family crisis or a property conflict? Do not remain in uncertainty.',
      subtext: 'Whether dealing with a divorce, an inheritance, or a tenancy dispute, contact the firm for a clear legal strategy. We are committed to protecting your interests and finding the most favourable outcome, through family mediation or before the courts.',
      googleCalendarBtn: 'Book via Google Calendar',
      optionsBtn: 'Appointment options',
      formTitle: 'Send a Message',
      form: {
        fullName: 'Full Name *',
        fullNamePlaceholder: 'Your first and last name',
        email: 'Email Address *',
        emailPlaceholder: 'your.email@example.com',
        phone: 'Phone Number *',
        phonePlaceholder: '+32 ...',
        subject: 'Practice Area',
        subjects: {
          family: 'Family Law & Divorce',
          mediation: 'Accredited Family Mediation',
          bail: 'Tenancy Leases & Property Disputes',
          successions: 'Estate & Inheritance Settlement',
          other: 'Other request',
        },
        message: 'Your message *',
        messagePlaceholder: 'Please briefly describe your situation...',
        submitBtn: 'Submit Form',
        submittingBtn: 'Sending…',
        successTitle: 'Message Sent',
        successMsg: 'Thank you, your message has been successfully sent. The firm will reply as soon as possible.',
        sendAnother: 'Send another message',
        errorMsg: 'Sending failed. Please try again or write directly to p.maistriau@gmail.com.',
        gdpr: 'The data submitted is used solely to respond to your request, in strict compliance with professional secrecy.',
      },
    },
    faq: {
      pageTitle: 'Frequently Asked Questions',
      pageSubtitle: 'Find detailed answers to your questions regarding legal fees, family law, and tenancy leases.',
      bottomTitle: 'Still have an unanswered question?',
      bottomSubtitle: 'Contact the firm directly for a tailored guidance consultation.',
      bookBtn: 'Book an appointment (€ 125 incl. VAT)',
      groups: [
        {
          title: 'Appointments & Legal Fees',
          items: [
            {
              id: 'faq-1',
              question: 'What is the cost of an initial consultation?',
              answer: 'The initial consultation is billed at a single flat fee of € 125 incl. VAT. Unlike routine follow-up meetings, this first meeting is not strictly time-limited: we take all necessary time to analyse your situation, answer your questions, and collaboratively define the appropriate strategy.',
            },
            {
              id: 'faq-2',
              question: 'How are subsequent services billed?',
              answer: 'If we proceed together after the initial meeting, legal services (drafting court pleadings, written submissions, court hearing attendance, correspondence) are billed at an hourly rate, in accordance with the general terms agreed and signed when opening the file. You will receive detailed fee statements for complete transparency.',
            },
            {
              id: 'faq-3',
              question: 'What happens if I need to cancel my appointment?',
              answer: 'We understand that unexpected circumstances arise. However, any cancellation must be notified to the firm at least 24 hours in advance. Beyond this timeframe, or in the event of an unjustified absence, a flat cancellation fee of € 50 will be charged.',
            },
            {
              id: 'faq-4',
              question: 'Do you accept cases under legal aid (Pro Deo)?',
              answer: 'The firm focuses on dedicated, highly personalized representation and does not take on cases under secondary legal aid (Pro Deo). We invite you to check your eligibility with the Brussels Legal Aid Bureau (BAJ).',
            },
          ],
        },
        {
          title: 'Family Law & Divorce',
          items: [
            {
              id: 'faq-5',
              question: 'What is the difference between an amicable and a contested divorce?',
              answer: 'Divorce by mutual consent (amicable) requires that both spouses agree on all aspects: the dissolution itself and its consequences (child custody, division of property, maintenance). This is the swiftest path. Divorce on grounds of irretrievable breakdown (contentious) is required when disagreements persist. The court will then adjudicate disputed matters.',
            },
            {
              id: 'faq-6',
              question: 'How long does a divorce procedure take?',
              answer: 'This depends on the complexity of the matter and the parties\' cooperation. An amicable divorce can be finalized in a few months (3 to 6 months). A contentious divorce may take longer, particularly if asset division or child custody is strongly disputed.',
            },
            {
              id: 'faq-7',
              question: 'How is the amount of maintenance (child support) determined?',
              answer: 'There is no single automatic scale. Child maintenance contributions are calculated based on the respective financial capacities of each parent (income) and the specific needs of the child (schooling, housing, age). Each situation is assessed on a case-by-case basis.',
            },
            {
              id: 'faq-8',
              question: 'Why choose family mediation?',
              answer: 'As an attorney trained and accredited in family mediation, I recommend this approach to preserve family relations, particularly when children are involved. Mediation enables both parties to build a durable, mutually accepted solution rather than having a ruling imposed by a judge. It is generally less costly and far less adversarial than litigation.',
            },
          ],
        },
        {
          title: 'Tenancy Leases & Property',
          items: [
            {
              id: 'faq-9',
              question: 'My tenant has stopped paying rent, what should I do?',
              answer: 'Do not allow arrears to accumulate. The first essential step is sending a formal notice of default. If this remains unheeded, we will bring the matter before the Justice of the Peace to obtain an order for payment and, where appropriate, lease termination and eviction.',
            },
            {
              id: 'faq-10',
              question: 'Can I change the locks if my tenant fails to pay?',
              answer: 'Absolutely not. Taking the law into your own hands is illegal and constitutes a criminal offence. The eviction of a tenant can only occur pursuant to an enforceable court judgment and must be carried out by a judicial officer (huissier de justice).',
            },
            {
              id: 'faq-11',
              question: 'I am a tenant and my landlord refuses to return my deposit. What are my rights?',
              answer: 'The landlord may only retain the deposit if they prove rental damage (via an exit inventory compared against the entry inventory) or unpaid rent/charges. If the deposit is wrongfully retained, we can institute legal proceedings to secure its release with statutory interest.',
            },
          ],
        },
      ],
    },
    mentions: {
      title: 'Legal Notice',
      subtitle: 'Law Firm of Maître Philippe Maistriau · Lawyer at the Brussels Bar',
      companyTitle: 'Company & Professional Identity',
      lawyerNameLabel: 'Lawyer name',
      vatLabel: 'VAT identification number',
      addressLabel: 'Office address',
      phoneEmailLabel: 'Telephone & Email',
      ipTitle: 'Intellectual Property',
      ipText: 'The overall structure of the website as well as texts, graphics, images, audio, and video content are the exclusive property of the law firm of Maître Philippe MAISTRIAU or its partners. Any representation, reproduction, or exploitation in whole or in part of this website, by any means whatsoever, without the prior written consent of Maître Philippe MAISTRIAU is strictly prohibited and constitutes an infringement under the Belgian Code of Economic Law.',
      disclaimerTitle: 'Disclaimer',
      disclaimerP1: 'The information provided on this website is of a strictly general and informational nature. It does not claim to be exhaustive and under no circumstances constitutes legal advice, formal consultation, or personalized solicitation. Reading this information does not establish a lawyer-client relationship between the user and the law firm of Maître Philippe MAISTRIAU.',
      disclaimerP2: 'Although the firm makes every effort to provide accurate and up-to-date information, legal and regulatory developments (particularly in family law and tenancy law) are constantly evolving. Consequently, Maître Philippe MAISTRIAU cannot guarantee the accuracy, completeness, or timeliness of the information published on this website at the time it is accessed by the user.',
      gdprTitle: 'Personal Data Processing (GDPR)',
      gdprP1: 'The law firm of Maître Philippe MAISTRIAU places utmost importance on protecting your privacy and personal data. This policy is designed to inform you of how we collect and process your data in compliance with the General Data Protection Regulation (GDPR) and Belgian data protection legislation.',
      gdprItems: {
        controller: 'Data Controller: Maître Philippe MAISTRIAU, Rue Abbé Cuypers 3, 1040 Etterbeek, Belgium (p.maistriau@gmail.com).',
        purposes: 'Purposes: Handling appointment requests and inquiries, managing your legal case, billing, and complying with statutory obligations.',
        secrecy: 'Professional Secrecy: As an attorney, Maître Philippe MAISTRIAU is bound by the strictest professional secrecy. Your data is never sold, traded, or shared with third parties.',
        rights: 'Your Rights: Right of access, rectification, erasure, and restriction of processing upon simple written request.',
      },
    },
    footer: {
      openingHoursTitle: 'Opening Hours',
      days: 'Monday to Friday',
      morning: 'From 9:00 AM to 12:00 PM',
      afternoon: 'From 2:00 PM to 6:00 PM',
      followUsTitle: 'Follow Us',
      subtext: 'Brussels Bar · Consultations by appointment',
      partnersLabel: 'Partners:',
      partnerCognitiveDesc: 'cognitive-studio.be',
      partnerAnaDesc: 'Me Ana Ferreira (avocate-anaferreira.com)',
      legalNoticeLink: 'Legal Notice',
      feeTransparencyLink: 'Fee Transparency',
      copyright: '© 2026 Law Firm Philippe Maistriau. All rights reserved.',
    },
    bookingModal: {
      cabinetEtterbeek: 'Cabinet Maistriau · Etterbeek',
      title: 'Book an Appointment',
      subtitle: 'Initial flat-fee consultation at € 125 incl. VAT (not strictly time-limited).',
      option1Title: 'Official Google Calendar',
      option1Realtime: 'Real-time',
      option1Desc: 'View available slots and book instantly',
      option2Title: 'Show Google Calendar in window',
      option2Desc: 'View schedule without leaving the site',
      option3Title: 'Submit a request by form',
      option3Desc: 'If you prefer to be contacted directly by the firm',
      phoneLabel: 'Telephone:',
      addressLabel: 'Rue Abbé Cuypers, 3 · Etterbeek',
      calendarHeader: 'Google Calendar · Live Appointment Booking',
      fullscreen: 'Full screen',
      calendarDesc: 'Choose your date and time slot directly from Maître Philippe Maistriau\'s synchronized schedule.',
      calendarQuestion: 'Have a question?',
      calendarNewTab: 'Open calendar in a new tab',
      backBtn: '← Back',
      feeNotice: 'Initial flat-fee consultation: € 125 incl. VAT',
      formHeader: 'Appointment Request Form',
      backToOptions: '← Back to options',
      cabinetChoice: 'At the office (Etterbeek)',
      visioChoice: 'Videoconference',
      fullName: 'Full Name *',
      email: 'Email *',
      phone: 'Phone *',
      date: 'Desired Date *',
      purpose: 'Subject of Appointment',
      purposePlaceholder: 'Divorce, inheritance, tenancy dispute, mediation...',
      cancelBtn: 'Cancel',
      submitBtn: 'Confirm Request',
      submittingBtn: 'Sending…',
      successTitle: 'Request Submitted',
      successMsg: 'Thank you, your message has been successfully sent. The firm will reply as soon as possible.',
      modeLabel: 'Format:',
      cabinetLabel: 'At the office (Rue Abbé Cuypers, 3)',
      visioLabel: 'Videoconference',
      requestedDateLabel: 'Requested date:',
      flatFeeLabel: 'Flat fee:',
      flatFeeDetail: '€ 125 incl. VAT (not strictly time-limited)',
      closeBtn: 'Close',
      errorMsg: 'Sending failed. Please try again or write directly to p.maistriau@gmail.com.',
      gdpr: 'The data submitted is used solely to respond to your request, in strict compliance with professional secrecy.',
    },
    reviewModal: {
      tag: 'Testimonial',
      title: 'Leave a Review',
      desc: 'Your feedback is valuable in sharing the quality of Maître Philippe Maistriau\'s legal guidance.',
      boxText: 'Reviews are collected directly on our Google Maps profile to ensure public and transparent viewing.',
      leaveReviewBtn: 'Leave your review on Google',
      viewReviewsBtn: 'View reviews on Google',
      closeBtn: 'Close',
    },
  },
};
