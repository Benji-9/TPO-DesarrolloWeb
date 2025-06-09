const blogPosts = [
  {
    id: 1,
    title: "Introducción al café de especialidad",
    image: "img/posts/cafe-especialidad.jpeg",
    summary: "Descubre qué hace que un café sea especial y cómo elegir el mejor grano.",
    date: "2025-06-15"
  },
  {
    id: 2,
    title: "Métodos para preparar café en casa",
    image: "img/posts/metodos-preparacion.jpg",
    summary: "Aprende diferentes técnicas para preparar café y sacar lo mejor de cada grano.",
    date: "2025-06-20"
  },
  {
    id: 3,
    title: "Los mejores blends de La Bodega del Café",
    image: "img/posts/blends-bodega.png",
    summary: "Te contamos sobre nuestras mezclas exclusivas y cómo disfrutarlas.",
    date: "2025-06-25"
  }
];

const eventos = [
  {
    id: 1,
    title: "Taller de Espresso Perfecto",
    date: "2025-06-18",
    description: "Aprendé a preparar el espresso ideal, con técnicas profesionales."
  },
  {
    id: 2,
    title: "Curso de Latte Art",
    date: "2025-06-22",
    description: "Domina el arte de hacer figuras con la espuma de leche."
  },
  {
    id: 3,
    title: "Introducción al café de filtro",
    date: "2025-07-01",
    description: "Explorá métodos de preparación con filtro y disfruta sabores puros."
  }
];

// Función para renderizar artículos del blog
function renderBlogPosts() {
  const blogContainer = document.getElementById('blog-posts');
  blogContainer.innerHTML = '';

  blogPosts.forEach(post => {
    const postElem = document.createElement('article');
    postElem.className = 'col';

    postElem.innerHTML = `
      <a href="post.html?id=${post.id}" class="text-decoration-none text-dark">
        <div class="card h-100 shadow-sm">
          <img src="${post.image}" class="card-img-top" alt="Imagen de ${post.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.summary}</p>
            <small class="text-muted mt-auto">Publicado: ${new Date(post.date).toLocaleDateString()}</small>
          </div>
        </div>
      </a>
    `;

    blogContainer.appendChild(postElem);
  });
}

// Función para renderizar calendario de eventos
function renderCalendario() {
  const calendarioContainer = document.getElementById('calendario');
  calendarioContainer.innerHTML = '';

  eventos.forEach(evento => {
    const eventElem = document.createElement('div');
    eventElem.className = 'col';

    eventElem.innerHTML = `
      <div class="card border-primary h-100">
        <div class="card-header bg-primary text-white text-center">
          <strong>${evento.title}</strong>
        </div>
        <div class="card-body">
          <p><strong>Fecha:</strong> ${new Date(evento.date).toLocaleDateString()}</p>
          <p>${evento.description}</p>
        </div>
      </div>
    `;

    calendarioContainer.appendChild(eventElem);
  });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  renderBlogPosts();
  renderCalendario();
});
