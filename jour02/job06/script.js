let konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
];

let input = [];

document.addEventListener("keydown", function (e) {
    input.push(e.key);

    // garder konamiCode.length éléments dans input
    if (input.length > konamiCode.length) {
        input.shift();
    }

    // checker si input correspond à konamiCode
    if (input.toString() === konamiCode.toString()) {
        document.body.classList.add("active");
    }
});