export default function deleteTask() {
  document.querySelector(".to-do-list").addEventListener("click", (e) => {
    if (!e.target.classList.contains("delete-task-btn")) {
      return;
    }
    const storedList = JSON.parse(localStorage.getItem("stored-list"));

    const itemTobeDeleted = storedList.findIndex((item) => {
      return item.id === e.target.parentElement.id;
    });
    if (itemTobeDeleted !== -1) {
      storedList.splice(itemTobeDeleted, 1);
      e.target.parentElement.remove();
      localStorage.setItem("stored-list", JSON.stringify(storedList));
    }
    // createEditForm(text, date);
  });
}
