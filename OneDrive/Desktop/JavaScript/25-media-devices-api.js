const buttonPermissions = document.querySelector('.button-permissions');


buttonPermissions.addEventListener('click',async() => {
    try {
        //Solicitar los permisos para el video
        await navigator.mediaDevices.getUserMedia({video: true, audio: true})   

        const permission = await Notification.requestPermission();

            // Mostrar el estado del permiso
        console.log(`Estado del permiso ${permission}`);// Este estado puede ser 'granted', 'denied', 'default';

        if (permission === 'granted'){
            new Notification('Permisos concedidos', {
                body: 'Cámara y micrófono activados',
                icon: 'assets/Background.svg'
            })
        } else {
                console.log('Permiso de notificacion denegado')
        };
    } catch(error){
        console.log(error)
    };
});



