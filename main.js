const form = document.querySelector("form");
const email = document.querySelector('[type="email"]');

const errorMsg = document.querySelector(".error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let emailValue = email.value;

  if (validateEmail(emailValue)) {
    form.classList.remove("error");
    errorMsg.style.display = "none";
  } else {
    form.classList.add("error");
    errorMsg.style.display = "block";
    errorMsg.textContent = "Please provide a valid email address";
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
