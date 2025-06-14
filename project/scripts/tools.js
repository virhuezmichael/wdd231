const url ="data/bioinformatic-tools.json";

const toolContainer = document.querySelector(".tools-container");

// fetch - try catch block
async function getTools() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayTools(data.tools);
  } catch (error) {
    console.error("Error fetching tools:", error);
  }
}

const displayTools = (tools) => {
  tools.forEach(tool => {
      const card = document.createElement("div");
      card.className = "tool-card";

      card.innerHTML = `
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
        <p>${tool.category}<p>
        <a href="${tool.link}" target="_blank">Visit</a>
      `;

      card.addEventListener("click", () => {
        alert(`You selected: ${tool.name}`);
      });

      toolContainer.appendChild(card);
    });
}
  
getTools();

 

