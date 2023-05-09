const topics = document.querySelectorAll(".topic");
topics.forEach((topic) =>
  topic.addEventListener("click", () => (window.location.href = "details.html"))
);
