document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".discover-grid");
  const visitorMessage = document.getElementById("visitor-message");

  fetch("data/places.json")
    .then(response => response.json())
    .then(data => {
      data.forEach((place) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <h2>${place.title}</h2>
          <figure>
            <img src="${place.image}" alt="${place.title}" width="300" height="200" loading="lazy">
          </figure>
          <address>${place.address}</address>
          <p>${place.description}</p>
          <button>Learn more</button>
        `;

        grid.appendChild(card);
      });
    })
    .catch(error => console.error("Error loading JSON data:", error));

  const lastVisit = localStorage.getItem("lastVisit");
  const currentTime = Date.now();

  if (!lastVisit) {
    visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const lastVisitDate = new Date(Number(lastVisit));
    const formattedDate = lastVisitDate.toLocaleString(); // incluye fecha y hora local
    visitorMessage.textContent = `Your last visit was on ${formattedDate}.`;
  }

  localStorage.setItem("lastVisit", currentTime);
});
