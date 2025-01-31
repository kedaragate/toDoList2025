import createSpanElement from "./createSpanElement.js";
import calculateTimeRemaining from "./calculateTimeRemaining.js";
const toDoList = document.querySelector(".to-do-list");
// const headingListItem = document.createElement("li");
// const listHeading1 = document.createElement("h3");
// const listHeading2 = document.createElement("h3");
// const listHeading3 = document.createElement("h3");
// listHeading1.textContent = "Task";
// listHeading2.textContent = "Due Date";
// listHeading3.textContent = "Remaining Time";
// listHeading1.id = "task-name-heading";
// listHeading2.id = "due-date-heading";
// listHeading3.id = "remaining-time-heading";
// headingListItem.appendChild(listHeading1);
// headingListItem.appendChild(listHeading2);
// headingListItem.appendChild(listHeading3);
// toDoList.appendChild(headingListItem);
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
    const editItemBtn = document.createElement("button");
    editItemBtn.classList.add("edit-item-btn");
    editItemBtn.textContent = "Edit";
    listItem.appendChild(editItemBtn);
    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.classList.add("delete-task-btn");
    deleteTaskBtn.textContent = "Delete";
    listItem.appendChild(deleteTaskBtn);
    toDoList.appendChild(listItem);
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
