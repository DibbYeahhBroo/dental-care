document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log("User Data Submitted:", { name, email, message });

  const responseMessage = document.getElementById('responseMessage');
  responseMessage.textContent = "Thank you for reaching out. We'll get back to you soon.";

  document.getElementById('contactForm').reset();
});
