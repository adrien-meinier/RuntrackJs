document.getElementById("filterBtn").addEventListener("click", () => {
    fetch("data.json") // ton fichier JSON
        .then(response => response.json())
        .then(data => {
            const id = document.getElementById("id").value.trim();
            const name = document.getElementById("name").value.trim().toLowerCase();
            const type = document.getElementById("type").value;

            let filtered = data;

            // Filtre ID
            if (id !== "") {
                filtered = filtered.filter(p => p.id == id);
            }

            // Filtre Nom
            if (name !== "") {
                filtered = filtered.filter(p =>
                    p.name.french.toLowerCase().includes(name)
                );
            }

            // Filtre Type
            if (type !== "") {
                filtered = filtered.filter(p =>
                    p.type.includes(type)
                );
            }

            displayResults(filtered);
        })
        .catch(error => console.error("Erreur Fetch :", error));
});

function displayResults(pokemons) {
    const container = document.getElementById("results");
    container.innerHTML = "";

    if (pokemons.length === 0) {
        container.innerHTML = "<p>Aucun résultat trouvé</p>";
        return;
    }

    pokemons.forEach(p => {
        const div = document.createElement("div");
        div.className = "pokemon";

        div.innerHTML = `
            <h3>${p.name.french} (${p.id})</h3>
            <p>Type : ${p.type.join(", ")}</p>
            <p>HP : ${p.base.HP}</p>
            <p>Attack : ${p.base.Attack}</p>
        `;

        container.appendChild(div);
    });
}