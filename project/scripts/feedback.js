
  
    document.getElementById("feedback-form").addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const tool = document.getElementById("tool").value.trim();
      const message = document.getElementById("message").value.trim();

      const feedbackData = {
        name,
        email,
        tool,
        message,
        date: new Date().toLocaleString()
      };

      localStorage.setItem("lastFeedback", JSON.stringify(feedbackData));

      document.getElementById("feedback-result").innerHTML = `
        <p>Thank you, <strong>${name}</strong>, for your feedback!</p>
        <p>We received your message and will review it shortly.</p>
      `;

      this.reset();
    });
  