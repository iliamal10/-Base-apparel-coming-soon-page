const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailVal = email.value;

  if (!validateEmail(emailVal)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
});

function validateEmail(email) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return regex.test(String(email).toLowerCase());
}
