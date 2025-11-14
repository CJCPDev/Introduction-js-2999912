


class Product{
    constructor(productName,price,available){
        this.productName = productName;
        this.price = price;
    }


    formatProduct(){
        return `El nombre del producto es: ${this.productName}, su precio es: ${this.price}`;
    };
};



// Se crean los productos
const product = new Product('Marcador', 5000);
const product1 = new Product('Rule', 10000);
const product2 = new Product('Book', 7000);


// Impresion de los objetos
/* console.log(product.formatProduct());
console.log(product1.formatProduct());
console.log(product2.formatProduct()); */

/* 

class Book{
    constructor(bookName,price,isbn){
        this.bookName = bookName,
        this.price = price;
        this.isbn = isbn;
    }
};

const book = new Book('El señor de los anillos', 50000, 123456789);
const book1 = new Book('cien años de soledad', 250000, 5555505);
const book2 = new Book('Gasparcito', 10000, 98879);


console.table(book);
console.table(book1);
console.table(book2);
 */
//====================
// Herencia
// La herencia permite que los objetos y clases reutilicen propiedades y metodos de otros.


/* class Book extends Product{
    constructor(bookName,price,isbn){
        super(bookName,price)
        this.isbn = isbn;
    }

    formatBook(){
        return `El nombre del libro es: ${this.productName}, su precio es: ${this.price} codigo isbn es: ${this.isbn}`;
    };

};

const book = new Book('El señor de los anillos', 50000, 123456789);
const book1 = new Book('cien años de soledad', 250000, 5555505);
const book2 = new Book('Gasparcito', 10000, 98879);


console.log(book.formatBook());
console.log(book1.formatBook());
console.log(book2.formatBook());

 */

//=====================================================================
// Heredad metodos 


class Book extends Product{
    constructor(bookName,price,isbn){
        super(bookName,price)
        this.isbn = isbn;
    }

    formatBook(){
        return `${super.formatProduct()} y su isbn es: ${this.isbn}`;
    };

};

const book = new Book('El señor de los anillos', 50000, 123456789);
const book1 = new Book('cien años de soledad', 250000, 5555505);
const book2 = new Book('Gasparcito', 10000, 98879);


/* console.log(book.formatBook());
console.log(book1.formatBook());
console.log(book2.formatBook()); */



class Medicine extends Product{
    constructor(medicamento,price,presentacion){
        super('', price)
        this.medicamento = medicamento;
        this.presentacion = presentacion;
    }

    InformationPills(){
        return `La marca del medicamento es: ${this.medicamento}, y su precio es: ${this.price}, y la presentacion en la cual se vende es por ${this.presentacion}`
    }

};


const pills = new Medicine('Advil', 5000, 'Caja');
const pills2 = new Medicine('Advil Max', 200, 'Unidad');
const pills3 = new Medicine('Advil Forte', 8000, 'Caja');


console.log(pills.InformationPills());
console.log(pills2.InformationPills());
console.log(pills3.InformationPills());

