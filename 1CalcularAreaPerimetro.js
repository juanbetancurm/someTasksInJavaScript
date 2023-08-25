function calcularAreaTriangulo(a, b, c, h) {
    const area = (b * h) / 2;
    //alert(area);
    return area;
}

function calcularPerimetroTriangulo(a, b, c) {
    const perimetro = a + b + c;
    //alert(perimetro);
    return perimetro;
}

function calcularAreaRectangulo(a, b) {
    const area = a * b;
    return area;
}

function calcularPerimetroRectangulo(a, b) {
    const perimetro = 2*a + 2*b;
    //alert(perimetro);
    return perimetro;
}

function calcularAreaCuadrado(a) {
    const area = a * a;
    return area;
}

function calcularPerimetroCuadrado(a) {
    const perimetro = 4*a;
    //alert(perimetro);
    return perimetro;
}

function calcularAreaCirculo(r) {
    const area = Math.PI * r * r;
    return area;
}

function calcularPerimetroCirculo(r) {
    const perimetro = 2*Math.PI*r
    //alert(perimetro);
    return perimetro;
}