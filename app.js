// selectors
const addButton = document.querySelector(".todo__button");
const inputElement = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo-list");
const filterOptions = document.querySelector(".filter-todo");

//Event Listeners
addButton.addEventListener("click", addTodo);
todoList.addEventListener("click", removeCheeck);
filterOptions.addEventListener("click", filterTodo);
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
  inputElement.focus();
}

function removeCheeck(e) {
  const item = e.target;
  //delete
  if (item.classList[0] === "trash__button") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //check
  if (item.classList[0] === "complete__button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;

  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (todo.classList.contains("completed")) {
          todo.style.display = "none";
        } else {
          todo.style.display = "flex";
        }
        break;
    }
  });
}
