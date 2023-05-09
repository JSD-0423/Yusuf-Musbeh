const themeButton = document.querySelector(".dark-mode-button");
const themeText = document.querySelector(".dark-mode-button span");
const moonIcon = document.getElementById("moonIcon");

const favoritesButton = document.querySelector(".favorites-button");
const favoritesContainer = document.querySelector(".favorites");
const favoritesIcon = document.getElementById("favoritesIcon");

applyTheme();

function switchTheme() {
  currentTheme = getTheme();

  if (currentTheme == "true") {
    localStorage.setItem("darkMood", false);
    applyTheme();
  } else {
    localStorage.setItem("darkMood", true);
    applyTheme();
  }
}

function applyTheme() {
  let theme = getTheme();
  if (theme == "true") {
    document.documentElement.setAttribute("data-theme", "dark");
    moonIcon.setAttribute("name", "moon");
    if (themeText != null) themeText.innerHTML = "Light Mode";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    moonIcon.setAttribute("name", "moon-outline");
    if (themeText != null) themeText.innerHTML = "Dark Mode";
  }
}

function toggleFavoritesContainer() {
  let bottomValue = favoritesContainer.style.bottom;
  console.log(bottomValue);
  if (bottomValue != "0px") {
    favoritesContainer.style.bottom = "0";
    favoritesIcon.style.color = "var(--heart-color)";
    favoritesIcon.setAttribute("name", "heart");
    favoritesIcon.style.transform = "rotate(20deg)";
    setTimeout(() => (favoritesIcon.style.transform = "rotate(-20deg)"), 100);

    setTimeout(() => (favoritesIcon.style.transform = "rotate(0deg)"), 100);
  } else {
    favoritesContainer.style.bottom = "-300";
    favoritesIcon.style.color = "var(--text-body)";
    favoritesIcon.setAttribute("name", "heart-outline");
    favoritesIcon.style.transform = "rotate(20deg)";
    setTimeout(() => (favoritesIcon.style.transform = "rotate(0deg)"), 100);
  }
}

function getTheme() {
  let theme = localStorage.getItem("darkMood");
  if (!theme) {
    localStorage.setItem("darkMood", false);
    theme = false;
  }
  return theme;
}

themeButton.addEventListener("click", switchTheme);
favoritesButton.addEventListener("click", toggleFavoritesContainer);
