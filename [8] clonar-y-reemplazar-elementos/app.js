// .cloneNode(true) para clonar y .replaceWith(elementoQueVaAReemplazar)
// Seleccionamos el elemento con el id "contentArea"
const contentArea = document.querySelector('#contentArea');

// Seleccionamos el <p> del #contentArea
const pContentArea = contentArea.querySelector('p');

// Clonamos el elemento <p> con .cloneNode(true)
const cloneP = pContentArea.cloneNode(true);

// Agregamos el elemento clonado al #contentArea
contentArea.append(cloneP);

// Cambiamos el contenido de texto de cloneP
cloneP.textContent = 'Este es un nuevo texto'

//Ahora con el replaceWith()
//Seleccionamos la lista "listArea"
const lista = document.querySelector('#listArea')

//Seleccionamos el item a reemplazar, de la lista tomaremos el 3 item.
const itemAReemplazar = listArea.children[2];

// Reemplazamos el itemAReemplazar con cloneP
itemAReemplazar.replaceWith(cloneP);