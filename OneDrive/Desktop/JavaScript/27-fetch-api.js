// Fetch API
// Es una función de JS que permise realizar peticiones HTTP, incluyendo GET, POST, PUT, DELETE, etc..., es una API moderna



function getEmployees() {
    // Aqui se copiaria la URL, por ejemplo https://wwww.ricoprogramar.com
        const file = 'employees.json';
        fetch(file)

        // Aquí se obtienen los datos
        .then( result  =>{
            return result.json();
        })

        // Aquí se muestran los datos
        .then (data => {
            console.log(data);

        // Desestructuracion de objetos 
            const { employees } = data;
            console.log(employees);

        //Se itera por el arreglo
        employees.forEach(employe =>{
            console.log(employe.id);
            console.log(employe.userName);
            console.log(employe.job);

        
            document.querySelector('.content').textContent += employe.userName;

        });
    });
}

getEmployees();
