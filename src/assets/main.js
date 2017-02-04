let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == "" && attempt.value =="") {
        setHiddenFields()
    }
}

//implement new functions here

function setHiddenFields() {
    let amountZero = "";
    attempt.value= "";
    answer.value= Math.floor((Math.random()*9999));
    answer.value.toString();

    for (let i = 4; answer.value.length < i; i--) {
        amountZero  += "0";
    }

    answer.value = amountZero + answer.value;
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message
}