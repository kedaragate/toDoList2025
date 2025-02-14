import createEditForm from "./createEditForm.js";
import updateTask from "./updateTask.js";

function findTaskToBeEdited(storedTasks, targetId) {
  return storedTasks.find((task) => task.id === targetId);
}

function handleEditClick(e) {
  if (!e.target.classList.contains("edit-item-btn")) {
    return;
  }

  const storedTasks = JSON.parse(localStorage.getItem("stored-list"));
  const taskToBeEdited = findTaskToBeEdited(
    storedTasks,
    e.target.parentElement.id
  );

  const text = taskToBeEdited.text;
  const date = taskToBeEdited.dueDate;

  createEditForm(text, date);
  updateTask(taskToBeEdited);
}

export default function editToDoElement() {
  const toDoListContainer = document.querySelector(".to-do-list");
  toDoListContainer.addEventListener("click", handleEditClick);
}
