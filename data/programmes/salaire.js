// Présidentielle, simplement. — données séparées du site
// Tu peux modifier ce fichier sans toucher à index.html.
// Les données restent chargées localement par le navigateur.

window.PS_DATA = window.PS_DATA || {};

window.PS_DATA.topics = window.PS_DATA.topics || {};

window.PS_DATA.topics["salaire"] = {
  "label": "Salaire & SMIC",
  "icon": "€",
  "question": "Que proposent-ils pour mon salaire et le SMIC ?",
  "explainer": "Le SMIC est le salaire minimum légal. Attention : un montant brut et un montant net ne se comparent pas directement.",
  "baseline": true,
  "answers": {
    "melenchon": {
      "headline": "SMIC à 1 600 € net immédiatement",
      "simple": "Il veut relever directement le salaire minimum à 1 600 € net par mois.",
      "details": [
        "Indexer les salaires sur l’inflation.",
        "Revaloriser aussi le traitement des fonctionnaires."
      ],
      "evidence": "Programme actuel",
      "kind": "programme",
      "sourceLabel": "Programme Mélenchon 2027 · salaires",
      "source": "https://melenchon2027.fr/programme2025/livre/chapitre8/s4/"
    },
    "lepen": {
      "headline": "Pas de nouveau montant de SMIC 2027 vérifié ici",
      "simple": "Dans les sources 2027 chargées, nous n’avons pas trouvé de nouveau montant légal du SMIC attribuable à Marine Le Pen.",
      "details": [
        "Son historique montre plutôt des mesures sur les bas salaires, les cotisations et les primes.",
        "Voir la frise 2012 → 2017 → 2022 ci-dessous."
      ],
      "evidence": "Donnée manquante",
      "kind": "missing",
      "sourceLabel": "",
      "source": ""
    },
    "philippe": {
      "headline": "Augmenter le net en changeant le financement social",
      "simple": "Il veut que le financement du modèle social repose moins sur le travail pour augmenter le salaire net.",
      "details": [
        "Pas de nouveau montant précis du SMIC affiché dans la source officielle chargée.",
        "Sa priorité économique met aussi l’accent sur le travail et la compétitivité."
      ],
      "evidence": "Programme actuel",
      "kind": "programme",
      "sourceLabel": "Édouard Philippe · France plus prospère",
      "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
    },
    "attal": {
      "headline": "« Choc pour les salaires », sans montant de SMIC annoncé",
      "simple": "Il veut faire monter les salaires, notamment en réduisant les charges salariales pour augmenter le net.",
      "details": [
        "Sa page indique qu’une stratégie complète doit encore être présentée.",
        "Aucun nouveau montant du SMIC n’y est fixé à ce jour."
      ],
      "evidence": "Orientation officielle",
      "kind": "declaration",
      "sourceLabel": "Gabriel Attal · Travail & salaires",
      "source": "https://attalpresident.fr/programme/travail-salaires"
    },
    "glucksmann": {
      "headline": "SMIC à 1 600 € net dans les deux ans",
      "simple": "Le projet de Place publique prévoit d’atteindre 1 600 € net dans les deux ans suivant l’arrivée au pouvoir.",
      "details": [
        "Conférences salariales dans les branches.",
        "Projet de rééquilibrage de la fiscalité entre travail, capital et héritage."
      ],
      "evidence": "Projet politique",
      "kind": "project",
      "sourceLabel": "Place publique · Le projet",
      "source": "https://place-publique.eu/document/3Ari5O0s5O1L4iK1uyUhI0/pp-acte-un.pdf",
      "crosscheck": "https://place-publique.eu/pages/69jA2SKIG5udlNX7wI3dmc/le-projet"
    },
    "tondelier": {
      "headline": "Salaire minimum à 2 000 € brut dès 2027",
      "simple": "Le projet des Écologistes prévoit un salaire minimum de 2 000 € brut par mois dès 2027.",
      "details": [
        "Le programme prévoit aussi un soutien aux TPE et PME pour accompagner la hausse.",
        "Montant exprimé en brut : il ne faut pas le comparer directement aux montants nets des autres."
      ],
      "evidence": "Programme 2027",
      "kind": "programme",
      "sourceLabel": "Les Écologistes · Projet 2027",
      "source": "https://lesecologistes.fr/pages/6ImK65GKUnvibm33WGkjkj/projet-2027"
    },
    "retailleau": {
      "headline": "Faire gagner plus via les heures et les cotisations",
      "simple": "Il ne fixe pas de nouveau montant de SMIC dans la source chargée ; il veut surtout alléger les cotisations sur le travail supplémentaire.",
      "details": [
        "Au-delà de 1 623 heures annuelles, il propose de supprimer les cotisations patronales et salariales sur les heures supplémentaires.",
        "Il veut laisser davantage le temps de travail à la négociation en entreprise ou branche."
      ],
      "evidence": "Proposition officielle",
      "kind": "declaration",
      "sourceLabel": "Les Républicains · Priorité Travail",
      "source": "https://republicains.fr/actualites/2026/05/02/priorite-travail-france-35h-salaires-retraites/"
    },
    "egger": {
      "headline": "Pas de montant de SMIC imposé par la candidate",
      "simple": "Son programme présidentiel est volontairement centré sur le RIC constituant : elle propose que les citoyens puissent décider directement des grandes règles économiques plutôt que d’imposer un montant de SMIC dans son programme.",
      "details": [
        "Ce n’est pas une absence accidentelle : c’est le principe revendiqué de sa candidature."
      ],
      "evidence": "Programme 2027 · démocratie directe",
      "kind": "programme",
      "sourceLabel": "Solution Démocratique · programme 2027",
      "source": "https://solutiondemocratique.fr/notre-solution/calendrier-president/"
    },
    "roussel": {
      "headline": "SMIC à 1 700 € net + 5 % sur tous les salaires",
      "simple": "Le 26 août 2026, il a demandé de porter rapidement le SMIC à 1 700 € net et d’augmenter tous les salaires de 5 % dès la rentrée.",
      "details": [
        "Il défend aussi le retour d’une indexation des salaires sur les prix.",
        "C’est une position publique 2026, avant publication d’un programme présidentiel complet."
      ],
      "evidence": "Position publique 2026",
      "kind": "declaration",
      "sourceLabel": "PCF · Université d’été 2026",
      "source": "https://www.pcf.fr/ue_26_discours_fr"
    },
    "dupontaignan": {
      "headline": "Augmenter le salaire net en baissant les cotisations salariales",
      "simple": "Dans son discours de congrès 2025 qui prépare sa campagne, il reprend l’idée d’une forte hausse du salaire net obtenue par une baisse de cotisations, plutôt que par le seul SMIC.",
      "details": [
        "Il présente cette mécanique comme un “13e mois” de pouvoir d’achat pour les salariés.",
        "Le montant final du programme 2027 reste à préciser."
      ],
      "evidence": "Projet de campagne 2025–2026",
      "kind": "declaration",
      "sourceLabel": "DLF · congrès 2025",
      "source": "https://www.debout-la-france.fr/wp-content/uploads/2025/09/Congres-2025-Discours-de-Nicolas-DUPONT-AIGNAN.pdf"
    },
    "asselineau": {
      "headline": "Hausse “substantielle” du SMIC, programme 2027 encore en préparation",
      "simple": "Les fondamentaux actuels de l’UPR promettent une hausse substantielle du SMIC, accompagnée d’une baisse de charges patronales pour les TPE et PME.",
      "details": [
        "L’UPR précise séparément que le programme présidentiel 2027 complet sera publié prochainement.",
        "Le site n’attribue donc pas encore de montant 2027 précis."
      ],
      "evidence": "Orientation actuelle · programme 2027 à venir",
      "kind": "declaration",
      "sourceLabel": "UPR · Le Frexit",
      "source": "https://upr.fr/le-frexit"
    }
  }
};
