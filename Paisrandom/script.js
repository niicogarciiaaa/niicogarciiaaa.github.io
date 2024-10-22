const countries = [
    { name: "España", capital: "Madrid", position: { vertical: "centro", horizontal: "centro" } }, // Corregido a "centro"
    { name: "Argentina", capital: "Buenos Aires", position: { vertical: "abajo", horizontal: "izquierda" } }, // Correcto
    { name: "Japón", capital: "Tokio", position: { vertical: "arriba", horizontal: "derecha" } },
    { name: "Francia", capital: "París", position: { vertical: "centro", horizontal: "centro" } },
    { name: "Italia", capital: "Roma", position: { vertical: "centro", horizontal: "centro" } },
    // Agrega más países según desees
];

let currentCountry;

function selectNewCountry() {
    currentCountry = countries[Math.floor(Math.random() * (countries.length-1))];
    document.getElementById('hint').innerText = `Capital: ${currentCountry.capital}. Posición: ${currentCountry.position.vertical}, ${currentCountry.position.horizontal}.`;
}

selectNewCountry(); // Selecciona el primer país al cargar

document.getElementById('submit').addEventListener('click', checkGuess);
document.getElementById('guess').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
document.getElementById('guess').addEventListener('input', showSuggestions);

function checkGuess() {
    const guess = document.getElementById('guess').value;
    if (guess.toLowerCase() === currentCountry.name.toLowerCase()) {
        document.getElementById('result').innerText = "¡Correcto!";
        selectNewCountry(); // Selecciona un nuevo país después de adivinar correctamente
        document.getElementById('guess').value = ''; // Limpia el campo de entrada
        clearSuggestions(); // Limpia las sugerencias
    } else {
        document.getElementById('result').innerText = `Incorrecto. Intenta de nuevo.`;
    }
}

function showSuggestions() {
    const input = document.getElementById('guess').value.toLowerCase();
    const suggestions = countries.filter(country => country.name.toLowerCase().startsWith(input));
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = ''; // Limpiar sugerencias anteriores

    if (suggestions.length > 0) {
        suggestionsContainer.style.display = 'block'; // Muestra el contenedor si hay sugerencias
    } else {
        suggestionsContainer.style.display = 'none'; // Oculta si no hay sugerencias
    }

    suggestions.forEach(suggestion => {
        const div = document.createElement('div');
        div.textContent = suggestion.name;
        div.classList.add('suggestion');
        div.onclick = () => {
            document.getElementById('guess').value = suggestion.name;
            clearSuggestions(); // Limpia sugerencias al seleccionar
        };
        suggestionsContainer.appendChild(div);
    });
}

function clearSuggestions() {
    document.getElementById('suggestions').innerHTML = '';
    document.getElementById('suggestions').style.display = 'none'; // Oculta el contenedor
}
