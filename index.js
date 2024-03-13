// Seleccionamos el icono de perfil y el contenedor de la barra lateral
const profileIcon = document.querySelector('.profile__icon');
const sidebar = document.querySelector('.sidebar-container');

// Función para alternar la clase 'active'
function toggleSidebar() {
    sidebar.classList.toggle('active');
}

// Evento de clic para el icono de perfil
profileIcon.addEventListener('click', toggleSidebar);

// Seleccionamos todos los elementos que, al hacer clic, cerrarán la barra lateral
const closeElements = document.querySelectorAll('.texts-item__link, .profile__icon, .texts__icon');

// Modificamos la función para cerrar la barra lateral
function closeSidebar(event) {
    // Verificamos si el elemento clicado es diferente al profileIcon
    if (event.target !== profileIcon) {
        sidebar.classList.remove('active');
    }
}

// Agregamos el evento de clic para cerrar la barra lateral
closeElements.forEach(el => el.addEventListener('click', closeSidebar));

