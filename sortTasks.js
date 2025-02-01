export default function sortTasks() {
  const sortEle = document.querySelectorAll(".sort-task-icon");
  sortEle.forEach((sortIcon) => {
    sortIcon.addEventListener("click", (e) => {
      const toDoList = document.querySelectorAll(".list-item");
      const toDoListArray = Array.from(toDoList);
      console.log(toDoListArray[4]);
      // console.log(toDoList);
      toDoListArray.sort((a, b) => {
        return a.children[0].textContent
          .trim()
          .localeCompare(b.children[0].textContent.trim());
      });
      // toDoListArray.forEach((element) => {
      //   console.log(element.children);
      // });
      console.log(toDoListArray[4]);
    });
  });
}
