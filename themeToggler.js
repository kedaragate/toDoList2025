export default function themeToggler() {
  const themeTogglerElement = document.querySelector("#theme-toggle-element");
  document.documentElement.setAttribute("data-theme", "dark");
  themeTogglerElement.addEventListener("click", () => {
    const isDarkTheme =
      document.documentElement.getAttribute("data-theme") === "dark";

    isDarkTheme
      ? document.documentElement.setAttribute("data-theme", "light")
      : document.documentElement.setAttribute("data-theme", "dark");

    if (isDarkTheme) {
      themeTogglerElement.classList.add("fa-toggle-on");
      themeTogglerElement.classList.remove("fa-toggle-off");
    } else {
      themeTogglerElement.classList.add("fa-toggle-off");
      themeTogglerElement.classList.remove("fa-toggle-on");
    }
  });
}
