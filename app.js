// $$$$$$    METODOS PARA STRINGS        $$$$$$$$$$$$$

// var nombre = "fernando chullo mamani";
// console.log(nombre.length);
// console.log(nombre.concat(" ", "papa"));
// console.log(nombre.toLowerCase());
// console.log(nombre.toUpperCase());
// console.log(nombre.indexOf("chullo")); INDICE DONDE ENCUENTRA EL STRING
// console.log(nombre.substring(0, 5)); //  RETORNA SUBSTRING
// console.log(nombre.slice(0, 5)); // IGUAL QUE SUBSTRING PERO ADMITE -4
// console.log(nombre.split(" ")); // SEPARA DEPENDENDIENDO DEL PARAMETRO - RETURN ARRAY
// console.log(nombre.replace("fernando", "jose")); // REMPLAZA LOS TRINGS
// console.log(nombre.includes("chullo")); // BUSCA EL STRING Y DEVUELVE TRUE O FALSE
// console.log(nombre.repeat(2));

// $$$$$$      METODOS PARA NUMBERS     $$$$$$$$$$$$$

// const numero2 = 30,
//   numero1 = 20,
//   numero3 = 250.55,
//   numero4 = 280,
//   numero5 = 10;
// console.log(Math.round(numero3)); // REDONDEO DE NUEMEROS
// console.log(numero3.toFixed(3)); // REDONDEO DE NUEMEROS A X DECIMALES
// console.log(Math.PI);
// console.log(Math.ceil(2.1)); //REDONDEO HACIA MAYOR
// console.log(Math.floor(2.1)); //REDONDEO HACIA MENOR
// console.log(Math.sqrt(144)); // RAIZ CUADRADA
// console.log(Math.abs(-1)); // ABSOLUTO
// console.log(Math.pow(2, 5)); //CUADRADO
// console.log(Math.min(2, 4, 6, 8, 3, 3)); //MIN
// console.log(Math.max(2, 4, 6, 8, 3, 3)); //MAX
// console.log(Math.random());

// $$$$$$$$$         CONVERTIR DE STRING A NUMERO         $$$$$$$$$$$

// let number = "2";
// console.log(parseInt(number));
// console.log(parseFloat(number));
// console.log(Number(number));

//$$$$$$$$      CONVERTIR DE NUMERO A STRING      $$$$$$$$$$$

// console.log(String(343435));

//$$$$$$$     ARRAY     $$$$$$$

// var array = ["Enero", "Febrero", "Marzo"];
// var array2 = ["Abril", "Mayo", "Junio"];
// var numbers = [324, 3546, 1, 24, 5, 2, 2, 5, 8564, 675, 4, 36];
// array.push("Diciembre"); //AÑADE ELEMENTO AL FINAL
// array.unshift("Mes 0"); //AÑADE AL PRINCIPIO
// array.pop(); // ELIMINA EL ULTIMO ELEMENTO
// array.shift(); // ELIMINA EL PRIMER ELEMENTO
// array.splice(2, 2); //QUITAR POR RANGO (2: INDEX ,2: CANTIDAD A APARTIR DE INDEX)
// array.reverse();
// array.concat(array2); // CONCATENA PERO NO GUARDA EN VAIRABLE
// array2.sort();

// //SORT DE NUMEROS
// numbers.sort((x, y) => {
//   console.log(x + " " + y);
//   return x - y;
// });
// console.log(numbers);

// $$$$$$$$$$4 IIEF $$$$$$$$$$$$$$

// (function sumar(a) {
//   console.log(`Hola ${a}`);
// })("fernando");  // FUNCIONES QUE SE EJECUTAN SIN LLAMAR

//$$$$$$$$$$ METODOS DE FECHA $$$$$$$$$$

// const today = new Date();
// const navidada2017 = new Date("12-26-2017");
// console.log(today.getMonth()); // EMPIEZA DESDE EL 0
// console.log(today.getDate());
// console.log(today.getFullYear());
// console.log(today.getMinutes());
// console.log(today.getHours());
// console.log(today.getTime()); // MILISEGUNDOS DESDE 1970
// console.log(today.setFullYear(2018));

// -------------------------------
const personas = ["Fernando", "Chullo", "Mamani", "Mahiler", "Pepe"];

personas.forEach((item, index) => {
  console.log(`El nombre es ${item} en la posicion ${index}`);
});

const nuevo = personas.map((item) => {
  return item;
});

// for (let jose in personas) {
//   console.log(jose);
// }

for (let pepe of personas.entries()) {
  console.log(pepe);
}

// console.log(nuevo);
