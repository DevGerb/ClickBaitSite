document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  const button = document.getElementById("clickButton");
  const visitCount = document.getElementById("visitCount");
  const registerButton = document.getElementById("registerButton");
  const signInButton = document.getElementById("signInButton");
  const registerForm = document.getElementById("registerForm");
  const signInForm = document.getElementById("signInForm");
  const registrationForm = document.getElementById("registrationForm");
  const signInFormElement = document.getElementById("signInFormElement");
  const closeRegisterButton = document.getElementById("closeRegisterButton");
  const closeSignInButton = document.getElementById("closeSignInButton");
  let count = 0;

  // Click counter logic
  button.addEventListener("click", () => {
    count++;
    counter.innerHTML = count;
  });

  // Visit counter logic
  if (localStorage.getItem("visitCount")) {
    localStorage.setItem(
      "visitCount",
      Number(localStorage.getItem("visitCount")) + 1
    );
  } else {
    localStorage.setItem("visitCount", 1);
  }
  visitCount.innerHTML = localStorage.getItem("visitCount");

  // Show registration form
  registerButton.addEventListener("click", () => {
    registerForm.classList.toggle("hidden");
    signInForm.classList.add("hidden"); // Ensure sign-in form is hidden
  });

  // Show sign-in form
  signInButton.addEventListener("click", () => {
    signInForm.classList.toggle("hidden");
    registerForm.classList.add("hidden"); // Ensure registration form is hidden
  });

  // Handle registration form submission
  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Here you can add code to send the registration data to your server
    console.log("User registered:", { username, email, password });

    // Hide the form after submission
    registerForm.classList.add("hidden");
  });

  // Handle sign-in form submission
  signInFormElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("signInEmail").value;
    const password = document.getElementById("signInPassword").value;

    // Here you can add code to authenticate the user
    console.log("User signed in:", { email, password });

    // Hide the form after submission
    signInForm.classList.add("hidden");
  });

  // Close registration form
  closeRegisterButton.addEventListener("click", () => {
    registerForm.classList.add("hidden");
  });

  // Close sign-in form
  closeSignInButton.addEventListener("click", () => {
    signInForm.classList.add("hidden");
  });
});
