import createToDoElement from "./createToDoElement.js";
import themeToggler from "./themeToggler.js";
import editToDoEelement from "./editToDoElement.js";
import deleteTask from "./deleteTask.js";
import filterTasks from "./filterTasks.js";
import sortTasks from "./sortTasks.js";
const dueDate = document.querySelector("#due-date");

const today = new Date().toISOString().split("T")[0];

dueDate.min = today;

themeToggler();
editToDoEelement();
deleteTask();
filterTasks();
sortTasks();
const toDoFormData = document.querySelector("#to-do-item-form");
const toDoList = document.querySelector(".to-do-list");
// const container = document.querySelector(".container");

const toDoItemElement = document.querySelector("#to-do-item");

const storedList = JSON.parse(localStorage.getItem("stored-list")) || [];
storedList.map((item) => {
  createToDoElement(item);
});

toDoFormData.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e.target);

  const formData = new FormData(e.target);
  const formDataObj = Object.fromEntries(formData);
  if (!formDataObj["to-do-item"].trim()) {
    return;
  }

  console.log(formDataObj["to-do-item"]);
  const toDoData = {
    text: formDataObj["to-do-item"].trim(),
    dueDate: formDataObj["due-date"],
  };

  const arrayOfExistingItemsTexts = Array.from(toDoList.children).map(
    (item) => {
      return item.children[0].textContent.trim();
    }
  );
  console.log(arrayOfExistingItemsTexts);
  const checkForDuplicate = arrayOfExistingItemsTexts.filter((item) => {
    return item === toDoItemElement.value.trim();
  });

  const isDuplicate = checkForDuplicate.length === 0 ? false : true;

  if (!isDuplicate) {
    const newToDoElement = createToDoElement(toDoData);

    storedList.push(newToDoElement);

    localStorage.setItem("stored-list", JSON.stringify(storedList));
  } else {
    alert(`Task "${toDoItemElement.value}" already exists`);
  }
  // console.log(listItemsArray);
});
