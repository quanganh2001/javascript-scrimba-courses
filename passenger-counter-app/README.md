# Setting up file
```html
<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>People entered:</h1>
        <h2 id="count-el">0</h2>
    </body>
</html>
```
```css
body {
    background-image: url("station.jpg");
    background-size: cover;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    text-align: center;
}

h1 {
    margin-top: 10px;
    margin-bottom: 10px;
}

h2 {
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 20px;
}

button {
    border: none;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    font-weight: bold;
    width: 200px;
    margin-bottom: 5px;
    border-radius: 5px;
}

#increment-btn {
    background: darkred;
}

#save-btn {
    background: darkgreen;
}


```
# Write your first JavaScript variable
1. Create a variable myAge and set its value to your age
2. Log the myAge variable to the console
```js
// 1. Create a variable myAge and set its value to your age
var myAge = 22;
// 2. Log the myAge variable to the console
console.log(myAge);
```
# Basic mathematical operations
1. Create two variables myAge and humanDogRatio
2. Multiply the two together and store the result in myDogAge
3. Log myDogAge to the console
```js
// 1. Create two variables myAge and humanDogRatio
let myAge = 22;
let humanDogRatio = 7;
// 2. Multiply the two together and store the result in myDogAge
let myDogAge = myAge * humanDogRatio;
// 3. Log myDogAge to the console
console.log(myDogAge);
```
# Reassigning and incrementing
1. Create a variable, bounsPoints. Initialize it as 50. Increase it to 100
2. Decrease it down to 25, and then finally increase it to 70
3. Console.log the value after each step
```js
// Create a variable, bounsPoints. Initialize it as 50. Increase it to 100
let bounsPoints = 50;
console.log(bounsPoints);
bounsPoints += 50;
console.log(bounsPoints);
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step
bounsPoints -= 75;
console.log(bounsPoints);

bounsPoints += 45;
console.log(bounsPoints);
```
Output: 50, 100, 25, 70
# Adding a button
Let's create a INCREMENT button with the `id="increment-btn"`
```html
<!-- Create a INCREMENT button with the id="increment-btn" -->
<button id="increment-btn">INCREMENT</button>
```
# The onclick event listener
1. initialize the count as 0
2. listen for clicks on the increment button
3. increment the count variable when the button is clicked
4. change the count-el in the HTML to reflect the new count
```html
<button id="increment-btn" onclick="increment()">INCREMENT</button>
```
```js
function increment() {
    console.log("The button was clicked");
}
```
# Using functions to write less code
```js
// Setting up the race

function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}

countdown();
// GO!
// Players are running the race!
// Race is finished!

// Get ready for a new race

countdown();
```
# Write your first function
1. Create a function (you decide the name) that logs out the number 42 to the console
2. Call/invoke the function
```js
// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function
function myAge() {
    console.log(42);
}

myAge();
```
# Write a function that logs the sum
Create a function that logs out the sum of all the lap times
```js
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// Create a function that logs out the sum of all the lap times
function totalLaps() {
    console.log(lap1 + lap2 + lap3);
}

totalLaps();
```
Output: 103
# Write a function that increments
1. Create a function that increments the lapsCompleted variable with one
2. Run it three times
```js
let lapsCompleted = 0;

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function lapsIncrements() {
    lapsCompleted += 1;
}

lapsIncrements();
lapsIncrements();
lapsIncrements();

console.log(lapsCompleted);
```
Output is 3
# Increment on clicks
```js
// change the count-el in the HTML to reflect the new count
let count = 0;

function increment() {
    count += 1;
    console.log(count);
}
```
# Display the count with innerText
Let's change the count-el in the HTML to reflect the new count
```js
// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment() {
    countEl.innerText = count += 1;
    console.log(count);
}
```
# Create the save button
1. Create a function, save(), which logs out the count when it's called
2. Create a SAVE button, set the id="save-btn" and call the save() function when it's clicked
```js
// 1. Create a function, save(), which logs out the count when it's called
function save() {
    console.log(count);
}
```
```html
<!-- Create a SAVE button, set the id="save-btn" and call the save() function when it's clicked -->
<button id="save-btn" onclick="save()">SAVE</button>
```
# Write your first string variable
1. Create a variable, message, that stores the string: "You have tree new notifications"
```js
let username = "per";

// Create a variable, message, that stores the string: "You have tree new notifications"
let message = "You have tree new notifications";
console.log(message + ", " + username + "!");
```
Output: You have tree new notifications, per!
2. Create a variable messageToUser, that contains the message we have logged
```js
// Create a variable messageToUser, that contains the message we have logged
let messageToUser = message + ", " + username + "!";
console.log(messageToUser);
```
Output is the same
# Log greeting to console
1. Create two variables, name and greeting. The name variable should store your name, and the greeting should store e.g. "Hi, my name is "
2. Create a third variable, myGreeting, that contatenates the two strings
3. Log myGreeting to the console
```js
let name = "Per Harald Borgen"
let greeting = "Hi, my name is "
let myGreeting = greeting + name
console.log(myGreeting)
```
# Strings vs. Numbers
```js
console.log(4 + 5); // Output: 9
console.log("2" + "4"); // Output: 24
console.log("5" + 1); // Output: 51
console.log(100 + "100"); // Output: 100100
```
# Render a welcome message
Grab the welcome-el paragraph and store it in a variable called welcomeEl

Create two variables (name & greeting) that contains your name and the greeting we want to render on the page.

Render the welcome message using welcomeEl.innerText
```html
<html>
    <head>
    </head>
    <body>
        <p id="welcome-el"></p>
        <script src="index.js"></script>
    </body>
</html>
```
```js
// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById('welcome-el');
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
var name = "Quang Anh";
var greeting = "Welcome back, ";
welcomeEl.innerText = greeting + name;
```
# Improve the message with string concatenation
Add an emoji to the end!
```js
var name = "Quang Anh";
var greeting = "Welcome back, ";
welcomeEl.innerText = greeting + name;
// Add an emoju to the end! 👏
welcomeEl.innerText = welcomeEl.innerText + "👏";
```
# Use plus equal for count
Let's change this to use the plus equal technique you've learned
```js
function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1;
    countEl.innerText = count;
}
```
# Create the save feature
1. Grab the save-el paragraph and store it in a variable called saveEl
2. Create a variable that contains both the count and the dasth separator, i.e. "12 - "
3. Render the variable in the saveEl using innerText
```js
// 1. Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");

function save() {
    // 2. Create a variable that contains both the count and the dasth separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    let countStr = count + " - ";
    saveEl.innerText += countStr;
    console.log(count);
}
```
# Debugging online
You can using MDN (Mozila Development Networks)

Let's fix using textContent
```js
function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1;
    countEl.textContent = count;
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    // 2. Create a variable that contains both the count and the dasth separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using textContent
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(count);
}
```
# Set the count to 0
```js
// Change the count to 0
countEl.textContent = 0;
```

# Recap
- script tag
- variables
- numbers
- strings
- console.log()
- functions
- The DOM (Document Object Models)
- getElementByID()
- innerText

You can see full source code at:
1. https://codepen.io/quanganh2001/pen/yLqPyvX
2. https://plnkr.co/plunk/SLmuRrYBf7e9UGBT
3. https://codesandbox.io/s/passenger-counter-javascript-project-1zb7b5
4. https://passenger-counter-javascript-app.netlify.app/
