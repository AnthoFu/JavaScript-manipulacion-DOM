
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

    if (task){
        taskList.append(createTask(task));
        taskInput.value = '';
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