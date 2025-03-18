//Seleccionamos el formulario completo
const formulario = document.getElementById('formularioPrueba');
const lista = []

//Creamos un eventListener para almacenar los datos del formulario cuando se le de submit
formulario.addEventListener('submit', (event) => {
    // el event.preventdefault permite que no se refresque la pagina
    event.preventDefault()
    
    //creamos una variable para el elemento de name del formulario
    const nombre = document.getElementById('nombre').value
    
    //hacemos lo mismo con correo
    const correo = document.getElementById('correo').value
    
    //imprimimos en consola ambos
    console.log('Nombre:',nombre)
    console.log('Correo:',correo)
    
    //lo guardamos a un array o lista
    lista.push(nombre,correo)

    //limpiamos el formulario
    //formulario.reset()

    //mostramos un mensaje de exito
    alert('Formulario enviado con exito')
    
    //imprimimos por consola la lista
    console.log (lista)
})