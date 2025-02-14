const container = document.querySelector(".container");

function createOverlay() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  container.appendChild(overlay);
  overlay.addEventListener("click", () => {
    overlay.remove();
    document.querySelector("#edit-form").remove();
  });
}

function createEditFormElements(prefilledText, prefilledDate) {
  const editForm = document.createElement("form");
  editForm.id = "edit-form";
  editForm.classList.remove("hidden");

  const editTextInput = document.createElement("input");
  editTextInput.type = "text";
  editTextInput.name = "edited-text";
  editTextInput.value = prefilledText;

  const editDateInput = document.createElement("input");
  editDateInput.type = "date";
  editDateInput.name = "edited-date";
  editDateInput.value = prefilledDate;
  editDateInput.min = new Date().toISOString().split("T")[0];

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.id = "submit-btn-edit-form";
  submitButton.textContent = "Submit";

  editForm.appendChild(editTextInput);
  editForm.appendChild(editDateInput);
  editForm.appendChild(submitButton);

  return editForm;
}

export default function createEditForm(prefilledText, prefilledDate) {
  createOverlay();
  const editForm = createEditFormElements(prefilledText, prefilledDate);
  container.appendChild(editForm);
}
