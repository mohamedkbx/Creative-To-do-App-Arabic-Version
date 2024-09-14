// selectors
const addButton = document.querySelector(".todo__button");
const inputElement = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo-list");

//Event Listeners
addButton.addEventListener("click", addTodo);

//functions

function addTodo(event) {
  event.preventDefault();
  // todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  if (!inputElement.value) return;
  newTodo.innerText = inputElement.value;
  newTodo.classList.add("todo__item");

  todoDiv.appendChild(newTodo);
  //check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class ='fas fa-check'></i>`;
  completedButton.classList.add("complete__button");

  todoDiv.appendChild(completedButton);
  //trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class ='fas fa-trash'></i>`;
  trashButton.classList.add("trash__button");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  //clear input
  inputElement.value = "";
}
