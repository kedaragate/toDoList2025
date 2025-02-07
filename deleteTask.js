export default function deleteTask() {
  document.querySelector(".to-do-list").addEventListener("click", (e) => {
    if (!e.target.classList.contains("delete-task-btn")) {
      return;
    }
    const storedTasks = JSON.parse(localStorage.getItem("stored-list"));

    const taskIndex = storedTasks.findIndex((task) => {
      return task.id === e.target.parentElement.id;
    });
    if (taskIndex !== -1) {
      storedTasks.splice(taskIndex, 1);
      e.target.parentElement.remove();
      localStorage.setItem("stored-list", JSON.stringify(storedTasks));
    }
  });
}
