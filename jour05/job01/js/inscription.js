import { asyncValidate } from './utils.js';

const form = document.getElementById('registerForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const globalErrors = document.getElementById('globalErrors');
  const success = document.getElementById('successMessage');

  globalErrors.innerHTML = "";
  success.textContent = "";

  let errors = [];

  const prenom = document.getElementById('prenom').value;
  const nom = document.getElementById('nom').value;
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirmPassword').value;

  await asyncValidate(() => {
    if (prenom.length < 2) errors.push("Firstname is required");
    if (nom.length < 2) errors.push("Lastname is required");
    if (!password) errors.push("Password is required");
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W]).{8,}$/.test(password)) {
      errors.push("Password format is wrong");
    }
    if (password !== confirm) {
      errors.push("Passwords do not match");
    }
  });

  if (errors.length > 0) {
    globalErrors.innerHTML = errors.map(e => `<div>${e}</div>`).join("");
    return;
  }

  success.textContent = "Inscription réussie ✅";
});