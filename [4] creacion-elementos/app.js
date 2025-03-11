// Obtenemos el elemento del DOM con el id "contentArea" y lo almacenamos en la variable 'contentArea'
const contentArea = document.getElementById("contentArea");

// Usamos 'innerHTML' para reemplazar todo el contenido del elemento 'contentArea' con un nuevo párrafo
contentArea.innerHTML = `<p>este es un nuevo parrafo realizado desde js - innerHTML</p>`;

// Insertamos un nuevo párrafo al final del contenido actual de 'contentArea' usando 'insertAdjacentHTML' con "beforeend"
// "beforeend" inserta el contenido justo antes del cierre del elemento, es decir, al final del elemento
contentArea.insertAdjacentHTML("beforeend", `<p>este es un nuevo parrafo realizado desde js - insertAdjacentHTML - beforeend</p>`);

// "beforebegin" inserta el contenido antes de que comience el elemento, es decir, fuera del elemento y justo antes de él (miralo el html desde el navegador, estara fuera de section)
contentArea.insertAdjacentHTML("beforebegin", `<p>este es un nuevo parrafo realizado desde js - insertAdjacentHTML - beforebegin</p>`);

// "afterend" inserta el contenido después del cierre del elemento, es decir, fuera del elemento y justo después de él
contentArea.insertAdjacentHTML("afterend", `<p>este es un nuevo parrafo realizado desde js - insertAdjacentHTML - afterend</p>`);


// "afterbegin" inserta el contenido justo después de que comience el elemento, es decir, al inicio del elemento
contentArea.insertAdjacentHTML("afterbegin", `<p>este es un nuevo parrafo realizado desde js - insertAdjacentHTML - afterbegin</p>`);