//seleccionamos el elemento que contiene el texto
const container = document.querySelector('.container');

// seleccionamos el boton
const button = document.querySelector('button');

//Agregamos el evento mouseover al boton para que se vuelva azul al entrar el mouse
button.addEventListener('mouseover', () => {
    container.style.backgroundColor = 'blue'
})

//Agregamos el evento mouseout al boton para que se vuelva rojo al salir el mouse
button.addEventListener('mouseout', () => {
    container.style.backgroundColor = 'red'
})

//Agregamos el evento click al boton que genere una alerta
// button.addEventListener('click', () => {
//     alert('Has clickado en el boton')
// })

//Volvemos el alert una funcion para poder eliminarlo despues
const buttonClickCallback = () => {
    alert('Has clickado en el boton')
}

//Agregamos el evento click al boton
button.addEventListener("click", buttonClickCallback);

//Eliminar el evento de click despues de 2 segundo (2000 ms)
setTimeout(() => {
    button.removeEventListener ("click", buttonClickCallback)
},2000);