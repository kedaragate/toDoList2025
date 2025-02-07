export default function createSpanElement(
  content,
  className = "class-not-provided"
) {
  const span = document.createElement("span");
  span.textContent = content;
  span.classList.add(className);
  return span;
}
