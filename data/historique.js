// Présidentielle, simplement. — données séparées du site
// Tu peux modifier ce fichier sans toucher à index.html.
// Les données restent chargées localement par le navigateur.

window.PS_DATA = window.PS_DATA || {};

window.PS_DATA.history = {
  "melenchon": {
    "salaire": {
      "observation": "Direction assez stable : à chaque présidentielle documentée, Jean-Luc Mélenchon propose une hausse du SMIC. Le montant et la façon de l’exprimer ont changé, et le programme actuel ajoute l’indexation sur l’inflation.",
      "caveat": "Attention : comparer 1 700 € de 2012 à 1 600 € de 2026 sans corriger l’inflation serait trompeur. La frise montre les montants annoncés à l’époque, pas leur pouvoir d’achat équivalent.",
      "entries": [
        {
          "year": "2012",
          "amount": "1 700 € brut immédiatement → 1 700 € net en fin de mandat",
          "note": "Hausse par décret au début du mandat, puis objectif net pendant la législature.",
          "type": "Programme présidentiel",
          "source": "https://melenchon.fr/wp-content/uploads/2015/10/humain_dabord.pdf"
        },
        {
          "year": "2017",
          "amount": "1 326 € net",
          "note": "Hausse immédiate annoncée de 16 % pour 35 heures.",
          "type": "Programme / campagne",
          "source": "https://lafranceinsoumise.fr/2017/06/08/decryptage-les-ordonnances-macron-contre-le-code-du-travail/"
        },
        {
          "year": "2022",
          "amount": "1 400 € net",
          "note": "Hausse annoncée par décret sans délai.",
          "type": "Programme présidentiel",
          "source": "https://melenchon2027.fr/plans-2022/pouvoir-dachat/"
        },
        {
          "year": "2026–2027",
          "amount": "1 600 € net",
          "note": "Hausse immédiate + indexation des salaires sur l’inflation.",
          "type": "Programme actuel",
          "source": "https://melenchon2027.fr/programme2025/livre/chapitre8/s4/"
        }
      ]
    }
  },
  "lepen": {
    "salaire": {
      "observation": "La ligne documentée est plus stable sur l’objectif d’augmenter le revenu des bas salaires que sur une hausse directe du SMIC : les outils proposés ont surtout été exonérations de cotisations, prime ou incitation aux entreprises.",
      "caveat": "Ces mesures ne sont pas équivalentes à une hausse du SMIC : le site les affiche donc comme “revenu des bas salaires”, pas comme nouveau montant légal du SMIC.",
      "entries": [
        {
          "year": "2012",
          "amount": "+ 200 € net pour les salaires sous ~1,4 SMIC",
          "note": "Via une exonération de 200 € de charges sociales, financée par une contribution sociale sur les importations.",
          "type": "Programme présidentiel",
          "source": "https://rassemblementnational.fr/discours/chiffrage-du-projet-presidentiel"
        },
        {
          "year": "2017",
          "amount": "Prime / hausse des petits revenus sous 1 500 €",
          "note": "Le projet met en avant une augmentation directe ou prime de pouvoir d’achat financée par une contribution sociale sur les importations.",
          "type": "Campagne présidentielle",
          "source": "https://rassemblementnational.fr/discours/reunion-publique-de-marine-le-pen-a-pierrelatte"
        },
        {
          "year": "2022",
          "amount": "Inciter à +10 % de salaire jusqu’à 3 SMIC",
          "note": "Exonération de l’augmentation de cotisations patronales pendant 3 à 5 ans si l’entreprise augmente les salaires.",
          "type": "Projet présidentiel",
          "source": "https://rassemblementnational.fr/22-mesures"
        },
        {
          "year": "2026–2027",
          "amount": "Pas de nouveau montant de SMIC vérifié ici",
          "note": "La mesure 2022/2024 sur l’augmentation de 10 % reste documentée, mais cette version n’en déduit pas automatiquement qu’elle sera le programme présidentiel final 2027.",
          "type": "Donnée en attente",
          "source": "https://rassemblementnational.fr/"
        }
      ]
    }
  }
};
