// # para obtener ID con querySelector
const tittle = document.querySelector('#app-tittle');
const boton1 = document.getElementById('boton-cambiar-titulo')

// el .dir sirve para poder ver las propiedades de este javascript en el console
console.dir(tittle);


// Esto permite estar a la espera del evento click del boton1
boton1.addEventListener('click', cambiarTitulo)

// Esto es una funcion que se ejecuta cuando se hace click en el boton1 y cambia el textContent
function cambiarTitulo(){
    tittle.textContent = 'Nuevo texto';
}