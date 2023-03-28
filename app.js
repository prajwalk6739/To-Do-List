const form = document.querySelector('form');
const input = document.querySelector('#todo-input');
const select = document.querySelector('#priority-select');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const newTodo = document.createElement('li');
  const todoText = document.createTextNode(input.value);
  newTodo.appendChild(todoText);
  newTodo.classList.add(select.value);
  todoList.appendChild(newTodo);
  input.value = '';
});

todoList.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
});
