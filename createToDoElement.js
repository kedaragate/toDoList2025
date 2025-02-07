import createSpanElement from "./createSpanElement.js";
import calculateTimeRemaining from "./calculateTimeRemaining.js";
const toDoListContainer = document.querySelector(".to-do-list");
let counter = 1;
export default function createToDoElement({ text, dueDate }) {
  try {
    const listItem = document.createElement("li");
    const dueDateObj = new Date(dueDate);

    const elements = {
      text: createSpanElement(text, "item-text"),
      date: createSpanElement(dueDate, "due-date"),
      timeRemaining: createSpanElement(calculateTimeRemaining(dueDateObj)),
    };
    listItem.classList.add("list-item");
    listItem.id = `todo-${counter++}`;

    Object.values(elements).forEach((ele) => {
      listItem.appendChild(ele);
    });
    const editButton = document.createElement("i");
    editButton.classList.add("edit-item-btn");
    editButton.classList.add("fa-solid");
    editButton.classList.add("fa-pen-to-square");
    listItem.appendChild(editButton);
    const deleteButton = document.createElement("i");
    deleteButton.classList.add("delete-task-btn");
    deleteButton.classList.add("fa-solid");
    deleteButton.classList.add("fa-trash-can");

    listItem.appendChild(deleteButton);
    toDoListContainer.appendChild(listItem);
    return {
      id: listItem.id,
      text: text,
      dueDate: dueDate,
      timeRemaining: elements.timeRemaining.textContent,
      class: listItem.className,
    };
  } catch (err) {
    console.error("Error creating todo element", err);
    return null;
  }
}
