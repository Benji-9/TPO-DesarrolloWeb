// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        // Simulación de envío exitoso
        alert('¡Gracias por tu mensaje! Te responderemos pronto.');
        form.reset(); // Limpia el formulario
        form.classList.remove('was-validated'); // Remueve las clases de validación
        event.preventDefault(); // Previene el envío real para la simulación
      }

      form.classList.add('was-validated')
    }, false)
  })
})()