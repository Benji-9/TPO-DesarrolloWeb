(() => {
  "use strict";

  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const moonIcon = 'bi-moon-fill';
  const sunIcon = 'bi-sun-fill';

  // Función para aplicar el tema
  const applyTheme = (isDark) => {
    body.classList.toggle('dark-mode', isDark);
    const icon = darkModeToggle.querySelector('i');
    icon.classList.toggle(moonIcon, !isDark);
    icon.classList.toggle(sunIcon, isDark);
  };

  // Evento al hacer clic en el botón
  darkModeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    // Guardamos la preferencia invertida
    localStorage.setItem('darkMode', !isDarkMode);
    applyTheme(!isDarkMode);
  });

  // Cargar la preferencia del usuario al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    const userPreference = localStorage.getItem('darkMode') === 'true';
    applyTheme(userPreference);
  });
})();