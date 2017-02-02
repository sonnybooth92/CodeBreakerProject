let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
var i = 0;

function guess() {
    let input = document.getElementById('user-guess');
    if(answer === '' && attempt === '') {
        setHiddenFields(0, 9999);
    }
    if(validateInput(input.value) === false) {
      return;
    } else {
      i++
      attempt.value = i;
    }
}

function setHiddenFields(min, max) {
  let answer = Math.floor(Math.random() * (max - min) + min);
  let attempt = 0;
  answer = answer.toString();
  while(answer.length === 3) {
    answer = "0" + answer;
  }
  console.log(answer);
}

function setMessage(message) {
  document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
  if(input.length === 4) {
    setMessage("");
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}
