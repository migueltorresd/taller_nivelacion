// se crea funcion 
function promedio() {
    var valores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        valores[_i] = arguments[_i];
    }
    var suma = valores.reduce(function (acc, curr) { return acc + curr; });
    var elPromedio = suma / valores.length;
    return elPromedio;
}
function compararPromedio(compara) {
    if (compara > promedio(5, 4, 8, 8)) {
        return console.log('el numero ingresado es mayor que el promedio');
    }
    else {
        return console.log('el numero ingresado es menor que el promedio');
    }
}
function promedioMayorMenor() {
    promedio(7, 7, 7, 7);
    var dato = compararPromedio(15);
    console.log("ejecutando");
}
promedioMayorMenor();
