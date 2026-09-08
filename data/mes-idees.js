// Présidentielle, simplement. — données séparées du site
// Tu peux modifier ce fichier sans toucher à index.html.
// Les données restent chargées localement par le navigateur.

window.PS_DATA = window.PS_DATA || {};

window.PS_DATA.quiz = [
  {
    "id": "q1",
    "text": "Le SMIC devrait être fortement augmenté par décision publique.",
    "topic": "Salaire & SMIC"
  },
  {
    "id": "q2",
    "text": "Il faudrait surtout augmenter le salaire net en baissant les prélèvements sur le travail.",
    "topic": "Salaire net"
  },
  {
    "id": "q3",
    "text": "La réforme des retraites de 2023 devrait être abrogée ou remplacée par un système plus favorable aux départs plus tôt.",
    "topic": "Retraites"
  },
  {
    "id": "q4",
    "text": "La France devrait réduire fortement l’immigration.",
    "topic": "Immigration"
  },
  {
    "id": "q5",
    "text": "Les hauts patrimoines et les très grosses fortunes devraient être davantage taxés.",
    "topic": "Fiscalité"
  },
  {
    "id": "q6",
    "text": "La France devrait rester dans l’Union européenne.",
    "topic": "Union européenne"
  },
  {
    "id": "q7",
    "text": "La France devrait rester membre de l’OTAN.",
    "topic": "OTAN"
  },
  {
    "id": "q8",
    "text": "La France devrait continuer à fournir une aide militaire à l’Ukraine face à la Russie.",
    "topic": "Ukraine / Russie"
  }
];
window.PS_DATA.quizProfiles = {
  "melenchon": {
    "label": "Jean-Luc Mélenchon",
    "status": "Candidature déclarée",
    "positions": {
      "q1": {
        "value": "agree",
        "note": "SMIC à 1 600 € net dans son programme actuel.",
        "source": "https://melenchon2027.fr/programme2025/livre/chapitre8/s4/",
        "sourceLabel": "Programme 2027 · salaires"
      },
      "q2": {
        "value": "disagree",
        "note": "Sa ligne privilégie une hausse directe des salaires plutôt qu’une baisse générale des prélèvements comme levier principal.",
        "source": "https://melenchon2027.fr/programme2025/livre/chapitre8/s4/",
        "sourceLabel": "Programme 2027 · salaires"
      },
      "q3": {
        "value": "agree",
        "note": "Il veut abroger la réforme des 64 ans et rétablir un droit au départ à 60 ans sous conditions de durée cotisée.",
        "source": "https://melenchon2027.fr/programme2025/livre/chapitre8/s8/",
        "sourceLabel": "Programme 2027 · retraites"
      },
      "q4": {
        "value": "disagree",
        "note": "Sa politique migratoire est plus ouverte et comprend davantage d’accueil et de régularisations.",
        "source": "https://melenchon2027.fr/programme2025/",
        "sourceLabel": "Programme 2027"
      },
      "q5": {
        "value": "agree",
        "note": "Il défend une fiscalité beaucoup plus progressive sur les hauts revenus et patrimoines.",
        "source": "https://melenchon2027.fr/programme2025/",
        "sourceLabel": "Programme 2027"
      },
      "q6": {
        "value": "agree",
        "note": "Il dit ne pas vouloir quitter l’Union européenne, tout en prévoyant de désobéir à certaines règles et directives.",
        "source": "https://melenchon.fr/2024/07/21/la-crise-politique-tend-a-devenir-une-crise-de-regime-entretien-avec-la-presse-europeenne/",
        "sourceLabel": "Entretien · Europe"
      },
      "q7": {
        "value": "disagree",
        "note": "LFI prévoit une sortie du commandement intégré puis, par étapes, de l’OTAN.",
        "source": "https://programme.lafranceinsoumise.fr/livrets/paix/",
        "sourceLabel": "Programme LFI · paix"
      },
      "q8": {
        "value": "agree",
        "note": "Il maintient le soutien à la souveraineté ukrainienne et une aide au cas par cas, tout en refusant certaines armes de longue portée et l’escalade.",
        "source": "https://melenchon.fr/2024/07/21/la-crise-politique-tend-a-devenir-une-crise-de-regime-entretien-avec-la-presse-europeenne/",
        "sourceLabel": "Entretien · Ukraine"
      }
    }
  },
  "lepen": {
    "label": "Marine Le Pen",
    "status": "Candidature déclarée",
    "positions": {
      "q1": {
        "value": "unknown",
        "note": "Aucun nouveau montant légal de SMIC 2027 suffisamment clair n’est chargé dans la base.",
        "source": "",
        "sourceLabel": "Position 2027 à préciser"
      },
      "q2": {
        "value": "agree",
        "note": "Sa ligne récente reste davantage orientée vers les baisses de prélèvements et des hausses de net que vers un nouveau montant légal du SMIC.",
        "source": "https://rassemblementnational.fr/",
        "sourceLabel": "Rassemblement National"
      },
      "q3": {
        "value": "agree",
        "note": "La ligne RN maintient une référence autour de 62 ans et des départs plus tôt pour certaines carrières, donc un recul par rapport aux 64 ans.",
        "source": "https://www.tf1info.fr/politique/retraites-un-changement-de-position-du-rn-n-est-pas-a-l-ordre-du-jour-assure-sur-tf1-laurent-jacobelli-2442505.html",
        "sourceLabel": "TF1 Info · retraites"
      },
      "q4": {
        "value": "agree",
        "note": "La réduction forte de l’immigration reste un axe central de sa ligne politique.",
        "source": "https://rassemblementnational.fr/",
        "sourceLabel": "Rassemblement National"
      },
      "q5": {
        "value": "disagree",
        "note": "Sa ligne fiscale actuelle privilégie surtout des baisses ou suppressions ciblées de taxes plutôt qu’une hausse générale sur les patrimoines.",
        "source": "https://rassemblementnational.fr/",
        "sourceLabel": "Rassemblement National"
      },
      "q6": {
        "value": "agree",
        "note": "Le RN ne défend plus le Frexit et dit vouloir changer le fonctionnement de l’Union de l’intérieur.",
        "source": "https://www.rtl.fr/actu/international/budget-de-l-ue-taxes-de-donald-trump-pourquoi-ursula-von-der-leyen-risque-d-etre-sur-toutes-les-levres-pendant-la-campagne-presidentielle-pour-2027-7900661557",
        "sourceLabel": "RTL · Europe 2026"
      },
      "q7": {
        "value": "agree",
        "note": "Elle dit vouloir rester membre de l’OTAN mais quitter son commandement militaire intégré.",
        "source": "https://www.dailymotion.com/video/xaasazu",
        "sourceLabel": "Entretien BFMTV/RMC · mai 2026"
      },
      "q8": {
        "value": "unknown",
        "note": "La ligne RN sur l’aide à l’Ukraine fait actuellement l’objet de déclarations divergentes ; le site n’en déduit pas une position personnelle définitive de Marine Le Pen.",
        "source": "https://www.afp.com/fr/passe-darmes-entre-le-pen-et-philippe-sur-laide-lukraine",
        "sourceLabel": "AFP · septembre 2026"
      }
    }
  },
  "philippe": {
    "label": "Édouard Philippe",
    "status": "Candidature déclarée",
    "positions": {
      "q1": {
        "value": "disagree",
        "note": "Il met davantage l’accent sur le salaire net et le financement du modèle social que sur une forte hausse légale du SMIC.",
        "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere",
        "sourceLabel": "Projet · prospérité"
      },
      "q2": {
        "value": "agree",
        "note": "Il veut que le financement social repose moins sur le travail afin d’augmenter le salaire net.",
        "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere",
        "sourceLabel": "Projet · prospérité"
      },
      "q3": {
        "value": "disagree",
        "note": "Il assume l’idée de travailler davantage et veut assurer l’équilibre du système, avec une part de capitalisation.",
        "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere",
        "sourceLabel": "Projet · retraites"
      },
      "q4": {
        "value": "agree",
        "note": "Il veut mettre fin à ce qu’il appelle l’immigration subie et renforcer le contrôle.",
        "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure",
        "sourceLabel": "Projet · sécurité"
      },
      "q5": {
        "value": "disagree",
        "note": "Son projet met l’accent sur une forte baisse des impôts de production et une fiscalité plus favorable à l’activité.",
        "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere",
        "sourceLabel": "Projet · fiscalité"
      },
      "q6": {
        "value": "agree",
        "note": "Sa ligne est celle d’une France restant dans l’Union européenne tout en renforçant sa capacité d’action.",
        "source": "https://www.edouardphilippe.fr/",
        "sourceLabel": "Site de campagne"
      },
      "q7": {
        "value": "agree",
        "note": "Il défend l’OTAN comme garantie de sécurité et s’est prononcé pour l’intégration future de l’Ukraine dans l’Alliance.",
        "source": "https://fr.euronews.com/my-europe/2026/05/26/edouard-philippe-a-rencontre-volodymyr-zelensky-a-kyiv",
        "sourceLabel": "Euronews · Kyiv 2026"
      },
      "q8": {
        "value": "agree",
        "note": "Il soutient la poursuite de l’aide à l’Ukraine et des garanties européennes de sécurité.",
        "source": "https://fr.euronews.com/my-europe/2026/05/26/edouard-philippe-a-rencontre-volodymyr-zelensky-a-kyiv",
        "sourceLabel": "Euronews · Kyiv 2026"
      }
    }
  },
  "attal": {
    "label": "Gabriel Attal",
    "status": "Candidature déclarée",
    "positions": {
      "q1": {
        "value": "disagree",
        "note": "Sa campagne ne propose pas actuellement de nouveau montant de SMIC et privilégie d’autres leviers salariaux.",
        "source": "https://attalpresident.fr/programme/travail-salaires",
        "sourceLabel": "Campagne · travail & salaires"
      },
      "q2": {
        "value": "agree",
        "note": "Il propose notamment une baisse des charges salariales pour augmenter le net.",
        "source": "https://attalpresident.fr/programme/travail-salaires",
        "sourceLabel": "Campagne · travail & salaires"
      },
      "q3": {
        "value": "unknown",
        "note": "Il propose de remplacer l’âge légal par un système davantage fondé sur la durée cotisée ; ce n’est pas exactement un simple oui/non à l’abrogation.",
        "source": "https://attalpresident.fr/actualites/gabriel-attal-rtl-autorite-ecole-retraites-rassemblement-campagne",
        "sourceLabel": "Campagne · retraites"
      },
      "q4": {
        "value": "agree",
        "note": "Sa campagne fait du renforcement des frontières un chantier prioritaire.",
        "source": "https://attalpresident.fr/programme",
        "sourceLabel": "Programme de campagne"
      },
      "q5": {
        "value": "unknown",
        "note": "Le barème fiscal présidentiel complet n’est pas encore assez précis pour classer cette question proprement.",
        "source": "https://attalpresident.fr/programme",
        "sourceLabel": "Programme de campagne"
      },
      "q6": {
        "value": "agree",
        "note": "Il défend une France très engagée dans l’Union et soutient notamment l’intégration européenne de l’Ukraine.",
        "source": "https://www.standwithukraineeurope.com/colloque-europe-ukraine/",
        "sourceLabel": "Europe & Ukraine · 2026"
      },
      "q7": {
        "value": "agree",
        "note": "Sa ligne de défense reste atlantique et européenne ; aucune sortie de l’OTAN n’est proposée.",
        "source": "https://attalpresident.fr/actualites/eurosatory-gabriel-attal-presente-sa-strategie-de-souverainete-technologique-et-d-independance-europeenne-au-salon",
        "sourceLabel": "Campagne · défense"
      },
      "q8": {
        "value": "agree",
        "note": "Il défend le renforcement des forces ukrainiennes et des garanties de sécurité robustes face à la Russie.",
        "source": "https://questions.assemblee-nationale.fr/q17/17-1145QG.htm",
        "sourceLabel": "Assemblée nationale · Ukraine 2026"
      }
    }
  },
  "retailleau": {
    "label": "Bruno Retailleau",
    "status": "Candidature déclarée",
    "positions": {
      "q1": {
        "value": "disagree",
        "note": "Il privilégie la hausse du revenu du travail par les heures et les cotisations plutôt qu’un nouveau montant élevé de SMIC.",
        "source": "https://republicains.fr/actualites/2026/05/02/priorite-travail-france-35h-salaires-retraites/",
        "sourceLabel": "LR · priorité travail"
      },
      "q2": {
        "value": "agree",
        "note": "Il veut alléger les prélèvements sur le travail.",
        "source": "https://republicains.fr/actualites/2026/05/02/priorite-travail-france-35h-salaires-retraites/",
        "sourceLabel": "LR · priorité travail"
      },
      "q3": {
        "value": "disagree",
        "note": "Il estime qu’il faudra travailler un peu plus longtemps, avec prise en compte de la pénibilité.",
        "source": "https://republicains.fr/actualites/2026/05/02/priorite-travail-france-35h-salaires-retraites/",
        "sourceLabel": "LR · retraites"
      },
      "q4": {
        "value": "agree",
        "note": "Il défend une forte réduction de l’immigration et des règles plus restrictives.",
        "source": "https://republicains.fr/actualites/2026/05/31/ma-candidature-ira-jusquau-bout/",
        "sourceLabel": "LR · candidature 2027"
      },
      "q5": {
        "value": "disagree",
        "note": "Sa ligne privilégie la baisse des prélèvements et une fiscalité plus favorable au travail.",
        "source": "https://republicains.fr/actualites/2026/05/02/priorite-travail-france-35h-salaires-retraites/",
        "sourceLabel": "LR · fiscalité"
      },
      "q6": {
        "value": "agree",
        "note": "Il veut modifier des règles européennes mais ne propose pas une sortie de l’Union.",
        "source": "https://republicains.fr/actualites/2026/05/31/ma-candidature-ira-jusquau-bout/",
        "sourceLabel": "LR · Europe"
      },
      "q7": {
        "value": "agree",
        "note": "Sa ligne de défense s’inscrit dans les alliances occidentales, avec un renforcement massif des capacités françaises.",
        "source": "https://republicains.fr/actualites/2026/07/14/lunite-nationale-premiere-de-nos-armes/",
        "sourceLabel": "LR · défense 2026"
      },
      "q8": {
        "value": "agree",
        "note": "Il présente explicitement la résistance ukrainienne face à l’agression russe comme un combat à soutenir.",
        "source": "https://republicains.fr/actualites/2026/07/14/lunite-nationale-premiere-de-nos-armes/",
        "sourceLabel": "LR · Ukraine 2026"
      }
    }
  },
  "roussel": {
    "label": "Fabien Roussel",
    "status": "Candidature déclarée",
    "positions": {
      "q1": {
        "value": "agree",
        "note": "Il demande un SMIC à 1 700 € net et une hausse générale des salaires.",
        "source": "https://www.pcf.fr/ue_26_discours_fr",
        "sourceLabel": "PCF · août 2026"
      },
      "q2": {
        "value": "disagree",
        "note": "Sa ligne met d’abord l’accent sur la hausse directe des salaires.",
        "source": "https://www.pcf.fr/ue_26_discours_fr",
        "sourceLabel": "PCF · août 2026"
      },
      "q3": {
        "value": "agree",
        "note": "Le PCF défend le retour à 60 ans pour une carrière complète.",
        "source": "https://www.pcf.fr/pour_une_r_forme_heureuse_et_des_moyens_pour_la_r_aliser_exigeons_un_r_f_rendum",
        "sourceLabel": "PCF · retraites"
      },
      "q4": {
        "value": "disagree",
        "note": "Son dernier programme présidentiel détaillé défendait l’asile et des régularisations ciblées plutôt qu’une forte réduction générale.",
        "source": "https://esr.pcf.fr/sites/default/files/programme_de_la_france_des_jours_heureux.pdf",
        "sourceLabel": "PCF · programme 2022"
      },
      "q5": {
        "value": "agree",
        "note": "Il défend davantage de progressivité fiscale et une contribution plus forte des hauts revenus.",
        "source": "https://po.pcf.fr/40e-congres/presidentielle-2027-si-nous-sommes-candidats-nous-devons-aller-jusquau-bout-estime-fabien-roussel-lhumanite/",
        "sourceLabel": "PCF · fiscalité"
      },
      "q6": {
        "value": "agree",
        "note": "Il critique fortement le fonctionnement de l’UE et refuse une Europe fédérale, mais ne porte pas actuellement un Frexit.",
        "source": "https://www.pcf.fr/ue_26_discours_fr",
        "sourceLabel": "PCF · août 2026"
      },
      "q7": {
        "value": "disagree",
        "note": "La ligne communiste reste hostile à l’OTAN et à l’alignement stratégique sur les États-Unis.",
        "source": "https://www.pcf.fr/discours_fr_meeting_venissieux",
        "sourceLabel": "PCF · paix / OTAN"
      },
      "q8": {
        "value": "disagree",
        "note": "En 2026, il appelle à arrêter l’économie de guerre et à privilégier une solution politique et diplomatique plutôt que la poursuite du financement militaire.",
        "source": "https://www.pcf.fr/ue_26_discours_fr",
        "sourceLabel": "PCF · août 2026"
      }
    }
  },
  "dupontaignan": {
    "label": "Nicolas Dupont-Aignan",
    "status": "Candidature déclarée",
    "positions": {
      "q1": {
        "value": "disagree",
        "note": "Il privilégie surtout une hausse du salaire net par une baisse de cotisations.",
        "source": "https://www.debout-la-france.fr/wp-content/uploads/2025/09/Congres-2025-Discours-de-Nicolas-DUPONT-AIGNAN.pdf",
        "sourceLabel": "DLF · congrès 2025"
      },
      "q2": {
        "value": "agree",
        "note": "Il défend explicitement la baisse de cotisations pour augmenter le net.",
        "source": "https://www.debout-la-france.fr/wp-content/uploads/2025/09/Congres-2025-Discours-de-Nicolas-DUPONT-AIGNAN.pdf",
        "sourceLabel": "DLF · congrès 2025"
      },
      "q3": {
        "value": "agree",
        "note": "Il s’est opposé à la réforme Macron et a défendu le maintien de 62 ans via référendum.",
        "source": "https://www.debout-la-france.fr/actualite/retraites-nicolas-dupont-aignan-propose-un-referendum-dinitiative-partagee/",
        "sourceLabel": "DLF · retraites"
      },
      "q4": {
        "value": "agree",
        "note": "Il veut rétablir les frontières nationales et réduire fortement l’immigration.",
        "source": "https://www.debout-la-france.fr/actualite/voeux-a-la-presse-de-nicolas-dupont-aignan-%C2%B7-mercredi-14-janvier-2026/",
        "sourceLabel": "DLF · vœux 2026"
      },
      "q5": {
        "value": "disagree",
        "note": "Sa ligne fiscale met davantage l’accent sur la baisse des prélèvements et la production.",
        "source": "https://www.debout-la-france.fr/wp-content/uploads/2025/09/Congres-2025-Discours-de-Nicolas-DUPONT-AIGNAN.pdf",
        "sourceLabel": "DLF · congrès 2025"
      },
      "q6": {
        "value": "disagree",
        "note": "Sa campagne 2027 assume désormais la sortie de l’Union européenne si la refondation proposée échoue.",
        "source": "https://www.debout-la-france.fr/actualite/je-suis-en-candidat-en-2027-pour-defendre-la-sortie-de-lunion-europeenne-france-info-tv-23-01-26/",
        "sourceLabel": "DLF · candidature 2027"
      },
      "q7": {
        "value": "agree",
        "note": "Il veut quitter le commandement militaire intégré mais ne formule pas ici une sortie du traité de l’OTAN lui-même.",
        "source": "https://www.debout-la-france.fr/wp-content/uploads/2025/09/Congres-2025-Discours-de-Nicolas-DUPONT-AIGNAN.pdf",
        "sourceLabel": "DLF · politique étrangère"
      },
      "q8": {
        "value": "disagree",
        "note": "Il défend une neutralité française dans le conflit et une priorité donnée à la négociation avec la Russie et l’Ukraine.",
        "source": "https://www.debout-la-france.fr/wp-content/uploads/2025/09/Congres-2025-Discours-de-Nicolas-DUPONT-AIGNAN.pdf",
        "sourceLabel": "DLF · Ukraine / Russie"
      }
    }
  },
  "asselineau": {
    "label": "François Asselineau",
    "status": "Candidature déclarée",
    "positions": {
      "q1": {
        "value": "agree",
        "note": "Le programme 2022 prévoyait +24 % de SMIC sur le quinquennat ; le programme 2027 complet est encore annoncé comme en préparation.",
        "source": "https://upr.fr/actualites/programme-presidentiel-2022",
        "sourceLabel": "UPR · programme 2022"
      },
      "q2": {
        "value": "agree",
        "note": "Il associait la hausse du SMIC à une forte baisse des charges patronales pour les PME.",
        "source": "https://upr.fr/actualites/programme-presidentiel-2022",
        "sourceLabel": "UPR · programme 2022"
      },
      "q3": {
        "value": "agree",
        "note": "Sa ligne documentée s’oppose au report de l’âge légal et veut stopper l’allongement des annuités.",
        "source": "https://upr.fr/communiques-de-presse/le-programme-de-francois-asselineau-pour-les-retraites/",
        "sourceLabel": "UPR · retraites"
      },
      "q4": {
        "value": "agree",
        "note": "Son programme détaillé défend un coup d’arrêt à l’immigration subie, la sortie de Schengen et davantage d’expulsions effectives.",
        "source": "https://www.upr.fr/wp-content/uploads/2021/10/Asselineau2022_le_programme_v7l.pdf",
        "sourceLabel": "UPR · immigration"
      },
      "q5": {
        "value": "agree",
        "note": "Son programme 2022 prévoyait de nouvelles tranches pour les très hauts revenus et une contribution exceptionnelle de très grandes fortunes, tout en baissant certains droits de succession.",
        "source": "https://upr.fr/actualites/programme-presidentiel-2022",
        "sourceLabel": "UPR · fiscalité"
      },
      "q6": {
        "value": "disagree",
        "note": "La sortie de l’Union européenne reste le fondamental central de l’UPR.",
        "source": "https://upr.fr/qui-sommes-nous",
        "sourceLabel": "UPR · fondamentaux"
      },
      "q7": {
        "value": "disagree",
        "note": "L’UPR veut sortir juridiquement de l’OTAN.",
        "source": "https://upr.fr/qui-sommes-nous",
        "sourceLabel": "UPR · fondamentaux"
      },
      "q8": {
        "value": "disagree",
        "note": "Il critique le soutien militaire à l’Ukraine et veut une politique française indépendante de l’OTAN, tournée vers la négociation.",
        "source": "https://upr.fr/medias/francois-asselineau-invite-de-nicolas-stoquer-sur-gp-tv-13-07-2026",
        "sourceLabel": "UPR · juillet 2026"
      }
    }
  },
  "tondelier": {
    "label": "Marine Tondelier",
    "status": "Candidature déclarée",
    "positions": {
      "q1": {
        "value": "agree",
        "note": "Le projet écologiste prévoit une forte hausse du salaire minimum.",
        "source": "https://lesecologistes.fr/pages/6ImK65GKUnvibm33WGkjkj/projet-2027",
        "sourceLabel": "Les Écologistes · projet 2027"
      },
      "q2": {
        "value": "disagree",
        "note": "La priorité affichée est une revalorisation directe du salaire minimum et des bas salaires.",
        "source": "https://lesecologistes.fr/pages/6ImK65GKUnvibm33WGkjkj/projet-2027",
        "sourceLabel": "Les Écologistes · projet 2027"
      },
      "q3": {
        "value": "agree",
        "note": "Le projet veut abroger la dernière réforme des retraites.",
        "source": "https://lesecologistes.fr/pages/6ImK65GKUnvibm33WGkjkj/projet-2027",
        "sourceLabel": "Les Écologistes · projet 2027"
      },
      "q4": {
        "value": "disagree",
        "note": "La ligne écologiste défend une politique d’accueil et d’intégration, pas une forte réduction générale de l’immigration.",
        "source": "https://lesecologistes.fr/pages/6ImK65GKUnvibm33WGkjkj/projet-2027",
        "sourceLabel": "Les Écologistes · projet 2027"
      },
      "q5": {
        "value": "agree",
        "note": "Le projet prévoit une fiscalité plus progressive sur hauts revenus et capital.",
        "source": "https://lesecologistes.fr/pages/6ImK65GKUnvibm33WGkjkj/projet-2027",
        "sourceLabel": "Les Écologistes · projet 2027"
      },
      "q6": {
        "value": "agree",
        "note": "Elle défend explicitement l’Union européenne et souhaite même renforcer certaines capacités politiques européennes.",
        "source": "https://lesecologistes.fr/posts/998ekWsksRh9LHv2buaa3/discours-de-marine-tondelier-aux-journees-d-ete-des-ecologistes-2025",
        "sourceLabel": "Les Écologistes · Europe"
      },
      "q7": {
        "value": "agree",
        "note": "Sa ligne actuelle ne propose pas de quitter l’OTAN et privilégie une défense européenne plus autonome.",
        "source": "https://presi2027.fr/candidat/tondelier",
        "sourceLabel": "Synthèse documentaire · défense"
      },
      "q8": {
        "value": "agree",
        "note": "Elle défend un soutien assumé à l’Ukraine face à l’invasion russe.",
        "source": "https://lesecologistes.fr/posts/2s0kOxQEOQdC8JP4jkXuu7/discours-de-marine-tondelier-aux-journees-d-ete-des-ecologistes-2026",
        "sourceLabel": "Les Écologistes · août 2026"
      }
    }
  }
};
