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
