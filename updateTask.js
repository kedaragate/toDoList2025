/**
 * Updates a task in the local storage and the DOM with new values provided by the user.
 *
 * This function attaches an event listener to the edit form's submit event, retrieves the
 * updated task information from the form fields, and updates the corresponding task in the
 * local storage and the DOM if the task exists.
 *
 * @param {Object} taskToBeUpdated - The task object that needs to be updated, containing its unique identifier.
 */

export default function updateTask(taskToBeUpdated) {
  document.querySelector("#edit-form").addEventListener("submit", (e) => {
    const updatedFormData = new FormData(e.target);
    const updatedTask = Object.fromEntries(updatedFormData);
    console.log(updatedTask);
    const storedTasks = JSON.parse(localStorage.getItem("stored-list"));
    const taskIndex = storedTasks.findIndex((task) => {
      return task.id === taskToBeUpdated.id;
    });
    console.log(taskIndex);
    if (taskIndex !== -1) {
      storedTasks[taskIndex].text = updatedTask["edited-text"];
      storedTasks[taskIndex].dueDate = updatedTask["edited-date"];
      localStorage.setItem("stored-list", JSON.stringify(storedTasks));
      const taskElement = document.querySelector(`#${taskToBeUpdated.id}`);
      console.log(taskElement);
    }
  });
}
