// Présidentielle, simplement. — données séparées du site
// Tu peux modifier ce fichier sans toucher à index.html.
// Les données restent chargées localement par le navigateur.

window.PS_DATA = window.PS_DATA || {};

window.PS_DATA.topics = window.PS_DATA.topics || {};

window.PS_DATA.topics["energie"] = {
  "label": "Énergie",
  "icon": "⚡",
  "homeHint": "Nucléaire + renouvelables : pour ou contre ?",
  "question": "Que veulent-ils faire du nucléaire et des énergies renouvelables ?",
  "explainer": "Deux choix sont affichés séparément : le nucléaire et les renouvelables. « Pour les renouvelables » peut aussi cacher des différences importantes entre éolien, solaire, hydroélectricité ou géothermie.",
  "answers": {
    "melenchon": {
      "headline": "Sortie du nucléaire et objectif 100 % renouvelables",
      "simple": "Le programme prévoit une sortie planifiée du nucléaire et un passage à 100 % d’énergies renouvelables à l’horizon 2050.",
      "details": [
        "Abandon des projets d’EPR.",
        "Développement du stockage, de la sobriété et de l’efficacité énergétique."
      ],
      "energy": {
        "nuclear": "Contre · sortie planifiée",
        "nuclearClass": "no",
        "renewables": "Pour · objectif 100 %",
        "renewablesClass": "yes"
      },
      "evidence": "Programme actuel",
      "kind": "programme",
      "sourceLabel": "Mélenchon 2027 · énergie",
      "source": "https://melenchon2027.fr/programme2025/livre/chapitre13/s3/"
    },
    "lepen": {
      "headline": "Relancer fortement le nucléaire et freiner l’éolien/solaire",
      "simple": "La ligne du RN défend de nouveaux réacteurs et davantage de puissance nucléaire, tout en soutenant surtout les renouvelables non intermittentes.",
      "details": [
        "Relance du nucléaire et réouverture de Fessenheim défendues dans le plan énergétique.",
        "Moratoire défendu sur de nouveaux projets éoliens et photovoltaïques ; soutien à l’hydroélectricité, la géothermie, la biomasse et l’hydrogène."
      ],
      "energy": {
        "nuclear": "Pour · relance forte",
        "nuclearClass": "yes",
        "renewables": "Partiel · plutôt hors éolien/solaire",
        "renewablesClass": "mixed"
      },
      "evidence": "Orientation RN",
      "kind": "declaration",
      "sourceLabel": "RN · Plan Marie Curie",
      "source": "https://rassemblementnational.fr/communiques/communique-de-presse-du-groupe-rassemblement-national-3"
    },
    "philippe": {
      "headline": "Nucléaire + renouvelables",
      "simple": "Son projet veut relancer le nucléaire tout en développant les renouvelables et en électrifiant davantage les usages.",
      "details": [
        "Il présente les deux filières comme complémentaires dans une stratégie d’énergie décarbonée."
      ],
      "energy": {
        "nuclear": "Pour · relance",
        "nuclearClass": "yes",
        "renewables": "Pour · développement",
        "renewablesClass": "yes"
      },
      "evidence": "Programme actuel",
      "kind": "programme",
      "sourceLabel": "Édouard Philippe · France conquérante",
      "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
    },
    "retailleau": {
      "headline": "Renforcer le nucléaire, arrêter les subventions à l’éolien et au solaire",
      "simple": "La ligne LR portée par Bruno Retailleau fait du nucléaire le pilier du mix et veut stopper les subventions publiques à l’éolien et au photovoltaïque.",
      "details": [
        "Le plan met aussi en avant le potentiel hydroélectrique français."
      ],
      "energy": {
        "nuclear": "Pour · renforcement",
        "nuclearClass": "yes",
        "renewables": "Partiel · hydro oui, éolien/solaire freinés",
        "renewablesClass": "mixed"
      },
      "evidence": "Position officielle LR",
      "kind": "declaration",
      "sourceLabel": "Les Républicains · énergie",
      "source": "https://republicains.fr/actualites/2025/07/02/rebatir-un-parc-nucleaire-et-stopper-le-financement-des-renouvelables-notre-plan-pour-lenergie/"
    },
    "egger": {
      "headline": "Pas de choix nucléaire/renouvelables imposé : décision citoyenne",
      "simple": "Elle considère les choix énergétiques comme des décisions de long terme qui devraient pouvoir être tranchées directement par les citoyens.",
      "details": [
        "Elle ne fixe donc pas dans ce programme une sortie du nucléaire ni un objectif de part nucléaire."
      ],
      "evidence": "Programme 2027 · démocratie directe",
      "kind": "programme",
      "sourceLabel": "Solution Démocratique · programme 2027",
      "source": "https://solutiondemocratique.fr/notre-solution/calendrier-president/",
      "energy": {
        "nuclear": "Pas de position imposée · vote citoyen",
        "nuclearClass": "mixed",
        "renewables": "Pas de position imposée · vote citoyen",
        "renewablesClass": "mixed"
      }
    },
    "mikolajczak": {
      "headline": "Nucléaire + renouvelables dans la ligne Équinoxe",
      "simple": "Avant la publication du programme présidentiel complet, Équinoxe défend simultanément de nouveaux réacteurs nucléaires et le développement de l’éolien et du solaire.",
      "details": [
        "Le contre-budget 2026 prévoit des investissements supplémentaires dans le nucléaire et les renouvelables.",
        "Cette carte décrit la ligne actuelle du parti, pas encore un programme présidentiel complet signé mesure par mesure."
      ],
      "energy": {
        "nuclear": "Pour · nouveaux réacteurs + R&D",
        "nuclearClass": "yes",
        "renewables": "Pour · éolien + solaire",
        "renewablesClass": "yes"
      },
      "evidence": "Ligne actuelle du parti",
      "kind": "project",
      "sourceLabel": "Équinoxe · énergie",
      "source": "https://parti-equinoxe.fr/programme-legislatives-2024-energie/"
    },
    "maurel": {
      "headline": "Nucléaire et renouvelables dans la ligne de la GRS",
      "simple": "La GRS défend une transition énergétique combinant soutien au nucléaire et aux énergies renouvelables.",
      "details": [
        "Cette orientation est celle du mouvement politique ; le programme personnel de la primaire doit encore préciser les mesures."
      ],
      "energy": {
        "nuclear": "Pour",
        "nuclearClass": "yes",
        "renewables": "Pour",
        "renewablesClass": "yes"
      },
      "evidence": "Ligne du mouvement",
      "kind": "project",
      "sourceLabel": "GRS · orientation",
      "source": "https://g-r-s.fr/retour-sur-notre-beau-congres-de-pantin/"
    },
    "roussel": {
      "headline": "Nucléaire + renouvelables, avec forte hausse de la production électrique",
      "simple": "Il défend un mix décarboné reposant à la fois sur le nucléaire et les renouvelables.",
      "details": [
        "Le plan présenté en avril 2026 prévoit 20 EPR2 et 12 petits réacteurs modulaires d’ici 2050.",
        "Le PCF veut aussi développer les renouvelables et doubler la production d’électricité stable et décarbonée."
      ],
      "evidence": "Position publique 2026",
      "kind": "declaration",
      "sourceLabel": "PCF · plan énergie 2026",
      "source": "https://www.pcf.fr/face_explosion_des_prix_le_gouvernement_doit_declarer_l_etat_d_urgence_energetique",
      "energy": {
        "nuclear": "Pour · nouveaux réacteurs",
        "nuclearClass": "yes",
        "renewables": "Pour · développement parallèle",
        "renewablesClass": "yes"
      }
    },
    "dupontaignan": {
      "headline": "Sortir du marché européen de l’électricité et s’appuyer sur le nucléaire",
      "simple": "Il veut retrouver un prix national de l’électricité lié au coût de production français et présente le nucléaire comme un pilier de la souveraineté énergétique.",
      "details": [
        "Il attribue une partie du prix de l’électricité aux règles européennes et veut sortir de ce système."
      ],
      "evidence": "Position publique 2026",
      "kind": "declaration",
      "sourceLabel": "DLF · vœux 2026",
      "source": "https://www.debout-la-france.fr/actualite/voeux-a-la-presse-de-nicolas-dupont-aignan-%C2%B7-mercredi-14-janvier-2026/",
      "energy": {
        "nuclear": "Pour · pilier de souveraineté",
        "nuclearClass": "yes",
        "renewables": "Pas de cible 2027 comparable publiée",
        "renewablesClass": "neutral"
      }
    },
    "asselineau": {
      "headline": "Décider de la stratégie énergétique par grand référendum",
      "simple": "L’UPR prévoit un débat national puis un référendum sur l’énergie et la transition écologique, y compris la question du nucléaire.",
      "details": [
        "Le site ne le classe donc pas artificiellement “pour” ou “contre” un mix précis avant la publication du programme 2027."
      ],
      "evidence": "Orientation actuelle",
      "kind": "declaration",
      "sourceLabel": "UPR · fondamentaux",
      "source": "https://upr.fr/le-frexit",
      "energy": {
        "nuclear": "À soumettre au référendum",
        "nuclearClass": "neutral",
        "renewables": "À décider dans la stratégie soumise au vote",
        "renewablesClass": "neutral"
      }
    }
  }
};
