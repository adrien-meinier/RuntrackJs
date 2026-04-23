const button = document.getElementById("Button");

button.addEventListener("click", async () => {
  try {
    const response = await fetch("expression.txt");

    if (!response.ok) {
      throw new Error("Erreur lors du chargement du fichier");
    }

    const text = await response.text();

    const p = document.createElement("p");
    p.textContent = text;

    document.body.appendChild(p);

  } catch (error) {
    console.error(error);
  }
});