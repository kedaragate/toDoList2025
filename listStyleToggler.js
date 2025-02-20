const unorderedList = document.querySelector(".to-do-list");
const container = document.querySelector(".tasks-container");
const listStyleIcon = document.querySelectorAll(".list-style-icon");

export default function listStyleToggler() {
  listStyleIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
      if (unorderedList.classList.toggle("grid")) {
        if (unorderedList.classList.contains("grid")) {
          container.style.backgroundColor = "RGB(0,0,0)";
          container.style.padding = "0";
          console.log("grid");
        } else {
          container.style.backgroundColor = "RGB(20,20,20)";
        }
        // const listItems = document.querySelector(".grid").querySelectorAll("li");
        // listItems.forEach((item) => {
        //   item.style.backgroundColor = "RGB(20,20,20)";
        // });
      }
    });
  });
}
