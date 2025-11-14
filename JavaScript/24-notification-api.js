// Notificacion API

// Es una interfaz del navegador que permite a las aplicaciones WEB mostrar notificaciones nativas del sistema operativo, incluso cuando la ventana no esta activa.


/* const button = document.querySelector('.button');

button.addEventListener('click', ()=>{
    console.log('You made clic, over the button ')
});
 */





//===========================================================


//Seleccionar la clase button en el DOM y asignarla a una variable

const button = document.querySelector('.button');

button.addEventListener('click', ()=>{
    Notification.requestPermission().then(permissions => {
        if(permissions === 'granted'){
            new Notification('Esta es una notificacion',{
                body: 'Aprendiendo JS en el SENA',
                icon: 'assets/Background.svg'
            })
        }else{
            console.log('Permiso denegado')
        }
    })
    console.log('Permiso concedido ')
})