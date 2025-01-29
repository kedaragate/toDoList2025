export default function createSpanElement(
  content,
  itemclass = "class-not-provided"
) {
  const span = document.createElement("span");
  span.textContent = content;
  span.classList.add(itemclass);
  return span;
}
