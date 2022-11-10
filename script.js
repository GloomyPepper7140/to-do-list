const toDoField = document.querySelector('.to-do-field')
const toDoSend = document.querySelector('.to-do-send')
const toDoList = document.querySelector('.to-do-list')

function criaLi(){
    document.createElement('li');
    return li;
}

function criaButtonClear(){
    const buttonClear = document.createElement('button');
    buttonClear.setAttribute ('class', 'button-clear');
    buttonClear.innerText = 'Deletar'
    return buttonClear;
}

toDoSend.addEventListener('click',function(e){
    const li = criaLi;
    const buttonClear = criaButtonClear();
    li.innerText = toDoField.value;
    li.appendChild(buttonClear);
    toDoList.appendChild(li);
})

addEventListener('click',function(e){
    const el = e.target;

    if(el.classList.contains ('button-clear')){
        el.parentElement.remove()
    }
})