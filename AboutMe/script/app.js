'use strict'

// Function Invocation

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();
seventhQuestion();



// // First Question

var counter = 0;
console.log(counter);

function firstQuestion() {

    var name = prompt('Hello, what is your name?');
    alert("Welcome " + name + ", Lets see if you can answer few questions " +
        "about me. You can just answer by typing yes or no.");

    var age = prompt('Am I 35 years old?');
    console.log('Age:', age);
    age = age.toUpperCase();

    if (age === 'NO') {
        alert("That's correct. I'm 31 years old.");
        counter++;
        console.log(counter);
    } else {
        alert("I'm 31 years old");
    }

}

// // Second Question
function secondQuestion() {
    var color = prompt('Is orange my favorite color?');
    console.log('Food:', color);
    color = color.toUpperCase();

    if (color === 'NO') {
        alert("That's correct. It's blue.");
        counter++;
        console.log(counter);
    } else {
        alert('My favorite color is blue.');
    }

}
// // Third Question

function thirdQuestion() {
    var country = prompt('Did i grow up in Malaysia?');
    console.log('Country:', country);
    country = country.toUpperCase();

    if (country === 'NO') {
        alert("That's correct. I grew up in Nepal.");
        counter++;
    } else {
        alert("No, I grew up in Nepal.");
    }

}

// // Fourth Question

function fourthQuestion() {
    var states = prompt('Have I travelled to more than 40 states?');
    console.log('States:', states);
    states.toUpperCase();

    if (states === 'NO') {
        alert("That's right. I have travelled to only 15 states.");
        counter++;
    } else {
        alert("I have visited 15 states.");
    }


}


// // Fifth Question

function fifthQuestion() {
    var language = prompt('Do I speak 4 languages?');
    console.log('Language:', language);
    language = language.toUpperCase();

    if (language === 'YES') {
        alert("That's correct.");
        counter++;
    } else {
        alert("I speak 4 languages.");
    }
}


// // Sixth Question

function sixthQuestion() {

    for (var i = 1; i <= 5; i++) {
        var number = parseInt(prompt('Can you guess a correct number? You only get 4 tries ' +
            'to answer this question?'));
        console.log(number);
        if (i === 5) {
            alert("You used all 4 tries. The correct answer is 42")
            break;
        }

        if (number === 42) {
            alert('you guessed it right. Its 42');
            counter++;
            break;
        } else if (number < 42) {
            alert('Its too low. Try again');
        } else {
            alert("It's too high. Try again");
        }
    }
}

// Seventh Question


function seventhQuestion() {
    
    var arr = ['squash', 'egg plant', 'cabbage', 'tomato'];
    
    for (var i = 1; i <= 7; i++) {
        if (i === 7) {
            alert('You used all 6 tries. Correct answers are' +
            ' squash, mango, banana and orange.');
            break;
        }
        var guess = prompt("What are the vegetables that I do not like to eat?" +
        "You have 6 tries to answer this.");
        // console.log('guess' + [i] + ':', guess);
        
        
        for (var j = 0; j < arr.length; j++) {
            if (guess === arr[j]) {
                alert('Yes that is correct. Squash, egg plant, cabbage and tomato' +
                ' are the vegetables that I dont like.');
                counter++;
                i = 7;
                break;
                
            } else {
                alert("That's incorrect. Try again.");
                break;
            }
            
        }
        
    }
    
    
}
alert(name + ', You answered ' + counter + ' out of 7 questions. Thank you for participating.');


