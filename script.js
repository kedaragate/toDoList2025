import createToDoElement from "./createToDoElement.js";
import themeToggler from "./themeToggler.js";
import editToDoElement from "./editToDoElement.js";
import deleteTask from "./deleteTask.js";
import filterTasks from "./filterTasks.js";
import sortTasks from "./sortTasks.js";

function initializeDueDateInput() {
  const dueDateInput = document.querySelector("#due-date");
  const today = new Date().toISOString().split("T")[0];
  dueDateInput.min = today;
}

function loadStoredTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("stored-list")) || [];
  storedTasks.map((task) => {
    createToDoElement(task);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formDataObj = Object.fromEntries(formData);
  if (!formDataObj["to-do-item"].trim()) {
    return;
  }

  const newTask = {
    text: formDataObj["to-do-item"].trim(),
    dueDate: formDataObj["due-date"],
  };

  const toDoListContainer = document.querySelector(".to-do-list");
  const existingTaskTexts = Array.from(toDoListContainer.children).map((item) =>
    item.children[0].textContent.trim()
  );

  const isDuplicate = existingTaskTexts.includes(newTask.text);

  if (!isDuplicate) {
    const newToDoElement = createToDoElement(newTask);
    const storedTasks = JSON.parse(localStorage.getItem("stored-list")) || [];
    storedTasks.push(newToDoElement);
    localStorage.setItem("stored-list", JSON.stringify(storedTasks));
  } else {
    alert(`Task "${newTask.text}" already exists`);
  }
}

function initializeForm() {
  const toDoForm = document.querySelector("#to-do-item-form");
  toDoForm.addEventListener("submit", handleFormSubmit);
}

function initializeApp() {
  initializeDueDateInput();
  themeToggler();
  editToDoElement();
  deleteTask();
  filterTasks();
  sortTasks();
  loadStoredTasks();
  initializeForm();
}

initializeApp();
