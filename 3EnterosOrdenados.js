function mezclarOrdenarVectores(vector1, vector2) {
    if (vector1.length !== 5 || vector2.length !== 5) {
        return "Los vectores deben tener un tamaño de 5 elementos.";
    }

    for (let i = 1; i < 5; i++) {
        if (vector1[i] <= vector1[i - 1] || vector2[i] <= vector2[i - 1]) {
            return "Los elementos deben ingresarse en orden ascendente.";
        }
    }

    const resultado = [...vector1, ...vector2];
    resultado.sort((a, b) => a - b);

    return resultado;
}