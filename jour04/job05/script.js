document.getElementById("get-quote").addEventListener("click", async () => {
    try {
        const response = await fetch("https://zenquotes.io/api/random");

        const data = await response.json();


        const quote = data[0];

        document.getElementById("quote-box").innerHTML = `
            <div>"${quote.q}"</div>
            <div class="author">— ${quote.a}</div>
        `;

    } catch (error) {
        document.getElementById("quote-box").innerHTML =
            "Erreur lors du chargement de la citation.";
        console.error(error);
    }
});