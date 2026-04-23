document.getElementById("updateBtn").addEventListener("click", () => {
    fetch("utilisateur.json")
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById("userTable");
            table.innerHTML = ""; // reset tableau

            data.forEach(user => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;

                table.appendChild(row);
            });
        })
        .catch(error => console.error("Erreur Fetch :", error));
});