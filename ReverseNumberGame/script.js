"use strict";

window.addEventListener("DOMContentLoaded", main);

let guess;
let counter = 0;

function main() 
{
    console.log("JavaScript kører!")

    document.querySelector("#btn_start").addEventListener("click", buttonStart);
    document.querySelector("#btn_high").addEventListener("click", buttonHigh);
    document.querySelector("#btn_low").addEventListener("click", buttonLow);
    document.querySelector("#btn_correct").addEventListener("click", buttonCorrect);

    document.querySelector("#btn_high").style.display = "none";
    document.querySelector("#btn_low").style.display = "none";
    document.querySelector("#btn_correct").style.display = "none";
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomGuess()
{
        guess = randomInt(1, 100);
        counter += 1;

    document.querySelector("#guessList").insertAdjacentHTML("beforeend",
        `<li>${counter}. Jeg gætter på ${guess}</li>`
    );

}

function buttonStart()
{
    document.querySelector("#btn_high").style.display = "inline-block";
    document.querySelector("#btn_low").style.display = "inline-block";
    document.querySelector("#btn_correct").style.display = "inline-block";
    document.querySelector("#btn_start").style.display = "none";

    randomGuess();

    console.log("Game started");
}

function buttonHigh()
{
    const prev = guess;

    document.querySelector("#guessList").insertAdjacentHTML("beforeend",
        `<li>Du gættede på ${prev} - Det var for højt</li>`
    );

    randomGuess();

    console.log("Too high");
}

function buttonLow()
{
    const prev = guess;

    document.querySelector("#guessList").insertAdjacentHTML("beforeend",
        `<li>Du gættede på ${prev} - Det var for lavt</li>`
    );

    randomGuess();

    console.log("Too low");
}

function buttonCorrect() 
{
    document.querySelector("#guessList").insertAdjacentHTML("beforeend",
    '<li>Det var korrekt!!!</li>'
    );
    console.log("You got it!");

    document.querySelector("#btn_start").style.display = "inline-block";
    document.querySelector("#btn_high").style.display = "none";
    document.querySelector("#btn_low").style.display = "none";
    document.querySelector("#btn_correct").style.display = "none";
}

