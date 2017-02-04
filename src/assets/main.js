let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == "" && attempt.value == "") {
        setHiddenFields()
    }

    if (!validateInput(input.value)) {
        return;
    }

    attempt.value++
}

//implement new functions here

// function getResults() {
//     if(!validateInput(input.value)) {
//         return false
//     }
//
//     attempt.value++
// }

function setHiddenFields() {
    let amountZero = "";
    attempt.value= "";
    answer.value= Math.floor((Math.random()*9999)).toString();

    for (let i = 4; answer.value.length < i; i--) {
        amountZero  += "0";
    }

    answer.value = amountZero + answer.value;
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message
}

function validateInput(input) {
    if(input.length == 4) {
        return true
    }
    else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false
    }
}