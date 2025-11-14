// Es la forma directa de crear un objeto usando {} y pares clave valor

/* const person = {
    userName: 'Peter',
}; */


//Objeto constructor: crea objetos mediante una funcion o clase usando new
// Instanciar es todo el proceso mediante el cual se crea un objeto a partir de una clase.

//const person1  = new Person('Maria', 25, True);


//===============================================
// Objeto constructor

function Product(productName,price){
    this.productName = productName;
    this.price = price;
}

const product = new Product ('Monitor curvo de 55"', 600000);
const product2 = new Product ('Mouse', 600000);
const product3 = new Product ('Keyboard"', 600000);


console.log(product);
console.log(product2);
console.log(product3);


//================================================

// Prototype: Prototipo es como un molde o modelo base.
// Cuando se crean muchos objetos que se parecen, no se quiere escribir lo mismo muchas veces.

function Car(brand, color){
    this.color = color;
    this.brand = brand;
}

// Se define una funcion comun para todos los carros.

Car.prototype.sloDown = function(){
    console.table((this.brand + ' esta frenando'));
};

const car1 = new Car('Kia', 'Gray');
const car2 = new Car('Toyota', 'White');

car1.sloDown();
car2.sloDown();

function Person(userName,userAge,userEmail){
    this.userName = userName;
    this.userAge = userAge;
    this.userEmail = userEmail;
};


Person.prototype.formatInformation = function(){
     console.log(`El nombre del usuario es ${this.userName} con edad ${this.userAge} y el correo registrado es ${this.userEmail}`);
};


const person = new Person('Camilo', 28, 'correo@correo.com');
const person1 = new Person('Pepito', 20, 'correo2@correo.com');
const person2 = new Person('Mambru', 100, 'correo3@correo.com');



person.formatInformation(),
person1.formatInformation();
person2.formatInformation();



