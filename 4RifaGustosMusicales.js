class Persona {
    constructor(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.fechaNacimiento = fechaNacimiento;
        this.correo = correo;
        this.ciudadResidencia = ciudadResidencia;
        this.ciudadOrigen = ciudadOrigen;
        this.cancionesFavoritas = [];
    }

    agregarCancionFavorita(artista, titulo) {
        if (this.cancionesFavoritas.length < 3) {
            this.cancionesFavoritas.push({ artista, titulo });
        } else {
            console.log("No se pueden agregar más canciones favoritas.");
        }
    }

    mostrarInformacion() {
        console.log("Nombre:", this.nombre);
        console.log("Cédula:", this.cedula);
        console.log("Fecha de Nacimiento:", this.fechaNacimiento);
        console.log("Correo:", this.correo);
        console.log("Ciudad de Residencia:", this.ciudadResidencia);
        console.log("Ciudad de Origen:", this.ciudadOrigen);
        console.log("Canciones Favoritas:");
        for (let cancion of this.cancionesFavoritas) {
            console.log("- Artista:", cancion.artista, "Título:", cancion.titulo);
        }
    }
}

const personas = [];

function agregarPersona() {
    const nombre = prompt("Ingrese el nombre:");
    const cedula = prompt("Ingrese la cédula:");
    const fechaNacimiento = prompt("Ingrese la fecha de nacimiento:");
    const correo = prompt("Ingrese el correo electrónico:");
    const ciudadResidencia = prompt("Ingrese la ciudad de residencia:");
    const ciudadOrigen = prompt("Ingrese la ciudad de origen:");

    const persona = new Persona(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen);

    console.log("Ingrese canciones favoritas (máximo 3):");
    for (let i = 0; i < 3; i++) {
        const artista = prompt("Artista de la canción " + (i + 1) + ":");
        const titulo = prompt("Título de la canción " + (i + 1) + ":");
        persona.agregarCancionFavorita(artista, titulo);
    }

    personas.push(persona);
}

function mostrarInformacionPersona() {
    const posicion = parseInt(prompt("Ingrese la posición de la persona en el vector (0 al " + (personas.length - 1) + "):"));
    if (posicion >= 0 && posicion < personas.length) {
        personas[posicion].mostrarInformacion();
    } else {
        console.log("Posición inválida.");
    }
}


while (true) {
    const opcion = parseInt(prompt("Menú:\n1. Agregar Persona\n2. Mostrar Información Persona\n3. Salir"));
    
    switch (opcion) {
        case 1:
            agregarPersona();
            break;
        case 2:
            mostrarInformacionPersona();
            break;
        case 3:
            console.log("Saliendo del programa.");
            return;
        default:
            console.log("Opción inválida.");
    }
}