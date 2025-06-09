document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const testimonios = [
    {
      nombre: 'María López',
      texto: 'Una experiencia increíble. El café es exquisito y el ambiente te transporta a otro lugar. ¡Volveré sin dudas!',
    },
    {
      nombre: 'Carlos Gómez',
      texto: 'Tomé un taller de barismo y fue espectacular. Aprendí muchísimo y los baristas son súper apasionados.',
    },
    {
      nombre: 'Luciana Torres',
      texto: 'Me encanta pasar las mañanas en La Bodega. El aroma del café, la música suave y la atención son inmejorables.',
    }
  ];

  const carouselInner = document.getElementById('carouselTestimoniosInner');

  testimonios.forEach((testimonio, index) => {
    const item = document.createElement('div');
    item.className = `carousel-item${index === 0 ? ' active' : ''}`;
    item.innerHTML = `
      <div class="d-flex flex-column align-items-center text-center px-5">
        <p class="fs-5 fst-italic">"${testimonio.texto}"</p>
        <h5 class="mt-3 fw-bold">${testimonio.nombre}</h5>
      </div>
    `;
    carouselInner.appendChild(item);
  });
});
