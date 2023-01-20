// se crea funcion 
function promedio(...valores: number[]): number {
     let suma = valores.reduce((acc, curr) => acc + curr);
     let elPromedio = suma / valores.length; 
     return elPromedio;
 }

 function compararPromedio(compara: number){
    
        if (compara > promedio(5,4,8,8)){
            return  console.log('el numero ingresado es mayor que el promedio');
        }
        else {
            return console.log('el numero ingresado es menor que el promedio')
        }
    
 }


 function promedioMayorMenor(){
    promedio(7, 7, 7, 7);
    const dato = compararPromedio(15);
    console.log("ejecutando")
}
 
promedioMayorMenor()
