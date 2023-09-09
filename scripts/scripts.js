const modal = document.getElementById("myModal");
const submitButton = document.querySelector(
  "#contactForm input[type='submit']"
);
const closeButton = document.querySelector(".close");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  const message = `Thank you ${firstName} ${lastName} for submitting. Our team will be in touch soon!`;

  const modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = message;

  modal.style.display = "block";
});

closeButton.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "none";
});
