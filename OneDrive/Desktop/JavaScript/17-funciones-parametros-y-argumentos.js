// Funciones parámetros y argumentos 



// los parametros se pasan en los parentesis de la funcion
function add(num1,num2)/*estos son los parametros*/{
    console.log(num1 + num2)
};

add(7,1);// estos son los argumentos y solo actuan en tiempo de ejecucion
add(74,10);// estos son los argumentos y solo actuan en tiempo de ejecucion
add(7,8);// estos son los argumentos y solo actuan en tiempo de ejecucion
add(7,0);// estos son los argumentos y solo actuan en tiempo de ejecucion
add(7,18);// estos son los argumentos y solo actuan en tiempo de ejecucion


const add2 = function(num3,num4){
    console.log(num3 + num4)
};

add2(5,1);

const result = add(5,1) + 8;

console.log(result);


// Función con valores por defecto

function add3(num5 = 9, num6 = 3){
    console.log(num5 + num6)
};

add3();


