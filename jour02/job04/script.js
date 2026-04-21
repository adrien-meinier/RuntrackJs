document.getElementById("keylogger").addEventListener("keydown", function(event) {
    let keylogger = document.getElementById("keylogger");
    let key = event.key;
    // Vérifie si la touche est une lettre ou un chiffre
    if (/^[a-zA-Z0-9]$/.test(key)) {
        if (document.activeElement === keylogger) {
            keylogger.value += key; // Ajoute la touche au textarea
        }
        // Empêche la saisie de caractères spéciaux
        else {
            keylogger.value += key;
        }
    }
});