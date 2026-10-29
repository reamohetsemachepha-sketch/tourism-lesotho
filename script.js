
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("formMessage");

    message.textContent =
      "Thank you, " + name +
      "! Your enquiry has been prepared successfully.";

    bookingForm.reset();
  });
}


