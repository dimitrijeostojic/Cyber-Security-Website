document.getElementById("message").addEventListener("keyup", validText);
document.getElementById("name").addEventListener("keyup", validName);
document.getElementById("number").addEventListener("keyup", validNumber);

function validText() {
  let msg = document.getElementById("message-error");
  let textinput = document.getElementById("message");
  if (textinput.value.length < 1) {
    textinput.classList.add("border");
    textinput.classList.add("border-danger");
    msg.textContent = "This field must not be empty!";
  } else {
    msg.textContent = "";
    textinput.classList.remove("border");
    textinput.classList.remove("border-danger");
  }
}

function validName() {
  let name = document.getElementById("name-error");
  let nameinput = document.getElementById("name");
  if (
    nameinput.value.length < 1 ||
    nameinput.value.contains(" ") ||
    nameinput.value[0] !== nameinput.value[0].toUpperCase()
  ) {
    nameinput.classList.add("border");
    nameinput.classList.add("border-danger");
    name.textContent = "This field must not be empty!";
  } else {
    name.textContent = "";
    nameinput.classList.remove("border");
    nameinput.classList.remove("border-danger");
  }
}

function validNumber() {
  let number = document.getElementById("number-error");
  let numberinput = document.getElementById("number");
  if (numberinput.value.length < 1 || numberinput.value.contains(" ")) {
    numberinput.classList.add("border");
    numberinput.classList.add("border-danger");
    number.textContent = "This field must not be empty!";
  } else {
    number.textContent = "";
    numberinput.classList.remove("border");
    numberinput.classList.remove("border-danger");
  }
}
