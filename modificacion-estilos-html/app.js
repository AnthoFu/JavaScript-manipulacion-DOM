// # para obtener ID con querySelector
const tittle = document.querySelector('#app-tittle');
const boton1 = document.getElementById('boton-cambiar-titulo');
const menu = document.getElementsByClassName('menu-items');

// Esto permite estar a la espera del evento click del boton1
boton1.addEventListener('click', cambiarTitulo)

// Esto es una funcion que se ejecuta cuando se hace click en el boton1 y cambia el textContent
function cambiarTitulo(){
    tittle.textContent = 'Gay el que lo lea';
    tittle.style.backgroundColor = 'green'
}

// Agregar un estilo directamente al html (no recomendado)
tittle.style.backgroundColor = 'red';

// Por cada item en menu se le colocara el textDecoration en none
for (i in menu){
    menu[i].style.textDecoration = 'none', menu[i].style.color = 'black';
}

// ClassName nos ayuda a asignar una clase a un elemento
tittle.className = 'titulo';
