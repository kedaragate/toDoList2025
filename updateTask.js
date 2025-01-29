export default function updateTask(itemTobeUpdated) {
  document.querySelector("#edit-form").addEventListener("submit", (e) => {
    const updatedItemData = new FormData(e.target);
    const updatedItemObj = Object.fromEntries(updatedItemData);
    console.log(updatedItemObj);
    const storedList = JSON.parse(localStorage.getItem("stored-list"));
    const indexOfItemTobeUpdated = storedList.findIndex((item) => {
      return item.id === itemTobeUpdated.id;
    });
    console.log(indexOfItemTobeUpdated);
    if (indexOfItemTobeUpdated !== -1) {
      storedList[indexOfItemTobeUpdated].text = updatedItemObj["edited-text"];
      storedList[indexOfItemTobeUpdated].dueDate =
        updatedItemObj["edited-date"];
      localStorage.setItem("stored-list", JSON.stringify(storedList));
      const listItemEle = document.querySelector(`#${itemTobeUpdated.id}`);
      console.log(listItemEle);
    }
  });
}
