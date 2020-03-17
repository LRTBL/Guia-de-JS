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

const array = ["Enero", "Febrero", "Marzo"];
array.push("Diciembre"); //AÑADE ELEMENTO AL FINAL
array.unshift("Mes 0"); //AÑADE AL PRINCIPIO
array.pop(); // ELIMINA EL ULTIMO ELEMENTO
array.shift(); // ELIMINA EL PRIMER ELEMENTO
array.splice(2, 2); //QUITAR POR RANGO (2: INDEX ,2: CANTIDAD A APARTIR DE INDEX)
array.reverse();
console.log(array);
