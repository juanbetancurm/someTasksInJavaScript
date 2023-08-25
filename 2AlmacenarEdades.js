function calcularEstadisticasEdades(edades) {
    let menores = 0;
    let mayores = 0;
    let adultosMayores = 0;
    let sumaEdades = 0;
    let minEdad = edades[0];
    let maxEdad = edades[0];

    for (let edad of edades) {
        if (edad >= 18 && edad < 60) {
            mayores++;
        } else if (edad < 18) {
            menores++;
        } else {
            adultosMayores++;
        }

        sumaEdades += edad;

        if (edad < minEdad) {
            minEdad = edad;
        }

        if (edad > maxEdad) {
            maxEdad = edad;
        }
    }

    const promedioEdades = sumaEdades / edades.length;

    return {
        menores,
        mayores,
        adultosMayores,
        minEdad,
        maxEdad,
        promedioEdades
    };
}