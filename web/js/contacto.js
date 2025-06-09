document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form.needs-validation');
  const nombre = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const mensaje = form.querySelector('textarea');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    let valid = true;

    // Validar nombre
    if (nombre.value.trim() === '') {
      nombre.classList.add('is-invalid');
      valid = false;
    } else {
      nombre.classList.remove('is-invalid');
      nombre.classList.add('is-valid');
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.classList.add('is-invalid');
      valid = false;
    } else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
    }

    // Validar mensaje
    if (mensaje.value.trim() === '') {
      mensaje.classList.add('is-invalid');
      valid = false;
    } else {
      mensaje.classList.remove('is-invalid');
      mensaje.classList.add('is-valid');
    }

    if (valid) {
      // Simulación de envío exitoso
      alert('¡Gracias por tu mensaje! Te responderemos pronto.');
      form.reset();

      // Limpiar clases de validación
      [nombre, email, mensaje].forEach(input => {
        input.classList.remove('is-valid', 'is-invalid');
      });
    }
  });
});