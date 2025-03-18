// [OPCION 1]
// (esta opcion no es recomendada por performance)

// seleccionamos cada uno de los elementos que tengan 'li' en una lista
// const listaOpciones = document.querySelectorAll('li');

// //ahora utilizaremos el método forEach para recorrer cada uno de los elementos de la lista 
// 
// listaOpciones.forEach((opcion) => {
//     //agregamos el eventListener de click a cada opcion
//     opcion.addEventListener('click',(event) =>{
//         //ahora cada que se de click a event se agregara y eliminara la clase "highlight"
//         event.target.classList.toggle('highlight');
//     });
// });

// [OPCION 2]

// Tomamos el UL (el contenedor de los LI)
const listaOpciones = document.querySelector('ul');

// y le agregamos el eventListener de click
listaOpciones.addEventListener('click', (event) =>{
    // ahora el target mas cerca a 'li' se le agregara y eliminara la clase "highlight"
    event.target.closest('li').classList.toggle('highlight');
});
