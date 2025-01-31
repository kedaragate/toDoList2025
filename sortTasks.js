export default function sortTasks() {
  const sortEle = document.querySelectorAll(".sort-task-icon");
  sortEle.forEach((sortIcon) => {
    sortIcon.addEventListener("click", (e) => {
      const toDoList = document.querySelectorAll(".list-item");
      const toDoListArray = Array.from(toDoList);
      const sortText = e.target.value.toLowerCase();
      console.log(toDoListArray);

      toDoListArray.forEach((element) => {
        element.style.display = filteredList.includes(element) ? "" : "none";
      });
    });
  });
}
