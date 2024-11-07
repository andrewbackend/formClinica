function cargarSeccion(archivo) {
    fetch(archivo)
        .then(response => response.text())
        .then(data => { 
            document.getElementById("contenido-principal").innerHTML = data;
            if (archivo === 'lista-pacientes.html') mostrarPacientes();
        })
        .catch(error => console.log("Error al cargar la sección:", error));
}

let citas = [];

function registroCitas(){
    const nombre = document.getElementById("nombre").value;
    const dni = document.getElementById("dni").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const motivo = document.getElementById("motivo").value;

    if (!nombre.match(/^[A-Za-z\s]+$/) || !dni.match(/^\d{8}$/)) {
        alert("Verifique los datos ingresados.");
        return;
    }

    const cita = { nombre, dni, fecha, hora, motivo};
    citas.push(cita);
    alert("Cita registrada con éxito");
    document.getElementById("form-cita").reset();
}


function mostrarPacientes (){
    
}