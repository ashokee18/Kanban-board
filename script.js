const addTaskBTn=document.getElementById('add-task-button');

const todoBoard=document.getElementById('todo-board');

 function attactTagretEvent(target){
    target.addEventListener('dragstart',() => {
        target.classList.add('flying');
    });
      target.addEventListener('dragend',() => {
        target.classList.remove('flying');
    });
 }

addTaskBTn.addEventListener('click', ()=>{
    const input = prompt('what is your task');
    if(!input) return;

   const itemCard=document.createElement('div');
   itemCard.classList.add('item-card');

    const taskCard=document.createElement('p');
    taskCard.classList.add('item');
    taskCard.innerText=input;
   
    const editButton=document.createElement('button');
    editButton.classList.add('edit-task-button');
    editButton.innerText="edit";
    
     
    itemCard.setAttribute('draggable', true);
   attactTagretEvent(itemCard);
     
   
    itemCard.appendChild(taskCard);
    itemCard.appendChild(editButton);
    todoBoard.appendChild(itemCard);


});


const allBoard=document.querySelectorAll('.board');
const allItemscards=document.querySelectorAll('.item-card');

allItemscards.forEach(attactTagretEvent);
allBoard.forEach((board) =>{
    
    board.addEventListener('dragover',() => {
       // event.preventDefault(); 
        const flyingElement=document.querySelector('.flying');
        console.log(board,'kuch to gya');

        board.appendChild(flyingElement);
          
    });
});