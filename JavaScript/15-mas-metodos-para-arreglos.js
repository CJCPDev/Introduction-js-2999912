//Métodos para arreglos
// Crear un arreglo de objetos para un carrito de compras


//Arreglo de meses
const months = ['December', 'November', 'January', 'February'];


const shopingcart = [
    {productName: 'Tablet', price: 800},
    {productName: 'Mouse', price: 50},
    {productName: 'Smart Tv', price: 1500},
    {productName: 'Computer', price: 2000},
    {productName: 'Play Station', price: 1800},
    {productName: 'X-box', price: 1800},
    {productName: 'Nintendo Wii', price: 900},
    {productName: 'Keyboard', price: 400},
    {productName: 'Sound-Bar', price: 700}
]


// Recorre el arreglo y muestra todos los elemenos
/*months.forEach(function(months){
    console.log(months);
});*/

/* months.forEach(function(months){
    if(months == 'January'){
        console.log('January si existe')
    } else {
        console.log('No existe')
    }
});
 */
// el metodo includes no funciona con objetos
/* const product = shopingcart.includes({productName:'Tablet', price: 800});
console.log(shoping); */


// Para objetos planos usamos includes y para objetos some
/* const result = shopingcart.some(function(product){
    return product.productName === 'Tablet', product.price === 800;
}); */


/* const result = shopingcart.some(product => product.productName === 'Tablet');
 */


//El metodo reduce nos sirve para realizar la sumatoria de los precios
/* const sumatoria = shopingcart.reduce(function(total, product){
    return total + product.price;
},0);

const result = shopingcart.reduce((total, product) => total + product.price,0); */



// 
/* const result = shopingcart.filter(function(product){
    return product.price < 100;
}) 
 */

const result = shopingcart.filter(product => product.productName ==! 'Sound-Bar');

console.table(result);  



