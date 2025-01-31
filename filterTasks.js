export default function filterTask() {
  const searchEle = document.querySelector("#search-task-element");
  searchEle.addEventListener("keyup", (e) => {
    const toDoList = document.querySelectorAll(".list-item");
    const toDoListArray = Array.from(toDoList);
    const searchText = e.target.value.toLowerCase();
    const filteredList = toDoListArray.filter((item) => {
      const text = item.querySelector(".item-text").textContent.toLowerCase();
      return text.includes(searchText);
    });
    toDoListArray.forEach((element) => {
      element.style.display = filteredList.includes(element) ? "" : "none";
    });
  });
}
