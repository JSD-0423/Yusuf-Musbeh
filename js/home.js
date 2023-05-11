const topics = [
  {
    image: "../assets/accessibility.png",
    title: "HTML",
    author: "Sarah smith",
  },
  {
    image: "../assets/css.webp",
    title: "CSS",
    author: "David Lee",
  },
  {
    image: "../assets/jquery.png",
    title: "jQuery",
    author: "John Johnson",
  },
  {
    image: "../assets/angular.png",
    title: "Angular",
    author: "Jessica Davis",
  },
  {
    image: "../assets/react.webp",
    title: "React",
    author: "Olivia Martinez",
  },
  {
    image: "../assets/flask.webp",
    title: "Flask",
    author: "Ethan Thompson",
  },
  {
    image: "../assets/sql.png",
    title: "SQL",
    author: "Madison Davis",
  },
  {
    image: "../assets/nosql.png",
    title: "NoSQL",
    author: "Isabella Wilson",
  },
  {
    image: "../assets/restapi.jpeg",
    title: "REST APIs",
    author: "Jacob Garcia",
  },
  {
    image: "../assets/graphql.png",
    title: "GraphQL",
    author: "Mia Brown",
  },
  {
    image: "../assets/oauth.png",
    title: "OAuth",
    author: "Evelyn Nguyen",
  },
  {
    image: "../assets/json.png",
    title: "JSON",
    author: "Lian Hernandez",
  },
  {
    image: "../assets/ajax.gif",
    title: "AJAX",
    author: "Avery Perez",
  },
  {
    image: "../assets/wai.jpeg",
    title: "WebSockets",
    author: "Victoria Kim",
  },
  {
    image: "../assets/responsive.gif",
    title: "Responsive Design",
    author: "Ryan Jones",
  },
  {
    image: "../assets/accessibility.png",
    title: "Accessibilty",
    author: "Samantha Martin",
  },
  {
    image: "../assets/ux.jpeg",
    title: "User Experience(UX)",
    author: "Luke Davis",
  },
  {
    image: "../assets/ux.jpeg",
    title: "User Interface (UI)",
    author: "Grace Wilson",
  },
  {
    image: "../assets/design-systems.jpeg",
    title: "Design Systems",
    author: "Noah Martinez",
  },
  {
    image: "../assets/performance.png",
    title: "Performance Optimization",
    author: "Chloe Taylor",
  },
  {
    image: "../assets/cross-browser.jpeg",
    title: "Cross-Compatibility",
    author: "David Lee",
  },
  {
    image: "../assets/web-security.jpeg",
    title: "Web Security",
    author: "Gabriel Hernandez",
  },
  {
    image: "../assets/testing.jpeg",
    title: "Testing and Debugging",
    author: "Avery Perez",
  },
  {
    image: "../assets/ci-cd.jpeg",
    title: "Continuous Integration",
    author: "Madison Davis",
  },
  {
    image: "../assets/devops.png",
    title: "DevOps",
    author: "Isabella Wilson",
  },
  {
    image: "../assets/cloud.jpeg",
    title: "Cloud Computing",
    author: "Jacob Garcia",
  },
  {
    image: "../assets/docker.png",
    title: "Docker",
    author: "Mia Brown",
  },
  {
    image: "../assets/microservices.png",
    title: "MicroServices",
    author: "Evelyn Nguyen",
  },
  {
    image: "../assets/pwa.png",
    title: "Progressive Web Apps",
    author: "Lian Hernandez",
  },
  {
    image: "../assets/wai.jpeg",
    title: "Web Accessibility Initiaive",
    author: "Avery Perez",
  },
  {
    image: "../assets/cms.png",
    title: "Content Mangment Systems",
    author: "Victoria Kim",
  },
  {
    image: "../assets/analytics.png",
    title: "Web Analytics",
    author: "Ryan Jones",
  },
];
const topicsContainer = document.querySelector(".topics");
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", searchTopics);

displayTopics(topics);
const topicContainers = document.querySelectorAll(".topic");
topicContainers.forEach((topis) =>
  topis.addEventListener("click", () => {
    window.location.href = "details.html";
  })
);
function displayTopics(topics) {
  topicsContainer.innerHTML = "";
  topics.forEach((topic) => {
    const topicContainer = document.createElement("article");
    topicContainer.classList.add("topic");

    topicContainer.innerHTML = `<img src="${topic.image}" alt="topic" srcset="" />
    <section class="topic-info">
      <section class="topic-name">
        <p class="category">Category</p>
        <p class="topic-title">${topic.title}</p>
      </section>
      <div class="topic-card-footer">
        <section class="topic-rate">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
        </section>
        <section class="topic-author">Author: ${topic.author}</section>
      </section>
   
  `;
    topicsContainer.appendChild(topicContainer);
  });
}
function searchTopics(query) {
  query = query.target.value.trim().toLowerCase();
  console.log(query);
  if (query == null || query == "") return displayTopics(topics);
  const updatedTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(query)
  );
  displayTopics(updatedTopics);
}
