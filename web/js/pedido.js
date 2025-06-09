// Validación y manejo simple del formulario de pedido online
(function () {
  'use strict';

  const form = document.getElementById('pedidoForm');
  const mensajeExito = document.getElementById('mensajeExito');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      // Aquí se podría integrar envío a backend o servicio externo
      mensajeExito.classList.remove('d-none');
      form.reset();
      form.classList.remove('was-validated');
    } else {
      form.classList.add('was-validated');
      mensajeExito.classList.add('d-none');
    }
  }, false);
})();