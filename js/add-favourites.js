// let addButton = document.querySelector(".add-favorites-button");
// let title = document.querySelector(".topic-img span");
// let image = document.querySelector(".topic-img img");
// let favoritesPanel = document.querySelector(".topics-favorites");

// fillFavorites();
// function addToFavorites() {
//   let favorites = getFav();
//   favorites.push({
//     title: title.innerText,
//     image: image.getAttribute("src"),
//   });
//   localStorage.setItem("fav", JSON.stringify(favorites));
//   fillFavorites();
// }

// function fillFavorites() {
//   let favorites = getFav();
//   favoritesPanel.innerHTML = "";
//   favorites.forEach((topic) => {
//     let articleTopic = document.createElement("section");
//     articleTopic.classList.add("topic-favorites");
//     articleTopic.innerHTML = `
//       <img src="${topic.image}" alt="topic" srcset="" />
//       <section class="topic-info">
//         <p class="topic-title">${topic.title}</p>
//         <section class="topic-rate">
//           <ion-icon name="star"></ion-icon>
//           <ion-icon name="star"></ion-icon>
//           <ion-icon name="star"></ion-icon>
//           <ion-icon name="star"></ion-icon>
//           <ion-icon name="star-outline"></ion-icon>
//         </section>
//       </section>
//    `;
//     favoritesPanel.appendChild(articleTopic);
//   });
// }

// function getFav() {
//   let favorites = JSON.parse(localStorage.getItem("fav"));
//   if (!favorites) favorites = [];
//   return favorites;
// }

// addButton.addEventListener("click", addToFavorites);
