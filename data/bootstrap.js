// Assemble les différents fichiers de données pour l'application.
if (!window.PS_DATA) {
  throw new Error("Les fichiers de données n'ont pas été chargés.");
}
window.APP_DATA = window.PS_DATA;
