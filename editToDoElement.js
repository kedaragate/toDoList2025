import createEditForm from "./createEditForm.js";
import updateTask from "./updateTask.js";

// Get the container element for the to-do list
const toDoListContainer = document.querySelector(".to-do-list");

export default function editToDoElement() {
  // Add an event listener to the to-do list container
  toDoListContainer.addEventListener("click", (e) => {
    // Check if the clicked element has the class 'edit-item-btn'
    if (!e.target.classList.contains("edit-item-btn")) {
      return;
    }

    // Retrieve the stored tasks from localStorage
    const storedTasks = JSON.parse(localStorage.getItem("stored-list"));

    // Find the task to be edited based on the clicked element's parent ID
    const taskToBeEdited = storedTasks.find((task) => {
      console.log(task.id, e.target.parentElement.id);
      return task.id === e.target.parentElement.id;
    });

    // Log the task to be edited
    console.log(taskToBeEdited);

    // Extract the text and due date from the task to be edited
    const text = taskToBeEdited.text;
    const date = taskToBeEdited.dueDate;

    // Create the edit form with the prefilled text and date
    createEditForm(text, date);

    // Update the task with the new values
    updateTask(taskToBeEdited);
  });
}
