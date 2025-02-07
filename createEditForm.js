const container = document.querySelector(".container");

export default function createEditForm(prefilledText, prefilledDate) {
  console.log(prefilledDate, prefilledText);

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  container.appendChild(overlay);

  const editForm = document.createElement("form");
  editForm.id = "edit-form";
  editForm.classList.remove("hidden");
  const editFormHeading = document.createElement("h2");
  editFormHeading.textContent = "Edit Task";
  const editTextInput = document.createElement("input");
  editTextInput.type = "text";
  editTextInput.name = "edited-text";
  editTextInput.value = prefilledText;
  const editDateInput = document.createElement("input");
  editDateInput.type = "date";
  editDateInput.name = "edited-date";
  editDateInput.value = prefilledDate;
  const today = new Date().toISOString().split("T")[0];

  editDateInput.min = today;
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.id = "submit-btn-edit-form";
  submitButton.textContent = "Submit";

  editForm.appendChild(editTextInput);
  editForm.appendChild(editDateInput);
  editForm.appendChild(submitButton);
  container.appendChild(editForm);
  overlay.addEventListener("click", () => {
    overlay.remove();
    editForm.remove();
  });
}
