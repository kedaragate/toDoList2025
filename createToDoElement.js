import createSpanElement from "./createSpanElement.js";
import calculateTimeRemaining from "./calculateTimeRemaining.js";

const toDoListContainer = document.querySelector(".to-do-list");
let counter = 1;

function createTaskElements(text, dueDate) {
  const dueDateObj = new Date(dueDate);
  return {
    text: createSpanElement(text, "item-text"),
    date: createSpanElement(dueDate, "due-date"),
    timeRemaining: createSpanElement(calculateTimeRemaining(dueDateObj)),
  };
}

function createTaskButtons() {
  const editButton = document.createElement("i");
  editButton.classList.add("edit-item-btn", "fa-solid", "fa-pen-to-square");

  const deleteButton = document.createElement("i");
  deleteButton.classList.add("delete-task-btn", "fa-solid", "fa-trash-can");

  return { editButton, deleteButton };
}

export default function createToDoElement({ text, dueDate }) {
  try {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.id = `todo-${counter++}`;

    const elements = createTaskElements(text, dueDate);
    Object.values(elements).forEach((ele) => listItem.appendChild(ele));

    const { editButton, deleteButton } = createTaskButtons();
    listItem.appendChild(editButton);
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
