
// tomamos el formulario
const taskForm = document.getElementById('task-form')

// tomamos la lista
const taskList = document.getElementById('task-list')

// agregamos el eventListener de Submit del formulario
taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitamos que se borren los datos cuando se haga submit
    const taskInput = document.getElementById('task-input'); //tomamos el input del formulario
    const task = taskInput.value; // Tomamos el valor que se ha ingresado en el input
    console.log ('[Tarea ingresada:]',task); //Mandamos en consola la tarea colocado en el input

    if (task){ //si hay algo en el input
        taskList.append(createTask(task)); // creamos la tarea y la agregamos a la lista
        taskInput.value = ''; // y en el input le borramos lo colocado
    }
})

//Creamos la funcion para añadir la tarea a la lista de tareas
function createTask(task){
    const li = document.createElement('li'); //Le asignamos a li el elemento html li
    li.textContent = task; //Le asignamos el texto de la tarea a li
    li.append(createButtons('❌', 'delete-btn'), createButtons('✏️', 'edit-btn')) //Con la funcion 'createButtons' les damos los valores 1-(X y delete-btn) y 2-(✏️ y edit-btn)
    return li; // Retornamos el li
}

//Creamos la funcion para crear los botones (los span que estan en el html)
function createButtons(text, className){ 
    const btn = document.createElement('span'); //Le asignamos a btn la creacion de un span
    btn.textContent= text; // Le asignamos el texto interior del span
    btn.className=className; // Le asignamos la clase del span
    return btn; //Retornamos el span
}

// [Clase 2 del proyecto Task Manager]

// Ahora comenzaremos con la funciones de eliminar y editar las tareas
// Primero creamos el eventListener para el boton de eliminar
taskList.addEventListener('click', (event) => {
    console.log('[taskList] Click en:',event.target) // Esto permite saber a que le estamos dando click
    if (event.target.className === 'delete-btn'){
        deleteTask(event.target.parentElement); // Si el target tiene la clase delete-btn, eliminamos la tarea 
    } else if (event.target.className === 'edit-btn'){
        editTask(event.target.parentElement); // Si el target tiene la clase edit-btn, editamos la tarea
    }
})


// Funcion para borrar elementos
function deleteTask(taskItem){
    if(confirm('¿Estas seguro/a de borrar esta tarea?')){
        taskItem.remove();
    }
}

// Funcion para editar elementos
function editTask(taskItem){
    const newTask = prompt('Edita la tarea:', taskItem.firstChild.textContent); // Pedimos al usuario que ingrese la nueva tarea
    if(newTask !== null) { // Si el prompt no tiene el valor nulo
        taskItem.firstChild.textContent = newTask; // Cambia el textContent de taskItem al puesto en el prompt
    }
}