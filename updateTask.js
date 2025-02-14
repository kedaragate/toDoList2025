/**
 * Updates a task in the local storage and the DOM with new values provided by the user.
 *
 * This function attaches an event listener to the edit form's submit event, retrieves the
 * updated task information from the form fields, and updates the corresponding task in the
 * local storage and the DOM if the task exists.
 *
 * @param {Object} taskToBeUpdated - The task object that needs to be updated, containing its unique identifier.
 */

function getUpdatedTaskData(form) {
  const updatedFormData = new FormData(form);
  return Object.fromEntries(updatedFormData);
}

function findTaskIndex(storedTasks, taskId) {
  return storedTasks.findIndex((task) => task.id === taskId);
}

function updateStoredTask(storedTasks, taskIndex, updatedTask) {
  storedTasks[taskIndex].text = updatedTask["edited-text"];
  storedTasks[taskIndex].dueDate = updatedTask["edited-date"];
  localStorage.setItem("stored-list", JSON.stringify(storedTasks));
}

function updateDOMTask(taskId, updatedTask) {
  const taskElement = document.querySelector(`#${taskId}`);
  // Update the DOM element with new task data if needed
  console.log(taskElement);
}

export default function updateTask(taskToBeUpdated) {
  document.querySelector("#edit-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const updatedTask = getUpdatedTaskData(e.target);
    const storedTasks = JSON.parse(localStorage.getItem("stored-list"));
    const taskIndex = findTaskIndex(storedTasks, taskToBeUpdated.id);

    if (taskIndex !== -1) {
      updateStoredTask(storedTasks, taskIndex, updatedTask);
      updateDOMTask(taskToBeUpdated.id, updatedTask);
    }
  });
}
