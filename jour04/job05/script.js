const quotes = [
    { content: "La vie est belle", author: "Inconnu" },
    { content: "Le succès vient avec le travail", author: "Proverbe" },
    { content: "Ne jamais abandonner", author: "Anonyme" }
];

document.getElementById("get-quote").addEventListener("click", () => {

    const random = quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById("quote-box").innerHTML = `
        <div>"${random.content}"</div>
        <div class="author">— ${random.author}</div>
    `;
});