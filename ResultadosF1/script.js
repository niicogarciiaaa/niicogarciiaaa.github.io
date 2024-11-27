// Cargar las temporadas disponibles en el select
document.addEventListener("DOMContentLoaded", () => {
    cargarTemporadas();
  });
  
  function cargarTemporadas() {
    const selectSeason = document.getElementById("season");
    for (let year = 2005; year <= new Date().getFullYear(); year++) {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      selectSeason.appendChild(option);
    }
  }
  
  // Cargar resultados de pilotos al seleccionar una temporada
  function cargarResultados() {
    const season = document.getElementById("season").value;
    if (season) {
      fetch(`https://ergast.com/api/f1/${season}/driverStandings.json`)
        .then(response => response.json())
        .then(data => mostrarTabla(data.MRData.StandingsTable.StandingsLists[0].DriverStandings))
        .catch(error => console.error("Error al cargar los resultados:", error));
    }
  }
  
  // Mostrar los resultados en la tabla principal
  function mostrarTabla(resultados) {
    const tbody = document.querySelector("#resultados tbody");
    tbody.innerHTML = "";
    resultados.forEach((resultado, index) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${index + 1}</td>
        <td>${resultado.Driver.givenName} ${resultado.Driver.familyName}</td>
        <td>${resultado.Constructors[0].name}</td>
        <td>${resultado.points}</td>
        <td><button onclick="mostrarResultadosPiloto('${resultado.Driver.driverId}', this)">Ver Resultados</button></td>
      `;
      tbody.appendChild(fila);
    });
  }
  
  // Mostrar resultados de un piloto en cada carrera, reemplazando el botón
  // Mostrar resultados de un piloto en cada carrera, reemplazando el botón
// Mostrar resultados de un piloto en cada carrera, reemplazando el botón
function mostrarResultadosPiloto(driverId, boton) {
    const season = document.getElementById("season").value;
    if (season) {
      fetch(`https://ergast.com/api/f1/${season}/drivers/${driverId}/results.json?limit=1000`)
        .then(response => response.json())
        .then(data => {
          const resultados = data.MRData.RaceTable.Races;
          let contenidoHTML = '<ul>';
          resultados.forEach(carrera => {
            const resultado = carrera.Results.find(res => res.Driver.driverId === driverId);
            contenidoHTML += `
              <li>${carrera.raceName} - ${carrera.date}: ${resultado ? `Posición: ${resultado.position}` : 'No finalizó'}</li>
            `;
          });
          contenidoHTML += '</ul>';
          
          // Reemplazar el contenido del botón con los resultados
          const celdaBoton = boton.parentElement;  // Guardar la referencia a la celda del botón
          celdaBoton.innerHTML = contenidoHTML;   // Reemplazar la celda con los resultados
  
          // Ocultar los resultados después de 20 segundos
          setTimeout(() => {
            // Restaurar el botón después de 20 segundos
            celdaBoton.innerHTML = '<button onclick="mostrarResultadosPiloto(\'' + driverId + '\', this)">Ver Resultados</button>';
          }, 10000); // 20000 ms = 20 segundos
        })
        .catch(error => console.error("Error al cargar los resultados del piloto:", error));
    }
  }
  
  
