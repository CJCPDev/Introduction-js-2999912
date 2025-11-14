//Se busca no modificar el arreglo original

const months = ['December', 'November', 'January', 'February'];
console.table(months);


// Crear un nuevo arreglo y lo unimos con otro

const newArray = [...months,'May'];
console.table(newArray);  


const newArray2 = ['October',...newArray];
console.table(newArray2);