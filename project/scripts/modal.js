document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("bioModal");
  const btn = document.getElementById("openModalBtn");
  const span = modal.querySelector(".close");

  btn.onclick = () => {
    modal.style.display = "block";
  };

  span.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});