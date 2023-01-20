//parametros rest
function obtenerMayor() {
    var valores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        valores[_i] = arguments[_i];
    }
    var mayor = Math.max.apply(Math, valores);
    return mayor;
}
console.log(obtenerMayor(5, 8, 7));
