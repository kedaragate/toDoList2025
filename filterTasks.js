export default function filterTasks() {
  const searchInput = document.querySelector("#search-task-element");
  searchInput.addEventListener("keyup", (e) => {
    const taskListItems = document.querySelectorAll(".list-item");
    const taskListArray = Array.from(taskListItems);
    const searchText = e.target.value.toLowerCase();
    const filteredTasks = taskListArray.filter((item) => {
      const text = item.querySelector(".item-text").textContent.toLowerCase();
      return text.includes(searchText);
    });
    taskListArray.forEach((item) => {
      item.style.display = filteredTasks.includes(item) ? "" : "none";
    });
  });
}
