import createToDoElement from "./createToDoElement.js";
import themeToggler from "./themeToggler.js";
import editToDoElement from "./editToDoElement.js";
import deleteTask from "./deleteTask.js";
import filterTasks from "./filterTasks.js";
import sortTasks from "./sortTasks.js";
const dueDateInput = document.querySelector("#due-date");

const today = new Date().toISOString().split("T")[0];

dueDateInput.min = today;

themeToggler();
editToDoElement();
deleteTask();
filterTasks();
sortTasks();
const toDoForm = document.querySelector("#to-do-item-form");
const toDoListContainer = document.querySelector(".to-do-list");

const toDoItemInput = document.querySelector("#to-do-item");

const storedTasks = JSON.parse(localStorage.getItem("stored-list")) || [];
storedTasks.map((task) => {
  createToDoElement(task);
});

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formDataObj = Object.fromEntries(formData);
  if (!formDataObj["to-do-item"].trim()) {
    return;
  }

  console.log(formDataObj["to-do-item"]);
  const newTask = {
    text: formDataObj["to-do-item"].trim(),
    dueDate: formDataObj["due-date"],
  };

  const existingTaskTexts = Array.from(toDoListContainer.children).map(
    (item) => {
      return item.children[0].textContent.trim();
    }
  );
  console.log(existingTaskTexts);
  const duplicateTasks = existingTaskTexts.filter((item) => {
    return item === toDoItemInput.value.trim();
  });

  const isDuplicate = duplicateTasks.length !== 0;

  if (!isDuplicate) {
    const newToDoElement = createToDoElement(newTask);

    storedTasks.push(newToDoElement);

    localStorage.setItem("stored-list", JSON.stringify(storedTasks));
  } else {
    alert(`Task "${toDoItemInput.value}" already exists`);
  }
});
