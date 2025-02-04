export default function sortTasks() {
  const sortIconforTaskName = document.querySelector(
    ".sort-task-icon-for-task-name"
  );
  // console.log(sortIconforTaskName);
  const sortIconforDueDate = document.querySelector(
    ".sort-task-icon-for-due-date"
  );
  const sortEle = document.querySelectorAll(".sort-task-icon");
  sortEle.forEach((sortIcon) => {
    sortIcon.addEventListener("click", (e) => {
      const toDolistContainer = document.querySelector(".to-do-list");
      const toDoListHeadingsContainer = document.querySelector(
        ".task-list-headings-container"
      );

      const toDoList = document.querySelectorAll(".list-item");
      const toDoListArray = Array.from(toDoList);

      // console.log(toDoList);
      const isSorted = toDolistContainer.dataset.sorted === "true";
      toDolistContainer.dataset.sorted = !isSorted;
      if (isSorted) {
        e.target.classList.remove("fa-sort-up");
        e.target.classList.add("fa-sort-down");
      } else {
        e.target.classList.remove("fa-sort-down");
        e.target.classList.add("fa-sort-up");
      }

      const sortedToDoList = toDoListArray.sort((a, b) => {
        const text1 =
          e.target === sortIconforTaskName
            ? a.children[0].textContent.trim()
            : e.target === sortIconforDueDate
            ? Date.parse(a.children[1].textContent.trim())
            : null;
        const text2 =
          e.target === sortIconforTaskName
            ? b.children[0].textContent.trim()
            : e.target === sortIconforDueDate
            ? Date.parse(b.children[1].textContent.trim())
            : null;

        const comparison =
          typeof (text1 && text2) === "string"
            ? text1.localeCompare(text2)
            : text1 - text2;
        return isSorted ? -comparison : comparison;
      });

      toDoList.forEach((ele) => {
        ele.remove();
      });

      sortedToDoList.forEach((item) => toDolistContainer.appendChild(item));
    });
  });
}
