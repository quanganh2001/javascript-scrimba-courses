# Add the firstCard, secondCard and sum
1. Create two variables, firstCard and secondCard. Set their values to a random number between 2-11.
2. Create a variable, sum, and set it to the sum of the two cards.

```js
let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;

console.log(sum);
```
Total is 15
# If...else statement for our game
Write the conditional according to these rules:
- If less than or equal to 20 -> "Do you want to draw a new card?"
- Else if exactly 21 -> "Wohoo! You've got Blackjack!"
- Else -> "You're out of the game!"
```js
let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;

/* Write the conditional according to these rules:
- If less than or equal to 20 -> "Do you want to draw a new card?"
- Else if exactly 21 -> "Wohoo! You've got Blackjack!"
- Else -> "You're out of the game!"
*/
if (sum <= 20) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack!");
} else {
    console.log("You're out of the game!");
}
```
# Add the hasBlackJack variable
```js
// hasBlackJack variable
let hasBlackJack = false;
```
# Add the isAlive variable
1. Create a variable called isAlive and assign it to true
2. Flip its value to false in the appropriate code block
```js
// 1. Create a variable called isAlive and assign it to true
let isAlive = true;
// 2. Flip its value to false in the appropriate code block
if (sum <= 20) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack!");
    hasBlackJack = true;
} else {
    console.log("You're out of the game!");
    isAlive = false;
}

// CASH OUT!
console.log(hasBlackJack);
console.log(isAlive);
```
# Add the message variable
1. Declare a variable called message and assign its value to an empty string
2. Reassign the message variable to the string we're logging out
3. Log it out!
```js
// 1. Declare a variable called message and assign its value to an empty string
let message = "";
// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
    message = "Do you want to draw a new card?";
} else if (sum === 21) {
    message ="Wohoo! You've got Blackjack!";
    hasBlackJack = true;
} else {
    message = "You're out of the game!";
    isAlive = false;
}

// 3. Log it out!
console.log(message);
```
# Link to stylesheet
```html
<!-- Link to the index.css file -->
<link rel="stylesheet" href="index.css">
```
# Add basic styling
```css
/* Complete the CSS styling according to the provided design */

body {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-image: url(images/table.png);
    background-size: cover;
    text-align: center;
    color: white;
    font-weight: bold;
}

h1 {
    color: goldenrod;
}

#message-el {
    font-style: italic;
}
```
# Make the start button work
1. Create a button that says START GAME. Make it call a startGame() function when clicked
```html
<!-- 1. Create a button that says START GAME. -->
<!-- Make it call a startGame() function when clicked -->
<button onclick="startGame()">START GAME</button>
```
2. Create a startGame() function. Move the conditional below (line 11-20) inside the body of the function.
```js
// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message ="Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    console.log(message);
}
```
3. Style the button according to the provided design

text color - #016f32

width      - 150px

background - goldenrod
```css
/* 
3. Style the button according to the provided design
text color - #016f32
width      - 150px
background - goldenrod
 */

button {
    color: #016f32;
    width: 150px;
    background: goldenrod;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: bold;
    border: none;
    border-radius: 2px;
}
```
Output: 

[![image.png](https://i.postimg.cc/FRxsRBzp/image.png)](https://postimg.cc/9Rrjg1Gw)
# Display the message
1. Store the message-el paragraph in a variable called messageEl
2. Display the message in the messageEl using messageEl.textContent
```js
// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el");

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message ="Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message;
}
```
[![image.png](https://i.postimg.cc/MH7JCGBD/image.png)](https://postimg.cc/30xqpYn4)
# Display the sum
1. Give the sum paragraph an id of sum-el
```html
<!-- Give the sum paragraph an id of sum-el -->
<p id="sum-el">Sum:</p>
```
2. Store the sum paragraph in a variable called sumEl
3. Render the sum on the page using this format -> "Sum: 14"
```js
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el");

function startGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message ="Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}
```
[![image.png](https://i.postimg.cc/7ZmmZTrR/image.png)](https://postimg.cc/18VpWXt0)
# Display the cards
1. Give the cards paragraph and id of cards-el
```html
<!-- 1. Give the cards paragraph and id of cards-el -->
<p id="cards-el">Cards:</p>
```
2. Store the cards paragraph in a variable called cardsEl
3. Render the sum on the page using this format -> "Cards: 10 4"
```js
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el");

function startGame() {
    // 3. Render the sum on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message ="Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}
```
[![image.png](https://i.postimg.cc/VNcwFTVM/image.png)](https://postimg.cc/QFSv86sx)
# New Card button
1. Create a NEW CARD button, make it run newCard() on click
```html
<!-- 1. Create a NEW CARD button, make it run newCard() on click -->
<button onclick="newCard()">NEW CARD</button>
```
2. Create a function newCard() that logs out "Drawing a new card from the deck!"
```js
// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    console.log("Drawing a new card from the deck!");
}
```
3. Make sure that the two buttons have some space between each other when they are rendered out vertically
```css
/* 3. Make sure that the two buttons have some space between
each other when they are rendered out vertically */
button {
    color: #016f32;
    width: 150px;
    background: goldenrod;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: bold;
    border: none;
    border-radius: 2px;
    margin-bottom: 4px;
    margin-top: 4px;
}
```

[![image.png](https://i.postimg.cc/5NJ4zJgw/image.png)](https://postimg.cc/4n8RCrrd)
# Add to the sum when newCard is clicked
1. Create a card variable, and hard code its value to a nunber (2-11)
2. Add the new card to the sum variable
3. Call startGame()
```js
function newCard() {
    console.log("Drawing a new card from the deck!");
    // 1. Create a card variable, and hard code its value to a nunber (2-11)
    let card = 7;
    // 2. Add the new card to the sum variable
    sum += card;
    // 3. Call startGame()
    startGame();
}
```
[![image.png](https://i.postimg.cc/yYXL1MvQ/image.png)](https://postimg.cc/ZCn8jMkp)
# Rename the startGame function
```js
// Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message ="Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = 7;
    sum += card;
    renderGame();
}
```
# Solving our cards problem with an array
```js
let cards = [firstCard, secondCard]; // array - ordered list of items
...
function renderGame() {
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    // render out ALL the cards we have
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message ="Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}
```
# Creating the cards array
1. Create a new array - cards - that contains firstCard and secondCard
2. Refer to the cards array when rendering out the cards
```js
let firstCard = 10;
let secondCard = 4;
// 1. Create a new array - cards - that contains firstCard and secondCard
let cards = [firstCard, secondCard]; // array - ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    renderGame();
}

function renderGame() {
    // 2. Refer to the cards array when rendering out the cards
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message ="Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = 7;
    sum += card;
    renderGame();
}
```
# Push a new card to array
```js
function newCard() {
    let card = 7;
    sum += card;
    // Push the card to the cards array
    cards.push(card);
    console.log(cards);
    renderGame();
}
```
[![image.png](https://i.postimg.cc/cCmRMfJ6/image.png)](https://postimg.cc/tnsn9ZWH)
# Use loop to render cards
Create a for loop that renders out all the cards instead of just two
```js
function renderGame() {
    cardsEl.textContent = "Cards: ";
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message ="Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}
```
[![image.png](https://i.postimg.cc/wjzNzwTs/image.png)](https://postimg.cc/7fBhMMzx)
# Using a function to set the card values
1. Create a function getRandomCard() that always returns the number 5
```js
// 1. Create a function getRandomCard() that always returns the number 5
function getRandomCard() {
    return 5;
}
```
2. Use getRandomCard() to set the values of firstCard and secondCard
```js
// 2. Use getRandomCard() to set the values of firstCard and secondCard
let firstCard = getRandomCard();
let secondCard = getRandomCard();
```
3. Use the getRandomCard() go set the value of card
```js
function newCard() {
    // 3. Use the getRandomCard() go set the value of card
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}
```
[![image.png](https://i.postimg.cc/TwX253h7/image.png)](https://postimg.cc/XZQ6T3fd)
# Make getRandomCard() work
```js
// Make this function return a random number between 1 and 13
function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1;
}
```
# Complete getRandomNumber function
If randomNUmber > 10 -> return 10, else if randomNumber === 1 -> return 11. Otherwise, return randomNumber.
```js
function getRandomCard() {
    // if 1 -> return 11
    // if 11 - 13 -> return 10
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}
```
# Assign values in the startGame function
1. Generate two random numbers
2. Re-assign the cards and sum variables so that the game can start
```js
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    // Generate two random numbers
    // Re-assign the cards and sum variables so that the game can start
    renderGame();
}
```
# Only trigger newCard() if you are allowed to
```js
function newCard() {
    // Only allow the player to get a new card if she is alive and does not have blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
}
```
# Object sneak peek
```html
<p id="player-el"></p>
```
```js
let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
```
# Use an object to store player data
1. Create a paragraph with an id of "player-el"
2. Create the player object. Give it two keys: name and chips
3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
4. Render the player's name and chips in playerEl;

```html
<!-- 1. Create a paragraph with an id of "player-el" -->
<p id="player-el"></p>
```
```js
// 2. Create the player object. Give it two keys: name and chips
let player = {
    name: "Quang Anh",
    chips: 175
};

// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el");

// 4. Render the player's name and chips in playerEl;
playerEl.textContent = player.name + ": $" + player.chips;
```