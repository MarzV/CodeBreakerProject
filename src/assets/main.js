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

    attempt.value++;
}

//implement new functions here

function getResults(input) {

    let htmlToAdd = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';

    for (let a = 0; a <= 4; a++) {
        if (input[a] == answer.value[a]) {
            htmlToAdd += '<span class="glyphicon glyphicon-ok"></span>';
        }
        for (let b= 0; b <= 4; b++) {
            if(input[b] == answer.value[a]) {
                htmlToAdd += '<span class="glyphicon glyphicon-transfer"></span>';
            }
            else htmlToAdd += '<span class="glyphicon glyphicon-remove"></span>';
        }
        htmlToAdd += '</div';
    }
}

function setHiddenFields() {
    let amountZero = "";

    answer.value= Math.floor((Math.random()*9999)).toString();

    for (let i = 4; answer.value.length < i; i--) {
        amountZero  += "0";
    }

    attempt.value= "0";


    answer.value = amountZero + answer.value;
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message
}

function validateInput(userInput) {
    if(userInput.length != 4) {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
    return true;
}