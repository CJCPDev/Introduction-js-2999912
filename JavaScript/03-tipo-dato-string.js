//== String o cadena de texto

const userName = " carlos";
const name1 = 'Camilo';


console.log(typeof userName);
console.log(name1);


// Dos formas no comunes de crear Strings

const userName2 = String("camilo");

// Creamos una variable mediante el constructor, instanciando a partir de la palabra new.

//Instanciar, es el proceso mediante el cual creo un objeto a partir de una clase.

const userName3 = new String("camilo");



console.log(userName2);
console.log(typeof userName3)

let product = 'Televisor de 50"';
console.log(product)

let product2 = "Televisor de 50\"";
console.log(product2);

let phrase = "Estamos aprendiendo JS en el CDITI";
console.log(phrase.length)

// el indexof Busca si una cadena existe y me da su indexacion.
/// Si el resultado es < 0, la cadena no existe, si es > 0 existe en la busqueda

console.log(phrase.indexOf("JS"));


/// Metodo mas moderno para hacer lo mismo que indexof
console.log(phrase.includes("e"));


