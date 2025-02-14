function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function toggleThemeClass(themeTogglerElement, isDarkTheme) {
  if (isDarkTheme) {
    themeTogglerElement.classList.add("fa-moon");
    themeTogglerElement.classList.remove("fa-sun");
  } else {
    themeTogglerElement.classList.add("fa-sun");
    themeTogglerElement.classList.remove("fa-moon");
  }
}

export default function themeToggler() {
  const themeTogglerElement = document.querySelector("#theme-toggle-element");
  setTheme("dark");

  themeTogglerElement.addEventListener("click", () => {
    const isDarkTheme =
      document.documentElement.getAttribute("data-theme") === "dark";
    const newTheme = isDarkTheme ? "light" : "dark";
    setTheme(newTheme);
    toggleThemeClass(themeTogglerElement, isDarkTheme);
  });
}
