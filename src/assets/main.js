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
    if (getResults()) {
        setMessage('You Win! :)')
    }
    if(!getResults() && attempt.value >= 10) {
        setMessage('You Lose! :(')
    }
}

//implement new functions here

function getResults(input) {
    let inputAnswer = input.toString();
    let htmlToAdd = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    let correctQuess = 0;

    for (let a = 0; a < 4; a++) {
        alert(inputAnswer[a] + 'inputAnswer');
        alert(answer.value[a] + 'answerValue');
        if (inputAnswer[a] == answer.value[a]) {
            alert ('deze staat op de goede plek en is gelijk');
            htmlToAdd += '<span class="glyphicon glyphicon-ok"></span>';
            correctQuess++;


        }
        else if  (inputAnswer[a] != answer.value[a]) {
            for (let b = 0; b < 4; b++) {
                if(inputAnswer[a] == answer.value[b]) {
                    alert('deze is er wel maar niet op de juiste plek');
                    htmlToAdd += '<span class="glyphicon glyphicon-transfer"></span>';
                    break;
                }
                else if (b==3) {
                    alert('getal komt niet voor');
                    htmlToAdd += '<span class="glyphicon glyphicon-remove"></span>';
                }
            }
        }
    }
    htmlToAdd += '</div';
    alert(htmlToAdd);
    alert(correctQuess);
    document.getElementById('results').innerHTML= htmlToAdd;
    if (correctQuess == 4 ) {
        return true
    }
    else return false
}




        // if (inputAnswer[a] == answer.value[a]) {
        //     // htmlToAdd += '<span class="glyphicon glyphicon-ok"></span>';
        //
        // }
// //         for (let b= 0; b <= 4; b++) {
// //             if(input[b] == answer.value[a]) {
// //                 alert(input[b] + answer.value[a] +'niet op de goede pek, juiste getal')
// //                 // htmlToAdd += '<span class="glyphicon glyphicon-transfer"></span>';
// //             }
// //             // else htmlToAdd += '<span class="glyphicon glyphicon-remove"></span>';
// //             alert('niet op de goede pek, niet juiste getal')
// //         }
// //         //
// //     }
// }

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