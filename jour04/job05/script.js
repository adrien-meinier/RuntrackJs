document.getElementById("get-quote").addEventListener("click", getQuote);

function getQuote() {
    const url = "https://zenquotes.io/api/random";
    const proxy = "https://corsproxy.io/?";

    fetch(proxy + encodeURIComponent(url))
        .then(response => response.json())
        .then(data => {
            const quote = data[0].q;
            const author = data[0].a;

            document.getElementById("quote-box").innerHTML = `
                <div>"${quote}"</div>
                <div class="author">— ${author}</div>
            `;
        })
        .catch(error => {
            document.getElementById("quote-box").textContent =
                "Erreur lors du chargement.";
            console.error(error);
        });
}