// Tomamos el primer elemento que sea "li"
const primerElemento = document.querySelector('li');

// elegimos el elemento y lo borramos
primerElemento.remove();

// Ahora vamos a borrar el segundo elemento del contenedor de la lista (en este caso el "ul")
const contenedorElementos = document.querySelector('ul')

// Este es el ejemplo para eliminar al primer hijo
contenedorElementos.removeChild(contenedorElementos.firstElementChild)


// Este es el ejemplo para eliminar elementos de una lista con .children[n]
contenedorElementos.removeChild(contenedorElementos.children[1]);