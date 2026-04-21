window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let scrollHeight = document.body.scrollHeight - window.innerHeight;
    let percent = scrollTop / scrollHeight;

    let footer = document.querySelector("footer");

    
    let red = Math.floor(255 * percent);
    footer.style.backgroundColor = "rgb(" + red + ", 0, 0)";


    let article = document.getElementById("citation");

    
    let green = Math.floor(255 * percent);

    let colorStart = "rgb(255, 0, 0)"; // rouge
    let colorEnd = "rgb(255, " + green + ", 0)"; // vers jaune

    article.style.background = "linear-gradient(90deg, " + colorStart + ", " + colorEnd + ")";
    article.style.webkitBackgroundClip = "text";
    article.style.webkitTextFillColor = "transparent";
});