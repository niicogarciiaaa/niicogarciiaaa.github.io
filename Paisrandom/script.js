const countries = [
    { name: "España", capital: "Madrid", position: { vertical: "centro", horizontal: "centro" } },
    { name: "Argentina", capital: "Buenos Aires", position: { vertical: "abajo", horizontal: "izquierda" } },
    { name: "Japón", capital: "Tokio", position: { vertical: "arriba", horizontal: "derecha" } },
    { name: "Francia", capital: "París", position: { vertical: "centro", horizontal: "centro" } },
    { name: "Italia", capital: "Roma", position: { vertical: "centro", horizontal: "centro" } },
    { name: "Brasil", capital: "Brasília", position: { vertical: "abajo", horizontal: "izquierda" } },
    { name: "Canadá", capital: "Ottawa", position: { vertical: "centro", horizontal: "centro" } },
    { name: "India", capital: "Nueva Delhi", position: { vertical: "centro", horizontal: "centro" } },
    { name: "Australia", capital: "Canberra", position: { vertical: "centro", horizontal: "centro" } },
    { name: "México", capital: "Ciudad de México", position: { vertical: "centro", horizontal: "centro" } }
];

let currentCountry;
let correctCount = 0; // Contador de respuestas correctas
let selectedCountries = []; // Array para llevar un registro de países seleccionados

function selectNewCountry() {
    // Si ya se han seleccionado todos los países, reiniciar
    if (selectedCountries.length === countries.length) {
        alert(`¡Felicidades! Has adivinado todos los países. Total correcto: ${correctCount}`);
        selectedCountries = []; // Reiniciar la lista de seleccionados
        correctCount = 0; // Reiniciar el contador
        document.getElementById('correctCount').innerText = `Respuestas correctas: ${correctCount}`;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * countries.length);
    } while (selectedCountries.includes(countries[randomIndex].name)); // Asegurarse de que no se repita

    currentCountry = countries[randomIndex];
    selectedCountries.push(currentCountry.name); // Agregar a la lista de seleccionados
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
        correctCount++; // Incrementar contador de respuestas correctas
        document.getElementById('result').innerText = "¡Correcto!";
        document.getElementById('correctCount').innerText = `Respuestas correctas: ${correctCount}`; // Actualizar contador en la interfaz
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
