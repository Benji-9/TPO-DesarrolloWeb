const blogPosts = [
  {
    id: 1,
    title: "Introducción al café de especialidad",
    image: "img/posts/cafe-especialidad.webp",
    date: "2025-06-15",
    content: `
      <p>El café de especialidad se distingue por su trazabilidad, calidad en origen y cuidado en el proceso. Se cultiva en altitudes específicas y se tuesta para resaltar sus notas únicas.</p>
      <p>Te ayudamos a identificar cafés con puntaje SCA y a elegir el mejor grano según tu método preferido.</p>
    `
  },
  {
    id: 2,
    title: "Métodos para preparar café en casa",
    image: "img/posts/metodos-preparacion.webp",
    date: "2025-06-20",
    content: `
      <p>Desde la prensa francesa hasta el V60, cada método aporta sabores únicos. Aquí te mostramos cómo usarlos, qué molienda elegir y tiempos recomendados.</p>
      <ul>
        <li><strong>Prensa francesa:</strong> molienda gruesa, 4 min</li>
        <li><strong>V60:</strong> molienda media, 2:30 min</li>
        <li><strong>Aeropress:</strong> versátil y portátil</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Los mejores blends de La Bodega del Café",
    image: "img/posts/blends-bodega.webp",
    date: "2025-06-25",
    content: `
      <p>Explorá nuestras mezclas estrella: desde el blend Palermo intenso hasta el Suave Amanecer, cada uno está diseñado para paladares distintos.</p>
      <p>Vení a probarlos o pedilos online con envío gratis en CABA.</p>
    `
  }
];

function getPostIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"));
}

function renderPost() {
  const postId = getPostIdFromURL();
  const post = blogPosts.find(p => p.id === postId);

  const container = document.getElementById('post-content');

  if (!post) {
    container.innerHTML = `<h2 class="text-center text-danger">Artículo no encontrado.</h2>`;
    return;
  }

    container.innerHTML = `
    <h2 class="mb-3">${post.title}</h2>
    <p class="text-muted">Publicado: ${new Date(post.date).toLocaleDateString()}</p>
    <img src="${post.image}" alt="Imagen relacionada a ${post.title}" class="img-fluid rounded mb-4" />
    <div>${post.content}</div>
    <a href="blog.html" class="btn btn-outline-primary mt-4">← Volver al blog</a>
    `;

}

document.addEventListener('DOMContentLoaded', renderPost);
