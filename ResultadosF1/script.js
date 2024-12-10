document.addEventListener("DOMContentLoaded", () => {
  cargarTemporadas();
});

function cargarTemporadas() {
  const selectSeason = document.getElementById("season");
  for (let year = 1950; year <= new Date().getFullYear(); year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    selectSeason.appendChild(option);
  }
}

function cargarResultados() {
  const season = document.getElementById("season").value;
  if (season) {
    // Cargar clasificación de pilotos
    fetch(`https://ergast.com/api/f1/${season}/driverStandings.json`)
      .then(response => response.json())
      .then(data => mostrarTablaPilotos(data.MRData.StandingsTable.StandingsLists[0].DriverStandings))
      .catch(error => console.error("Error al cargar los resultados de pilotos:", error));

    // Cargar clasificación de constructores
    fetch(`https://ergast.com/api/f1/${season}/constructorStandings.json`)
      .then(response => response.json())
      .then(data => mostrarTablaConstructores(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings))
      .catch(error => console.error("Error al cargar los resultados de constructores:", error));
  }
}

function mostrarTablaPilotos(resultados) {
  const tbody = document.querySelector("#tablaPilotos tbody");
  tbody.innerHTML = "";
  resultados.forEach((resultado, index) => {
    const fila = document.createElement("tr");
    fila.setAttribute("data-driver-id", resultado.Driver.driverId);
    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>${resultado.Driver.givenName} ${resultado.Driver.familyName}</td>
      <td>${resultado.Constructors[0].name}</td>
      <td>${resultado.points}</td>
      <td class="detalles"></td>
    `;

    fila.addEventListener("mouseover", function () {
      mostrarResultadosPiloto(resultado.Driver.driverId, fila);
    });
    fila.addEventListener("mouseout", function () {
      ocultarResultados(fila);
    });

    tbody.appendChild(fila);
  });
}

function mostrarTablaConstructores(resultados) {
  const tbody = document.querySelector("#tablaConstructores tbody");
  tbody.innerHTML = "";
  resultados.forEach((resultado, index) => {
    const fila = document.createElement("tr");
    fila.setAttribute("data-constructor-id", resultado.Constructor.constructorId);
    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>${resultado.Constructor.name}</td>
      <td>${resultado.points}</td>
      <td class="detalles"></td>
    `;

    fila.addEventListener("mouseover", function () {
      mostrarResultadosConstructor(resultado.Constructor.constructorId, fila);
    });
    fila.addEventListener("mouseout", function () {
      ocultarResultados(fila);
    });

    tbody.appendChild(fila);
  });
}

function mostrarResultadosPiloto(driverId, fila) {
  const season = document.getElementById("season").value;
  const celdaDetalles = fila.querySelector(".detalles");

  if (!season || celdaDetalles.innerHTML.trim() !== "") return;

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
      celdaDetalles.innerHTML = contenidoHTML;
    })
    .catch(error => console.error("Error al cargar los resultados del piloto:", error));
}

function mostrarResultadosConstructor(constructorId, fila) {
  const season = document.getElementById("season").value;
  const celdaDetalles = fila.querySelector(".detalles");

  if (!season || celdaDetalles.innerHTML.trim() !== "") return;

  fetch(`https://ergast.com/api/f1/${season}/constructors/${constructorId}/results.json?limit=1000`)
    .then(response => response.json())
    .then(data => {
      const resultados = data.MRData.RaceTable.Races;
      let contenidoHTML = '<ul>';
      resultados.forEach(carrera => {
        contenidoHTML += `
          <li>${carrera.raceName} - ${carrera.date}: Puntos: ${carrera.Results[0].points}</li>
        `;
      });
      contenidoHTML += '</ul>';
      celdaDetalles.innerHTML = contenidoHTML;
    })
    .catch(error => console.error("Error al cargar los resultados del constructor:", error));
}

function ocultarResultados(fila) {
  const celdaDetalles = fila.querySelector(".detalles");
  celdaDetalles.innerHTML = "";
}