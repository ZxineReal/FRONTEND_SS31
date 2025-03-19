let todoList = [
  {
    id: 1,
    task: "Hit the gym",
    completed: false,
  },
  {
    id: 2,
    task: "Pay bills",
    completed: true,
  },
  {
    id: 3,
    task: "Meet george",
    completed: false,
  },
  {
    id: 4,
    task: "Buy eggs",
    completed: false,
  },
  {
    id: 5,
    task: "Read a book",
    completed: false,
  },
  {
    id: 6,
    task: "Organize office",
    completed: false,
  },
];
const listElement = document.querySelector("#myUL");

function renderList() {
  listElement.innerHTML = "";
  todoList.forEach((job) => {
    let li = document.createElement("li");
    li.textContent = job.task;
    listElement.appendChild(li);
  });
}

renderList();
