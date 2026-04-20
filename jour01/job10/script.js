function compterVoyelles(phrase) {
    let compteur = 0;
    const voyelles = "aeiouy";

    phrase = phrase.toLowerCase();

    for (let i = 0; i < phrase.length; i++) {
        if (voyelles.includes(phrase[i])) {
            compteur++;
        }
    }

    console.log(`La phrase : "${phrase}"`);
    console.log(`La phrase contient ${compteur} voyelles`);
    console.log("----------------------------");
}

compterVoyelles("Bonjour tout le monde");
compterVoyelles("JavaScript est génial");
compterVoyelles("Les developpeurs aiment coder");