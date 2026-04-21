const button = document.getElementById("toggle-theme");

button.addEventListener("click", changeTheme);

function changeTheme() {
  document.body.classList.toggle("dark-mode");
}