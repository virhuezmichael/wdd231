// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Tool cards logic for tools.html
  const toolContainer = document.querySelector(".tools-container");
  if (toolContainer) {
    const tools = [
      {
        name: "BLAST",
        description: "Basic Local Alignment Search Tool – finds regions of similarity between sequences.",
        link: "https://blast.ncbi.nlm.nih.gov/Blast.cgi"
      },
      {
        name: "Biopython",
        description: "Python library for computational biology and bioinformatics.",
        link: "https://biopython.org/"
      },
      {
        name: "R",
        description: "A statistical programming language widely used in bioinformatics.",
        link: "https://www.r-project.org/"
      },
      {
        name: "Galaxy",
        description: "Web-based platform for accessible, reproducible, and transparent bioinformatics.",
        link: "https://usegalaxy.org/"
      }
    ];

    tools.forEach(tool => {
      const card = document.createElement("div");
      card.className = "tool-card";

      card.innerHTML = `
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
        <a href="${tool.link}" target="_blank">Visit</a>
      `;

      card.addEventListener("click", () => {
        alert(`You selected: ${tool.name}`);
      });

      toolContainer.appendChild(card);
    });
  }

 
});
