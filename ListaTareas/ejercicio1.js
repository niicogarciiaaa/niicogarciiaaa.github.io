document.addEventListener("DOMContentLoaded", () => {
  // Función para crear una lista de tareas
  function crearListaTareas(formularioId, inputId, listaId, localStorageKey) {
      const formulario = document.getElementById(formularioId);
      const inputTarea = document.getElementById(inputId);
      const listaTareas = document.getElementById(listaId);

      function cargarTareas() {
          const tareasGuardadas = localStorage.getItem(localStorageKey);
          if (tareasGuardadas) {
              const tareasArray = tareasGuardadas.split(',');
              const tareas = [];
              for (let i = 0; i < tareasArray.length; i++) {
                  tareas.push(tareasArray[i]);
              }
              return tareas;
          }
          return [];
      }

      let tareas = cargarTareas();

      function guardarEnLocalStorage() {
          localStorage.setItem(localStorageKey, tareas.join(','));
      }

      function renderTareas() {
          listaTareas.innerHTML = "";
          for (let i = 0; i < tareas.length; i++) {
              const tarea = tareas[i];
              const li = document.createElement("li");
              li.textContent = tarea;

              const checkbox = document.createElement("input");
              checkbox.type = "checkbox";
              checkbox.addEventListener("change", () => eliminarTarea(i));

              li.prepend(checkbox);
              listaTareas.appendChild(li);
          }
      }

      function eliminarTarea(index) {
          tareas.splice(index, 1);
          guardarEnLocalStorage();
          renderTareas();
      }

      function addTarea(event) {
          event.preventDefault();
          const nuevoTexto = inputTarea.value.trim();
          if (nuevoTexto !== "") {
              tareas.push(nuevoTexto);
              inputTarea.value = "";
              guardarEnLocalStorage();
              renderTareas();
          }
      }

      formulario.addEventListener("submit", addTarea);
      renderTareas();
  }

  // Crear lista de tareas para Carballo
  crearListaTareas("formularioCarballo", "TextoTareaCarballo", "listaTareasCarballo", "tareasCarballo");

  // Crear lista de tareas para Ponteceso
  crearListaTareas("formularioPonteceso", "TextoTareaPonteceso", "listaTareasPonteceso", "tareasPonteceso");
});