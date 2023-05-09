let addButton = document.querySelector(".add-favourites-button");
let title = document.querySelector(".topic-img span");
let image = document.querySelector(".topic-img img");
let favoruitesPanel = document.querySelector(".topics-favouries");

fillFavourites();
function addToFavourites() {
  let favourites = JSON.parse(localStorage.getItem("fav"));
  if (!favourites) favourites = [];
  console.log(favourites);
  favourites.push({
    title: title.innerText,
    image: image.getAttribute("src"),
  });
  localStorage.setItem("fav", JSON.stringify(favourites));
  fillFavourites();
}

function fillFavourites() {
  let favourites = JSON.parse(localStorage.getItem("fav"));
  if (!favourites) favourites = [];
  favoruitesPanel.innerHTML = "";
  favourites.forEach((topic) => {
    let articleTopic = document.createElement("section");
    articleTopic.classList.add("topic-favourites");
    articleTopic.innerHTML = `
      <img src="${topic.image}" alt="topic" srcset="" />
      <section class="topic-info">
        <p class="topic-title">${topic.title}</p>
        <section class="topic-rate">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
        </section>
      </section>
   `;
    favoruitesPanel.appendChild(articleTopic);
  });
}

addButton.addEventListener("click", addToFavourites);
