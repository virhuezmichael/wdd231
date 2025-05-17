const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `&copy; <span class="highlight">${today.getFullYear()}</span>`

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;