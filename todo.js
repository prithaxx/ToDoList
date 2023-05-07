const todoList = [{name: '' , dueDate: ''}];

//renderToDoList();

function renderToDoList(){
  let todoListHTML = '';

  for(let i=0; i<todoList.length; i++){
    const name = todoList[i].name;
    const dueDate = todoList[i].dueDate;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class= "delete-button"
      onclick = "todoList.splice(${i},1); renderToDoList();"
      >Delete</button>
    `;

    todoListHTML += html;
  }

  document.querySelector('.js-show-tasks').innerHTML = todoListHTML;
}

function addToDo(){
  const nameElement = document.querySelector('.js-input');
  const name = nameElement.value;

  const dateElement = document.querySelector('.js-date');
  const dueDate = dateElement.value;

  checkAdding(name, dueDate);

  todoList.push({name, dueDate});
  nameElement.value = '';
  dateElement.value = '';

  renderToDoList();
  
}

function checkAdding(name, date){
  if (name === '' || date === ''){
    document.querySelector('#button').disabled = true;
  }
}
