//Cadenas

// length: método que, al igual que con arreglos,retorna la longitud de una cadena.
// let cadena : string =”ABCDE”;
// console.log(cadena.length); //retorna 5

//indexOf(textoBuscado): método que retorna el índice de (o sea la posición de) la primer
//ocurrencia de textoBuscado en una cadena. (retorna -1 si no está, admite un 2do parámetro entero para iniciar la búsqueda desde ahí)
// let cadena : string ="Tengo que hacer muchos ejercicios”;
// console.log(cadena.indexOf(“hacer”)); //retorna 10

//lastIndexOf(textoBuscado): método que retorna el índice de (o sea la posición de) la última
//ocurrencia de textoBuscado en una cadena. (retorna -1 si no está, admite también un 2do
//parámetro entero para iniciar la búsqueda desde ahí)
// let cadena : string = "Tengo que hacer y hacer y hacer muchos ejercicios";
// console.log(cadena.lastIndexOf("hacer")); //retorna 26

// - substring(inicio, final) método que retorna la porción de la cadena entre las posiciones
// inicio y final.
// let cadena : string =”Tengo que hacer y hacer y hacer muchos ejercicios”;
// console.log(cadena.substring(10, 15)); //retorna “hacer”

// - substr(inicio, largo) método que retorna la porción de la cadena de tamaño largo a partir de
// la posición inicio.
// let cadena : string ="Tengo que hacer y hacer y hacer muchos ejercicios";
// console.log(cadena.substr(10, 21)); //retorna “hacer y hacer y hacer” empieza desde
//el caracter n 10 y da los siguientes 21 caracteres.

// - toUpperCase() método que retorna una cadena con todos sus caracteres pasados a
// mayúsculas.
// let cadena : string =”Tengo que hacer y hacer y hacer muchos ejercicios”;
// console.log(cadena.toUpperCase()); //retorna “TENGO QUE HACER Y HACER Y HACER MUCHOS EJERCICIOS”

// - toLowerCase() método que retorna una cadena con todos sus caracteres pasados a
// minúsculas.
// let cadena : string =”Tengo que hacer y hacer y hacer muchos ejercicios”;
// console.log(cadena.toLowerCase()); //retorna “tengo que hacer y hacer y hacer muchos ejercicios”

// - toString() método que (aplicado a un número) retorna una cadena que representa
// los caracteres de cada dígito.
// let numero : number = 2021;
// console.log(numero.toString()); //retorna “2021”

// - parseInt() método que convierte una cadena con caracteres numéricos sin símbolo
// decimal en un número entero.
// let cadena : string = ”2021”;
// console.log(parseInt(cadena)); //retorna 2021

// - parseFloat() método que convierte una cadena con caracteres numéricos con
// símbolo decimal en un número decimal.
// let cadena : string = ”3.14159”;
// console.log(parseFloat(cadena)); //retorna 3.14159