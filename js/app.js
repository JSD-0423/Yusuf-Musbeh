const themeButton = document.querySelector(".dark-mode-button");
const themeText = document.querySelector(".dark-mode-button span");
const moonIcon = document.getElementById("moonIcon");
function switchTheme() {
  currentTheme = document.documentElement.getAttribute("data-theme");
  console.log(currentTheme);
  if (currentTheme == "light" || currentTheme == null) {
    document.documentElement.setAttribute("data-theme", "dark");
    moonIcon.setAttribute("name", "moon");
    if (themeText != null) themeText.innerHTML = "Light Mode";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    moonIcon.setAttribute("name", "moon-outline");
    if (themeText != null) themeText.innerHTML = "Dark Mode";
  }
}

themeButton.addEventListener("click", switchTheme);
