import createEditForm from "./createEditForm.js";
import updateTask from "./updateTask.js";
const toDoList = document.querySelector(".to-do-list");

export default function editToDoElement() {
  toDoList.addEventListener("click", (e) => {
    if (!e.target.classList.contains("edit-item-btn")) {
      return;
    }
    const storedList = JSON.parse(localStorage.getItem("stored-list"));
    const itemTobeEdited = storedList.find((item) => {
      return item.id === e.target.parentElement.id;
    });
    console.log(itemTobeEdited);
    const text = itemTobeEdited.text;
    const date = itemTobeEdited.dueDate;
    createEditForm(text, date);
    updateTask(itemTobeEdited);
  });
}
