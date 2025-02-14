/*************  ✨ Codeium Command ⭐  *************/
/**
 * Attaches a click event listener to the to-do list container.
 * When a delete button is clicked, the corresponding task element
 * is removed from the DOM and the task is deleted from the stored
 * tasks in localStorage.
 */

/******  78cdce68-60b4-49ba-8600-74eeb5c36d37  *******/

function findTaskIndex(storedTasks, targetId) {
  return storedTasks.findIndex((task) => task.id === targetId);
}

function handleDeleteClick(e) {
  if (!e.target.classList.contains("delete-task-btn")) {
    return;
  }

  const storedTasks = JSON.parse(localStorage.getItem("stored-list"));
  const taskIndex = findTaskIndex(storedTasks, e.target.parentElement.id);

  if (taskIndex !== -1) {
    storedTasks.splice(taskIndex, 1);
    e.target.parentElement.remove();
    localStorage.setItem("stored-list", JSON.stringify(storedTasks));
  }
}

export default function deleteTask() {
  const toDoListContainer = document.querySelector(".to-do-list");
  toDoListContainer.addEventListener("click", handleDeleteClick);
}
