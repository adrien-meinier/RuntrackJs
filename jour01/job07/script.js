function jourTravaille(date) {

    const joursFeries2024 = [
        "2024-01-01", // Jour de l'an
        "2024-04-01", // Lundi de Pâques
        "2024-05-01", // Fête du travail
        "2024-05-08", // Victoire 1945
        "2024-05-09", // Ascension 
        "2024-05-20", // Lundi de Pentecôte
        "2024-07-14", // Fête nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice
        "2024-12-25"  // Noël
    ];

    const jour = date.getDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear();

  
    const dateFormat = `${annee}-${String(mois).padStart(2, "0")}-${String(jour).padStart(2, "0")}`;

    const jourSemaine = date.getDay(); 
   

    if (joursFeries2024.includes(dateFormat)) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
    }
    else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jour} ${mois} ${annee} est un week-end`);
    }
    else {
        console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé`);
    }
}


jourTravaille(new Date("2024-05-01")); 
jourTravaille(new Date("2024-05-04")); 
jourTravaille(new Date("2024-05-06")); 