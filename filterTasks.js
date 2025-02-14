function filterTaskList(taskListArray, searchText) {
  return taskListArray.filter((item) => {
    const text = item.querySelector(".item-text").textContent.toLowerCase();
    return text.includes(searchText);
  });
}

function handleSearchInput(e) {
  const taskListItems = document.querySelectorAll(".list-item");
  const taskListArray = Array.from(taskListItems);
  const searchText = e.target.value.toLowerCase();
  const filteredTasks = filterTaskList(taskListArray, searchText);

  taskListArray.forEach((item) => {
    item.style.display = filteredTasks.includes(item) ? "" : "none";
  });
}

export default function filterTasks() {
  const searchInput = document.querySelector("#search-task-element");
  searchInput.addEventListener("keyup", handleSearchInput);
}
