const addTaskBTn=document.getElementById('add-task-button');

const todoBoard=document.getElementById('todo-board');
addTaskBTn.addEventListener('click', ()=>{
    const input = prompt('what is your task');
    if(!input) return;


    const taskCard=document.createElement('p');
    taskCard.classList.add('item');
    taskCard.innerText=input;
    taskCard.setAttribute('draggable', true);
    todoBoard.appendChild(taskCard);

});


const allBoard=document.querySelectorAll('.board');
const allItems=document.querySelectorAll('.item');
allItems.forEach((item) => {
    item.addEventListener('dragstart',() => {
        item.classList.add('flying');
    });
    item.addEventListener('dragend',() => {
        item.classList.remove('flying');
    });

})
allBoard.forEach((board) =>{
    
    board.addEventListener('dragover',(event) => {
        event.preventDefault(); 
         const flyingElement=document.querySelector('.flying');
         console.log(board,'kuch to gya');
         board.appendChild(flyingElement);
    });
});