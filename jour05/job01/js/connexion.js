import { asyncValidate } from './utils.js';

const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const success = document.getElementById('successMessage');

  emailError.textContent = "";
  passwordError.textContent = "";
  success.textContent = "";

  let valid = true;

  await asyncValidate(() => {
    if (!email.value.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      emailError.textContent = "Email invalide";
      valid = false;
    }
  });

  await asyncValidate(() => {
    if (password.value.length < 8) {
      passwordError.textContent = "Minimum 8 caractères";
      valid = false;
    }
  });

  if (valid) {
    success.textContent = "Connexion réussie ";
  }
});