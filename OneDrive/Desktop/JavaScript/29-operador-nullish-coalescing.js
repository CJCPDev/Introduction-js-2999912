// Operador Nullish Coalescing 
// Sirve para dar un valor por defecto, cuando algo es null o  undefined.



// Estructura: valor1 ?? valor2

//1- Si valor1 no es null ni undefined, se usa valor1
//2- Si valor1 es null o undefined, se usa valor2

//ejemplo


let userName = "Edward";

let user = userName ?? "Invited";

console.log(user);