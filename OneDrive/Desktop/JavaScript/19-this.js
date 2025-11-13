// This en js

// This es una palabra reservada del sistema y no podemos usarla para nombrar variables o funciones.

const reservation = {
    userName: 'Edwar',
    lastName: 'Velasquez',
    userAge: 42,
    totalPay: 420000,
    isPayed: true,


    information: function(){
        return `El cliente ${this.userName} reservó y la cantidad a pagar es ${this.totalPay}`
    }
}


console.log(reservation.information());

const reservation2 = {
    userName: 'Pedro',
    lastName: 'Velez',
    userAge: 42,
    totalPay: 420000,
    isPayed: true,


    information: function(){
        return `El cliente ${this.userName} reservó y la cantidad a pagar es ${this.totalPay}`
    }
}


console.log(reservation2.information());