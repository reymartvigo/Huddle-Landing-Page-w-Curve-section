let form = document.getElementById("form");
let email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailVal = email.value.trim();
  let emailPattern =
    /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;

  if (emailVal === "") {
    errorFunc(email, "Check your email please");
  } else if (!emailVal.match(emailPattern)) {
    errorFunc(email, "Check your email please");
  } else {
    successFunc(email, "");
  }
});

function errorFunc(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = message;
  req.className = "error";
  span.className = "error-message";
  if (req !== email) {
    req.value = "";
  } else {
    req.value = "john@mail.com";
  }
}

function successFunc(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = message;
  req.className = "success";
  span.className = "success-message";
}
