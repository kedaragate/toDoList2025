import createEditForm from "./createEditForm.js";
import updateTask from "./updateTask.js";
const toDoListContainer = document.querySelector(".to-do-list");

export default function editToDoElement() {
  toDoListContainer.addEventListener("click", (e) => {
    if (!e.target.classList.contains("edit-item-btn")) {
      return;
    }
    const storedTasks = JSON.parse(localStorage.getItem("stored-list"));
    const taskToBeEdited = storedTasks.find((task) => {
      console.log(task.id, e.target.parentElement.id);
      return task.id === e.target.parentElement.id;
    });
    console.log(taskToBeEdited);
    const text = taskToBeEdited.text;
    const date = taskToBeEdited.dueDate;
    createEditForm(text, date);
    updateTask(taskToBeEdited);
  });
}
