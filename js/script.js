// JavaScript para manejar la lógica de selección de estilos y actualización de la vista previa

const estilosSeleccionados = new Set(); // Utilizamos un Set para asegurarnos de no tener duplicados

function toggleEstilo(estilo) {
    if (estilosSeleccionados.has(estilo)) {
        estilosSeleccionados.delete(estilo);
    } else {
        if (estilosSeleccionados.size < 3) {
            estilosSeleccionados.add(estilo);
        } else {
            alert("¡Solo puedes seleccionar hasta 3 estilos!");
        }
    }
    actualizarVistaPrevia();
}

function actualizarVistaPrevia() {
    const previewContainer = document.getElementById("preview-container");
    previewContainer.innerHTML = "";

    estilosSeleccionados.forEach(estilo => {
        const span = document.createElement("span");
        span.classList.add("preview");
        span.textContent = estilo;
        previewContainer.appendChild(span);
    });
}

//Clear selected. ↓
function clearSelection() {
    estilosSeleccionados.clear();
    actualizarVistaPrevia();
}