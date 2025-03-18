// seleccionamos el boton
const button = document.querySelector('button');

// Creamos la funcion para evento y que nos traiga el objeto o las propiedades del evento
const buttonClicked = (event) =>{
    console.log('[Boton] Todo el evento es:', event); // Trae todo el evento
    console.log('[Boton] El elemento es:',event.target); // Trae el elemento que genero el evento
    console.log('[Boton] El id es:',event.target.id); // Trael el id del elemento que genero el evento
}

// Creamos el eventListener y que haga la funcion buttonClicked
button.addEventListener('click', buttonClicked);