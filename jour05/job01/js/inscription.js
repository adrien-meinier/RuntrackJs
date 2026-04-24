import { asyncValidate } from './utils.js';

// Champs
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const adresse = document.getElementById('adresse');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirmPassword');

const success = document.getElementById('successMessage');

// Helpers erreurs
function setError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearError(id) {
  document.getElementById(id).textContent = "";
}

prenom.addEventListener('input', async () => {
  await asyncValidate(() => {
    if (prenom.value.length === 0) {
      clearError("prenomError");
      return;
    }

    if (prenom.value.length < 2) {
      setError("prenomError", "Prénom trop court");
    } else {
      clearError("prenomError");
    }
  });
});


nom.addEventListener('input', async () => {
  await asyncValidate(() => {
    if (nom.value.length === 0) {
      clearError("nomError");
      return;
    }

    if (nom.value.length < 2) {
      setError("nomError", "Nom trop court");
    } else {
      clearError("nomError");
    }
  });
});

adresse.addEventListener('input', async () => {
  await asyncValidate(() => {
    if (adresse.value.length === 0) {
      clearError("adresseError");
      return;
    }

    if (adresse.value.length < 5) {
      setError("adresseError", "Adresse trop courte");
    } else {
      clearError("adresseError");
    }
  });
});

email.addEventListener('input', async () => {
  await asyncValidate(() => {
    if (email.value.length === 0) {
      clearError("emailError");
      return;
    }

    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
      setError("emailError", "Email invalide");
    } else {
      clearError("emailError");
    }
  });
});


password.addEventListener('input', async () => {
  await asyncValidate(() => {
    if (password.value.length === 0) {
      clearError("passwordError");
      return;
    }

    if (password.value.length < 8) {
      setError("passwordError", "Minimum 8 caractères");
    } else {
      clearError("passwordError");
    }
  });
});


confirm.addEventListener('input', async () => {
  await asyncValidate(() => {
    if (confirm.value.length === 0) {
      clearError("confirmPasswordError");
      return;
    }

    if (confirm.value !== password.value) {
      setError("confirmPasswordError", "Les mots de passe ne correspondent pas");
    } else {
      clearError("confirmPasswordError");
    }
  });
});


document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();

  success.textContent = "";

  const errors = document.querySelectorAll('.error');
  let hasError = false;

  errors.forEach(err => {
    if (err.textContent !== "") hasError = true;
  });

  if (!hasError) {
    success.textContent = "Inscription réussie ";
  }
});