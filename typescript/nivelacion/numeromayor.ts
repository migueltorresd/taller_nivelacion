//parametros rest
function obtenerMayor(...valores: number[]): number { 
   //obtenemos los nvalores pasamos a crear una variable la cual sera el resultado de la funcion
   var mayor = Math.max(...valores);
   return mayor
}
console.log(obtenerMayor(5, 8, 45));