
// Obtener el ícono del menú y el menú de navegación
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('navbar-options');

// Agregar un evento de clic al ícono del menú
menuToggle.addEventListener('click', () => {
    // Alternar la clase 'active' para mostrar u ocultar el menú
    menu.toggle('active');
});