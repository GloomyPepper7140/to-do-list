//DOM, JAVASCRIPT... (Modelo de Documento por Objetos).

const toDoField = document. querySelector('.to-do-field')
const toDoSend = document. querySelector ('.to-do-send')
const toDoList = document. querySelector ('.to-do-list')

toDoSend.addEventListener('click', function(e){ 
    const li = document.createElement('li');
    const buttonClear = document.createElement('button');
    buttonClear.setAttribute('class', 'buttonclear');
    buttonClear.innerText = 'deletar';
    li.innerText = toDoField.value;
    li.appendChild(buttonClear);
    toDoList.appendChild(li);
})

addEventListener('click',function(e){
    const el = e.target;

    if(el.classList.contains('button-clear')){
        el.parentElement.remove()
    }
}
