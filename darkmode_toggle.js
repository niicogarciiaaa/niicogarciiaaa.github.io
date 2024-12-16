// Seleccionar el botón ya existente
const toggleButton = document.getElementById('darkModeToggle');

// Función para activar/desactivar modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Cambiar ícono del botón
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleButton.innerHTML = isDarkMode ? '🌞' : '🌙';

    // Guardar preferencia en localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Comprobar preferencia previa en localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleButton.innerHTML = '🌞';
} else {
    toggleButton.innerHTML = '🌙';
}

// Añadir evento de clic al botón
toggleButton.addEventListener('click', toggleDarkMode);

// Estilos para modo oscuro y botón redondo
document.head.insertAdjacentHTML('beforeend', `
<style>
    .dark-mode {
        background-color: #121212;
        color: #ffffff;
    }

    .dark-mode a {
        color: #4dabf7;
    }

    .dark-mode .card {
        background-color: #1e1e1e;
        border: 1px solid #333;
    }

    .dark-mode .card-text {
        color: #ffffff;
    }

    .dark-mode .btn-primary {
        background-color: #4dabf7;
        border-color: #4dabf7;
    }

    .dark-mode .btn-primary:hover {
        background-color: #42a5f5;
    }

    #darkModeToggle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background-color: #f0f0f0;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    #darkModeToggle:hover {
        background-color: #e0e0e0;
        transform: scale(1.1);
    }

    .dark-mode #darkModeToggle {
        background-color: #333;
        color: #fff;
    }

    .dark-mode #darkModeToggle:hover {
        background-color: #444;
    }
</style>
`);
