// Présidentielle, simplement. — données séparées du site
// Tu peux modifier ce fichier sans toucher à index.html.
// Les données restent chargées localement par le navigateur.

window.PS_DATA = window.PS_DATA || {};

window.PS_DATA.topics = window.PS_DATA.topics || {};

window.PS_DATA.topics["retraites"] = {
  "label": "Retraites",
  "icon": "⌛",
  "question": "À quel âge veulent-ils que je parte à la retraite ?",
  "explainer": "L’âge légal, la durée de cotisation et les exceptions pour carrière longue sont trois choses différentes. Le site les sépare quand une proposition les distingue.",
  "answers": {
    "melenchon": {
      "headline": "Retraite à 60 ans à taux plein pour 40 annuités",
      "simple": "Son programme actuel veut abroger la réforme portant l’âge à 64 ans et restaurer la retraite à 60 ans à taux plein après 40 annuités.",
      "details": [
        "Le programme prévoit aussi d’indexer les retraites sur les salaires."
      ],
      "evidence": "Programme actuel",
      "kind": "programme",
      "sourceLabel": "Programme Mélenchon 2027 · retraites",
      "source": "https://melenchon2027.fr/programme2025/livre/chapitre8/s8/"
    },
    "lepen": {
      "headline": "60 ans pour certaines carrières longues ; 62 ans et 42 annuités comme référence",
      "simple": "Marine Le Pen a indiqué en 2026 que la position du RN autour de 62 ans et 42 annuités restait d’actualité, avec départ plus tôt pour certaines carrières commencées avant 20 ans.",
      "details": [
        "Le futur programme présidentiel RN reste en cours d’élaboration : cette carte est donc une position publique, pas un programme final 2027."
      ],
      "evidence": "Position publique 2026",
      "kind": "declaration",
      "sourceLabel": "TF1 Info · position RN retraites, mai 2026",
      "source": "https://www.tf1info.fr/politique/retraites-un-changement-de-position-du-rn-n-est-pas-a-l-ordre-du-jour-assure-sur-tf1-laurent-jacobelli-2442505.html"
    },
    "philippe": {
      "headline": "Travailler plus + part de capitalisation",
      "simple": "Il veut garantir l’équilibre du système, travailler plus en tenant compte des carrières, et créer progressivement une part de capitalisation.",
      "details": [
        "Objectif annoncé : 10 à 15 % des pensions via capitalisation d’ici quinze ans."
      ],
      "evidence": "Programme actuel",
      "kind": "programme",
      "sourceLabel": "Édouard Philippe · France plus prospère",
      "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
    },
    "attal": {
      "headline": "Supprimer l’âge légal et garder la durée de cotisation",
      "simple": "Il propose un système où la pension dépendrait davantage de la durée cotisée : partir plus tôt donnerait moins, travailler plus longtemps donnerait davantage.",
      "details": [
        "Il défend aussi une part de capitalisation dans le système de retraite."
      ],
      "evidence": "Proposition officielle",
      "kind": "declaration",
      "sourceLabel": "Gabriel Attal · RTL, 1er juin 2026",
      "source": "https://attalpresident.fr/actualites/gabriel-attal-rtl-autorite-ecole-retraites-rassemblement-campagne"
    },
    "glucksmann": {
      "headline": "Abroger la réforme de 2023 et tenir compte des carrières",
      "simple": "Le projet prévoit que certains puissent partir à 60 ans tandis que d’autres travailleraient davantage selon les carrières et l’espérance de vie.",
      "details": [
        "Il propose aussi une nouvelle gouvernance du système avec les partenaires sociaux."
      ],
      "evidence": "Projet politique",
      "kind": "project",
      "sourceLabel": "Place publique · Acte I, chantier retraites",
      "source": "https://place-publique.eu/document/3Ari5O0s5O1L4iK1uyUhI0/pp-acte-un.pdf"
    },
    "tondelier": {
      "headline": "Abroger la dernière réforme des retraites",
      "simple": "Le projet écologiste veut revenir sur la réforme récente et reconstruire un système jugé plus juste.",
      "details": [
        "Les modalités complètes sont détaillées dans le programme 2027."
      ],
      "evidence": "Programme 2027",
      "kind": "programme",
      "sourceLabel": "Les Écologistes · Projet 2027",
      "source": "https://lesecologistes.fr/pages/6ImK65GKUnvibm33WGkjkj/projet-2027"
    },
    "retailleau": {
      "headline": "Partir un peu plus tard",
      "simple": "Il estime qu’il faudra travailler un peu plus longtemps, en tenant compte de la pénibilité.",
      "details": [
        "Sa proposition “Priorité Travail” ne fixe pas ici un âge unique."
      ],
      "evidence": "Proposition officielle",
      "kind": "declaration",
      "sourceLabel": "Les Républicains · Priorité Travail",
      "source": "https://republicains.fr/actualites/2026/05/02/priorite-travail-france-35h-salaires-retraites/"
    },
    "egger": {
      "headline": "Faire trancher les règles des retraites par les citoyens",
      "simple": "Elle ne fixe pas un âge de départ unique dans son programme : elle veut instaurer le RIC constituant afin que les citoyens puissent décider des principes d’une réforme des retraites.",
      "details": [
        "Le site ne lui attribue donc ni “60 ans” ni “64 ans”."
      ],
      "evidence": "Programme 2027 · démocratie directe",
      "kind": "programme",
      "sourceLabel": "Solution Démocratique · programme 2027",
      "source": "https://solutiondemocratique.fr/notre-solution/calendrier-president/"
    },
    "roussel": {
      "headline": "Retraite à 60 ans à taux plein pour une carrière complète",
      "simple": "La ligne défendue par Fabien Roussel et le PCF reste un droit au départ à 60 ans, à taux plein pour une carrière complète.",
      "details": [
        "Les périodes de chômage, formation, études, congé parental, maladie ou invalidité doivent être mieux prises en compte.",
        "Le PCF défend aussi qu’aucune pension ne soit inférieure au SMIC."
      ],
      "evidence": "Ligne PCF actuelle",
      "kind": "project",
      "sourceLabel": "PCF · retraites",
      "source": "https://www.pcf.fr/pour_une_r_forme_heureuse_et_des_moyens_pour_la_r_aliser_exigeons_un_r_f_rendum"
    },
    "asselineau": {
      "headline": "Protéger constitutionnellement la retraite par répartition",
      "simple": "Les fondamentaux actuels de l’UPR veulent inscrire la retraite par répartition dans la Constitution et garantir un minimum vieillesse.",
      "details": [
        "Son programme 2022 refusait tout nouveau report de l’âge légal et voulait plafonner la durée de cotisation à 41 annuités.",
        "Le détail 2027 n’est pas encore publié."
      ],
      "evidence": "Orientation actuelle + dernier programme",
      "kind": "project",
      "sourceLabel": "UPR · retraites",
      "source": "https://upr.fr/communiques-de-presse/le-programme-de-francois-asselineau-pour-les-retraites/"
    },
    "dupontaignan": {
      "headline": "Dernière position détaillée : préserver 62 ans et faire trancher par référendum",
      "simple": "En 2023, il a proposé un référendum d’initiative partagée pour bloquer la réforme Macron et préserver l’âge légal de 62 ans.",
      "details": [
        "Aucun nouveau chiffrage retraite 2027 plus précis n’est encore chargé.",
        "Cette case affiche donc la dernière position détaillée clairement sourcée, pas une promesse 2027 définitive."
      ],
      "evidence": "Dernière position détaillée · 2023",
      "kind": "project",
      "sourceLabel": "DLF · retraites",
      "source": "https://www.debout-la-france.fr/actualite/retraites-nicolas-dupont-aignan-propose-un-referendum-dinitiative-partagee/"
    }
  }
};
