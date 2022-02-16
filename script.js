"use strict";

// document.querySelector() to select an element from HTML
// document serves as an entry point into the DOM

/**
 * What is the dom?
 * Document object model allows javascript to access html elements and styles to manipulate them
 * We would be able to change text, HTML attributes, and even CSS styles from js using DOM
 * The DOM is automatically created by the browser as long as the HTML page loads
 */

/**
 * DOM !== JS
 * DOM methods and properties for DOM manipulation is not part of JS
 * They are part of the web APIs
 * Web APIs are libraries written in js that browser implement and are readily available for us to use
 * There is actually a DOM specification that browser implement which is the reason why DOM manipulation works the same in all browser
 */

// ----- UNCOMMENT CODE BELOW TO SEE HOW IT WORKS -----
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "You can start now 🎉";
// document.querySelector(".number").textContent = "🤨";
// document.querySelector(".score").textContent = "8";

// To get the value of a normal text use document.querySelector().textContent
// To get the value of a an input field use document.querySelector().value

// ----- UNCOMMENT CODE BELOW TO SEE HOW IT WORKS -----
// document.querySelector(".guess").value = 12;

/**
 * Handling Click Events
 * Use an event listener to make your code react to something that happens in the DOM
 * An event is something that happens on the page (mouse clicks, mouse moving, etc)
 * An event listener will wait for a certain event to happen and then react to it
 * There are multiple ways to listen for events in JS but the most used one is
 * .addEventListener(type of event, function that should be executed whenever the event happens on this element);
 * You only need to define the function and then pass it to the event handler.
 * The JS engine will call this function, you don't need to
 */

/**
 * Manipulating CSS Styles
 * use .style.(a CSS property) after any querySelector to modify the element's CSS
 * remember to always specify a string when manipulating CSS styles
 * the CSS property should be specified in camelCase
 */

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const setScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const resetScore = function () {
  document.querySelector(".score").textContent = 20;
};

const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const buttonVisibility = function (boolean) {
  if (boolean) {
    document.querySelector(".check").style.display = "block";
  } else {
    document.querySelector(".check").style.display = "none";
  }
};

let secretNumber = generateSecretNumber();

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔️ No number!");
  } else {
    if (score > 1) {
      if (guess === secretNumber) {
        document.querySelector(".number").textContent = secretNumber;
        displayMessage("🎉 Correct Number");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (score > highscore) {
          highscore = score;
          document.querySelector(".highscore").textContent = highscore;
        }
        buttonVisibility(false);
      } else if (guess < secretNumber) {
        displayMessage("📉 Too Low");
        score--;
        setScore(score);
      } else if (guess > secretNumber) {
        displayMessage("📈 Too High");
        score--;
        setScore(score);
      }
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = generateSecretNumber();
  displayMessage("Start guessing...");
  resetScore();
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  buttonVisibility(true);
});
