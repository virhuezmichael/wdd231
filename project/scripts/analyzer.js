const analyzeBtn = document.getElementById("analyze-btn");
if (analyzeBtn) {
  analyzeBtn.addEventListener("click", () => {
    const input = document.getElementById("dna-input").value.trim().toUpperCase();
    const resultContainer = document.getElementById("results"); // CORREGIDO

    const matches = [];
    for (let i = 0; i < input.length - 2; i++) {
      const triplet = input.slice(i, i + 3);
      const base = triplet[0];
      const g1 = triplet[1];
      const g2 = triplet[2];

      if (["A", "T", "C", "G", "N"].includes(base) && g1 === "G" && g2 === "G") {
        matches.push({ index: i, sequence: triplet });
      }
    }

    localStorage.setItem("lastSequence", input);
    localStorage.setItem("matches", JSON.stringify(matches));

    resultContainer.innerHTML = matches.length
      ? `<p>Found ${matches.length} NGG sequence(s):</p><ul>${matches.map(m => `<li>Position ${m.index}: ${m.sequence}</li>`).join("")}</ul>`
      : "<p>No NGG sequences found.</p>";
  });
}

function copySequence() {
  const text = document.getElementById("example-sequence").innerText;
  navigator.clipboard.writeText(text).then(() => {
    const button = document.querySelector(".copy-button");
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="copy-icon">✅</span><span class="copy-text">Copied!</span>';
    setTimeout(() => {
      button.innerHTML = originalText;
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy text: ", err);
  });
}


