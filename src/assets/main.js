let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here

function setHiddenFields() {
    let amountZero = "";
    answer.value= Math.floor((Math.random()*9999));
    answer.value.toString();

    for (let i = 4; answer.value.length < i; i--) {
        zero  += "0";

    }
    return (zero + answer.value);
}