import fs from 'fs'; 

//Logra que la información persista en nuestro programa.
//Segundo parámetro el formato que queremos, en nuestro caso “utf8”:
//Este método también pertenece al modulo “fs” y lo utilizamos para leer archivos .txt.

const datos = fs.readFileSync('./test.txt', "utf8");
const sinEspacio = datos.trim()
const dataRecuperada = sinEspacio.split(" ");

console.log(dataRecuperada);