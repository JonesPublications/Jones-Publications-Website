document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent =
      "Thank you for your message. This demo form isn’t wired to email yet, but your words are appreciated in spirit.";
    form.reset();
  });
});
