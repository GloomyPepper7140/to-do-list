const toDoField = document.querySelector('.to-do-field')
const toDoSend = document.querySelector('.to-do-send')
const toDoList = document.querySelector('.to-do-list')


function criaLi(){
    const li = document.createElement('li');
    return li;
};

function criaButtonClear(){
    const buttonClear = document.createElement('button');
    buttonClear.setAttribute ('class', 'button-clear fa fa-trash');
    return buttonClear;
};

function criaTarefa(li, buttonClear){
    li.innerText = toDoField.value;
    li.appendChild(buttonClear);
    toDoList.appendChild(li);
};

toDoSend.addEventListener('click',function(e){
    const li = criaLi();
    const buttonClear = criaButtonClear();
    const tarefa = criaTarefa(li, buttonClear);    
});

toDoField.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        const li = criaLi();
        const buttonClear = criaButtonClear();
        const tarefa = criaTarefa(li, buttonClear);  0
    }

});

addEventListener('click',function(e){
    const el = e.target;

    if(el.classList.contains ('button-clear')){
        el.parentElement.remove();
    }
});