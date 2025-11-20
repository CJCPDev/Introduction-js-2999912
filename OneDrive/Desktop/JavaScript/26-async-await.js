function downloadClients (){
    return new Promise(resolve => {

        // Aqui va el codigo con la ruta para descargar los clientes
        console.log('Descargando clientes....');


        // Estas lineas se ejecutan despues de pasado un tiempo determinado en la programación.

        setTimeout(() => {
            resolve('Los clientes fueron descargados') 
        }, 5000);

    })
};

async function app() {
    try {
        // De esta manera no se ejecutan las dos promesas al mismo tiempo
        const clients = await(downloadClients());
        console.log(clients);
        console.log('Este codigo si se bloquea');
    } catch (error) {
        console.log(error);
    }
};

app();
console.log('Este codigo no se bloquea')


function downloadLastTextOrders (){
    return new Promise ( resolve => {
        console.log('Descargando Pedidos');

        setTimeout(() => {
            resolve('')
        }, 12000);
    });
};


async function app2() {  
    try {
        // Método mas eficiente, se ejecutan las dos al mismo tiempo
        const result = await Promise.all([downloadClients(),downloadLastTextOrders()]);
        console.log('Este codigo si se bloquea');
        console.log(result[0]);
        console.log(result[1]);
    } catch (error) {
        console.log(error);
    }
};

app2();