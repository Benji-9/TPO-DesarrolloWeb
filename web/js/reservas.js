(() => {
  "use strict";

  const form = document.querySelector(".needs-validation");
  const tipoReserva = document.getElementById("tipoReserva");
  const selectorTallerDiv = document.getElementById("selectorTallerDiv");
  const selectorTaller = document.getElementById("selectorTaller");

  const fechaDiv = document.getElementById("fechaDiv");
  const fechaInput = document.getElementById("fecha");

  const horaDiv = document.getElementById("horaDiv");
  const horaSelect = document.getElementById("hora");

  const personasDiv = document.getElementById("personasDiv");
  const personasSelect = document.getElementById("personas");

  // Eventos disponibles
  const eventos = [
    {
      id: 1,
      title: "Taller de Espresso Perfecto",
      date: "2025-06-18",
      description: "Aprendé a preparar el espresso ideal.",
    },
    {
      id: 2,
      title: "Curso de Latte Art",
      date: "2025-06-22",
      description: "Domina el arte de hacer figuras.",
    },
    {
      id: 3,
      title: "Introducción al café de filtro",
      date: "2025-07-01",
      description: "Explorá métodos de preparación.",
    },
  ];

  // Carga opciones de talleres en el select
  function cargarTalleres() {
    selectorTaller.innerHTML = '<option value="">Seleccioná un taller</option>';
    eventos.forEach((evento) => {
      const option = document.createElement("option");
      option.value = evento.id;
      option.textContent = `${evento.title} - ${evento.date}`;
      selectorTaller.appendChild(option);
    });
  }

  // Mostrar/ocultar campos según tipo de reserva
  tipoReserva.addEventListener("change", () => {
    if (tipoReserva.value === "taller") {
      selectorTallerDiv.classList.remove("d-none");
      fechaDiv.classList.add("d-none");
      horaDiv.classList.add("d-none");
      personasDiv.classList.add("d-none");

      selectorTaller.required = true;
      fechaInput.required = false;
      horaSelect.required = false;
      personasSelect.required = false;

      cargarTalleres();
    } else if (tipoReserva.value === "cafe") {
      selectorTallerDiv.classList.add("d-none");
      fechaDiv.classList.remove("d-none");
      horaDiv.classList.remove("d-none");
      personasDiv.classList.remove("d-none");

      selectorTaller.required = false;
      fechaInput.required = true;
      horaSelect.required = true;
      personasSelect.required = true;

      selectorTaller.value = "";
    } else {
      selectorTallerDiv.classList.add("d-none");
      fechaDiv.classList.add("d-none");
      horaDiv.classList.add("d-none");
      personasDiv.classList.add("d-none");

      selectorTaller.required = false;
      fechaInput.required = false;
      horaSelect.required = false;
      personasSelect.required = false;
    }
  });

  // Validación y envío
  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }

      const tipo = tipoReserva.value;
      let reservaInfo = { tipo };

      if (tipo === "taller") {
        const tallerId = selectorTaller.value;
        const tallerSeleccionado = eventos.find((e) => e.id == tallerId);

        if (!tallerSeleccionado) {
          alert("Por favor, seleccioná un taller válido.");
          return;
        }

        reservaInfo.taller = tallerSeleccionado.title;
        reservaInfo.fecha = tallerSeleccionado.date;
      } else {
        reservaInfo.fecha = fechaInput.value;
        reservaInfo.hora = horaSelect.value;
        reservaInfo.personas = personasSelect.value;
      }

      reservaInfo.nombre = document.getElementById("nombre").value.trim();
      reservaInfo.email = document.getElementById("email").value.trim();

      alert(
        `Gracias, ${reservaInfo.nombre}!\n\n` +
          (tipo === "taller"
            ? `Reservaste el taller: ${reservaInfo.taller} el día ${reservaInfo.fecha}.`
            : `Reservaste una mesa para ${reservaInfo.personas} persona(s) el día ${reservaInfo.fecha} a las ${reservaInfo.hora}.`) +
          `\n\nTe enviaremos un mail a: ${reservaInfo.email}`
      );

      form.reset();
      form.classList.remove("was-validated");

      selectorTallerDiv.classList.add("d-none");
      fechaDiv.classList.add("d-none");
      horaDiv.classList.add("d-none");
      personasDiv.classList.add("d-none");
    },
    false
  );
})();
