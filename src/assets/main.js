let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let guessNumber = document.getElementById('guessNumber');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value === '0' && attempt.value === '0') {
      setHiddenFields(0, 9999);
    }
    if(validateInput(input.value)) {
      newNum = Number(attempt.value) + 1;
      attempt.value = newNum.toString();
    } else {
      return;
    }
    if(input.value === answer.value) {
      setMessage("YOU WIN!!!!!!");
      answer.value = 0;
      attempt.value = 0;
    } else if (attempt.value === '5') {
      setMessage("YOU LOSE!!!!!!!!");
      answer.value = 0;
      attempt.value = 0;
    }
    console.log(guessNumber);
    guessNumber.innerHTML = attempt.value;
    console.log(attempt);
    console.log(answer);
}

function setHiddenFields(min, max) {
  attempt.value = 0;
  answer.value = Math.floor(Math.random() * (max - min) + min);
  answer.value = answer.value.toString();
  while(answer.value.length === 3) {
    answer.value = "0" + answer.value;
  }
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
