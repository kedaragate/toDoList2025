const container = document.querySelector(".container");

export default function createEditForm(prefilledText, prefilledDate) {
  console.log(prefilledDate, prefilledText);

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  container.appendChild(overlay);

  const editFormEle = document.createElement("form");
  editFormEle.id = "edit-form";
  editFormEle.classList.remove("hidden");
  const editFormHeading = document.createElement("h2");
  editFormHeading.textContent = "Edit Task";
  const editTextInputEle = document.createElement("input");
  editTextInputEle.type = "text";
  editTextInputEle.name = "edited-text";
  editTextInputEle.value = prefilledText;
  const editDateInputEle = document.createElement("input");
  editDateInputEle.type = "date";
  editDateInputEle.name = "edited-date";
  editDateInputEle.value = prefilledDate;
  const today = new Date().toISOString().split("T")[0];

  editDateInputEle.min = today;
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.id = "submit-btn-edit-form";
  submitBtn.textContent = "Submit";

  editFormEle.appendChild(editTextInputEle);
  editFormEle.appendChild(editDateInputEle);
  editFormEle.appendChild(submitBtn);
  container.appendChild(editFormEle);
  overlay.addEventListener("click", () => {
    overlay.remove();
    editFormEle.remove();
  });
}
