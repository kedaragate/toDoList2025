function sortTaskList(
  taskListArray,
  isSorted,
  sortIconForTaskName,
  sortIconForDueDate,
  e
) {
  const sortedTaskList = taskListArray.sort((a, b) => {
    const valueA =
      e.target === sortIconForTaskName
        ? a.children[0].textContent.trim()
        : e.target === sortIconForDueDate
        ? Date.parse(a.children[1].textContent.trim())
        : null;
    const valueB =
      e.target === sortIconForTaskName
        ? b.children[0].textContent.trim()
        : e.target === sortIconForDueDate
        ? Date.parse(b.children[1].textContent.trim())
        : null;

    const comparison =
      typeof (valueA && valueB) === "string"
        ? valueA.localeCompare(valueB)
        : valueA - valueB;
    return isSorted ? -comparison : comparison;
  });

  return sortedTaskList;
}

function updateSortIcon(e, isSorted) {
  if (isSorted) {
    e.target.classList.remove("fa-sort-up");
    e.target.classList.add("fa-sort-down");
  } else {
    e.target.classList.remove("fa-sort-down");
    e.target.classList.add("fa-sort-up");
  }
}

function handleSortClick(e, sortIconForTaskName, sortIconForDueDate) {
  const taskListContainer = document.querySelector(".to-do-list");
  const taskListItems = document.querySelectorAll(".list-item");
  const taskListArray = Array.from(taskListItems);

  const isSorted = taskListContainer.dataset.sorted === "true";
  taskListContainer.dataset.sorted = !isSorted;

  updateSortIcon(e, isSorted);

  const sortedTaskList = sortTaskList(
    taskListArray,
    isSorted,
    sortIconForTaskName,
    sortIconForDueDate,
    e
  );

  taskListItems.forEach((item) => {
    item.remove();
  });

  sortedTaskList.forEach((item) => taskListContainer.appendChild(item));
}

export default function sortTasks() {
  const sortIconForTaskName = document.querySelector(
    ".sort-task-icon-for-task-name"
  );
  const sortIconForDueDate = document.querySelector(
    ".sort-task-icon-for-due-date"
  );
  const sortIcons = document.querySelectorAll(".sort-task-icon");

  sortIcons.forEach((sortIcon) => {
    sortIcon.addEventListener("click", (e) =>
      handleSortClick(e, sortIconForTaskName, sortIconForDueDate)
    );
  });
}
