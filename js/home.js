const topics = [
  {
    image: "../assets/html.png",
    category: "Web Development Languages",
    title: "HTML",
    author: "Sarah smith",
  },
  {
    image: "../assets/css.webp",
    category: "Web Development Languages",
    title: "CSS",
    author: "David Lee",
  },
  {
    image: "../assets/javascript.jpg",
    category: "Web Development Languages",
    title: "JavaScript",
    author: "John Johnson",
  },
  {
    image: "../assets/jquery.png",
    category: "Web Development Languages",
    title: "jQuery",
    author: "John Johnson",
  },
  {
    image: "../assets/angular.png",
    category: "Frontend Frameworks and Libraries",
    title: "Angular",
    author: "Jessica Davis",
  },
  {
    image: "../assets/react.webp",
    category: "Frontend Frameworks and Libraries",
    title: "React",
    author: "Olivia Martinez",
  },
  {
    image: "../assets/vuejs.jpeg",
    category: "Frontend Frameworks and Libraries",
    title: "Vue",
    author: "Ava Jones",
  },
  {
    image: "../assets/nodejs.webp",
    category: "Backend Frameworks and Libraries",
    title: "Node.js",
    author: "Ava Jones",
  },
  {
    image: "../assets/expressjs.webp",
    category: "Backend Frameworks and Libraries",
    title: "Express.js",
    author: "Ava Jones",
  },
  {
    image: "../assets/ruby.jpeg",
    category: "Backend Frameworks and Libraries",
    title: "Ruby on Rails",
    author: "Ava Jones",
  },
  {
    image: "../assets/django.jpeg",
    category: "Backend Frameworks and Libraries",
    title: "Django",
    author: "Ava Jones",
  },
  {
    image: "../assets/flask.webp",
    category: "Backend Frameworks and Libraries",
    title: "Flask",
    author: "Ethan Thompson",
  },
  {
    image: "../assets/sql.png",
    category: "Database and APIs",
    title: "SQL",
    author: "Madison Davis",
  },
  {
    image: "../assets/nosql.png",
    category: "Database and APIs",
    title: "NoSQL",
    author: "Isabella Wilson",
  },
  {
    image: "../assets/restapi.jpeg",
    category: "Database and APIs",
    title: "REST APIs",
    author: "Jacob Garcia",
  },
  {
    image: "../assets/graphql.png",
    title: "GraphQL",
    category: "Database and APIs",
    author: "Mia Brown",
  },
  {
    image: "../assets/oauth.png",
    category: "Web Development Concepts and Technologies",
    title: "OAuth",
    author: "Evelyn Nguyen",
  },
  {
    image: "../assets/json.png",
    category: "Web Development Concepts and Technologies",
    title: "JSON",
    author: "Lian Hernandez",
  },
  {
    image: "../assets/ajax.gif",
    category: "Web Development Concepts and Technologies",
    title: "AJAX",
    author: "Avery Perez",
  },
  {
    image: "../assets/wai.jpeg",
    category: "Web Development Concepts and Technologies",
    title: "WebSockets",
    author: "Victoria Kim",
  },
  {
    image: "../assets/responsive.gif",
    category: "Web Development Concepts and Technologies",
    title: "Responsive Design",
    author: "Ryan Jones",
  },
  {
    image: "../assets/accessibility.png",
    category: "Web Development Concepts and Technologies",
    title: "Accessibilty",
    author: "Samantha Martin",
  },
  {
    image: "../assets/ux.jpeg",
    category: "Web Development Concepts and Technologies",
    title: "User Experience(UX)",
    author: "Luke Davis",
  },
  {
    image: "../assets/ui.png",
    category: "Web Development Concepts and Technologies",
    title: "User Interface (UI)",
    author: "Grace Wilson",
  },
  {
    image: "../assets/design-systems.jpeg",
    category: "Web Development Concepts and Technologies",
    title: "Design Systems",
    author: "Noah Martinez",
  },
  {
    image: "../assets/performance.png",
    category: "Web Development Concepts and Technologies",
    title: "Performance Optimization",
    author: "Chloe Taylor",
  },
  {
    image: "../assets/cross-browser.jpeg",
    category: "Web Development Concepts and Technologies",
    title: "Cross-Compatibility",
    author: "David Lee",
  },
  {
    image: "../assets/seo.jpeg",
    category: "Web Development Concepts and Technologies",
    title: "Search Engine Optimization (SEO)",
    author: "Ava Jones",
  },
  {
    image: "../assets/web-security.jpeg",
    category: "Web Development Concepts and Technologies",
    title: "Web Security",
    author: "Gabriel Hernandez",
  },
  {
    image: "../assets/testing.jpeg",
    category: "Web Development Concepts and Technologies",
    title: "Testing and Debugging",
    author: "Avery Perez",
  },
  {
    image: "../assets/ci-cd.jpeg",
    category: "Web Development Concepts and Technologies",
    title:
      "Continuous Integration/Continuous Integration Continuous Integration/Continuous Integration ",
    author: "Madison Davis",
  },
  {
    image: "../assets/devops.png",
    category: "Web Development Concepts and Technologies",
    title: "DevOps",
    author: "Isabella Wilson",
  },
  {
    image: "../assets/cloud.jpeg",
    category: "Web Development Concepts and Technologies",
    title: "Cloud Computing",
    author: "Jacob Garcia",
  },
  {
    image: "../assets/docker.png",
    category: "Web Development Concepts and Technologies",
    title: "Docker",
    author: "Mia Brown",
  },
  {
    image: "../assets/microservices.png",
    category: "Web Development Concepts and Technologies",
    title: "MicroServices",
    author: "Evelyn Nguyen",
  },
  {
    image: "../assets/pwa.png",
    category: "Web Development Concepts and Technologies",
    title: "Progressive Web Apps",
    author: "Lian Hernandez",
  },
  {
    image: "../assets/wai.jpeg",
    category: "Web Development Concepts and Technologies",
    title: "Web Accessibility Initiaive",
    author: "Avery Perez",
  },
  {
    image: "../assets/cms.png",
    category: "Web Development Concepts and Technologies",
    title: "Content Mangment Systems",
    author: "Victoria Kim",
  },
  {
    image: "../assets/analytics.png",
    category: "Web Development Concepts and Technologies",
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

    topicContainer.innerHTML = `
    <img src="${topic.image}" alt="topic" srcset="" />
    <section class="topic-info">
      <section class="topic-name">
        <p class="category">${topic.category}</p>
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
