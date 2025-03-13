// Crear un nuevo elemento <p> y agregarle texto
const newPElement = document.createElement(`p`);
newPElement.textContent = `Fuí creado con Create Element`;

// Seleccionamos 'contentArea' y agregamos el nuevo <p> al final
const contentArea = document.getElementById(`contentArea`);
contentArea.append(newPElement);  // Se añade como último hijo

// Seleccionamos 'listArea' para trabajar con la lista
const listArea = document.getElementById(`listArea`);

// 'prepend' agrega el nuevo <li> al principio de la lista
const newItem = document.createElement(`li`);
newItem.textContent = `Item 5 - prepend`;
listArea.prepend(newItem);  // Se añade como primer hijo

// 'before' inserta el nuevo <li> antes de 'listArea' (fuera de la lista)
const newItem2 = document.createElement(`li`);
newItem2.textContent = `Item 6 - before`;
listArea.before(newItem2);  // Se añade justo antes de la lista

// 'after' inserta el nuevo <li> después de 'listArea' (fuera de la lista)
const newItem3 = document.createElement(`li`);
newItem3.textContent = `Item 7 - after`;
listArea.after(newItem3);  // Se añade justo después de la lista