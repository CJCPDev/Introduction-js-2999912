//Funciones en JS
// Hoisnting
// Es el comportamiento por defecto en el que el interprete mueve las declaraciones (variables y funciones) a la parte superior de su ambito (scope), antes de ejecutar el codigo.

//Declaración de una función.


function add(){
    console.log(10+20);
};

add();

// La expresión de la función.

const add2 = function(){
    console.log(30 + 40);
};

add2();

// Función IIFE, ésta función se invoca así misma.
// Son útiles para proteger variables, para que NO se mezclen con las variables de otros archivos.


(function(){
    console.log('Esta es una funcion IIFE')
})();

// Diferencia entre función y metodo

const num1 = 20;
const num2 = '10';
console.log(num1,num2)

// Función que convierte String a Number (parsear datos)

/* console.log(typeof(parseInt(num2)));

console.log(num2); */


// Un metodo siempre colocamos una variable y despues un punto
//Metodo que convierte de numero a String

console.log(num1.toString());


