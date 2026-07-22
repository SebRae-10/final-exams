// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

// Live date in footer
const currentDate = document.getElementById("currentDate");
if (currentDate) {
  currentDate.textContent = new Date().toLocaleDateString();
}

// Greeting on home page
const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();

  if (hour < 12) {
    greeting.textContent = "Good morning, hero. Time to swing into the day.";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon, hero. The neighborhood needs you.";
  } else {
    greeting.textContent = "Good evening, hero. Stay sharp and keep the city safe.";
  }
}

// Contact form validation
const contactForm = document.getElementById("contactForm");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    errorMsg.textContent = "";
    successMsg.textContent = "";

    if (name === "" || email === "" || message === "") {
      errorMsg.textContent = "Please fill out all fields.";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      errorMsg.textContent = "Please enter a valid email address.";
      return;
    }

    successMsg.textContent = "Your message has been sent successfully!";
    contactForm.reset();
  });
}
