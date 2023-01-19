# Variables practice
1. Create two variables, firstName and lastName
2. Concatenate the two variables into a third variable called fullName
3. Log fullName to the console
```js
// Create two variables, firstName and lastName
let firstName = "Quang Anh";
let lastName = "Nguyen";
// Concatenate the two variables into a third variable called fullName
let fullName = lastName + " " + firstName;
// Log fullName to the console
console.log(fullName);
```
# Concatenate two strings in a function
Create a function that logs out "Hi there, Linda!" when called
```js
let name = "Linda";
let greeting = "Hi there";

// Create a function that logs out "Hi there, Linda!" when called
function greetLinda() {
    console.log(greeting + ", " + name + "!");
}

greetLinda();
```
# Increment and decrementing
1. Create two functions: add3Points() and remove1Point(), and have them add/remove points to/from the myPoints variable.
2. Call the functions to that the line below logs out 10.
```js
let myPoints = 3;

// Create two functions: add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points() {
    myPoints += 3;
}

function remove1Point() {
    myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

// Call the functions to that the line below logs out 10;
console.log(myPoints);
```
# Strings and numbers
Try to predict what each of the lines will log out
```js
// Try to predict what each of the lines will log out
console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114 
```
Output:
```txt
22
18
65
My points: 59
4
1114
```
# Rendering an error message
When the user clicks the purchase button, render out "Something went wrong, please try again" in the paragraph that has the id="error".
```html
<html>
    <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <img src="images/shoe.jpeg" alt="Nike shoe">
        <p>Nike shoe</p>
        <button onclick="purchase()">Purchase - $149</button>
        <p id="error"></p>
        <script src="index.js"></script>
    </body>
</html>
```
```css
body {
    background: white;
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;
}

img {
    width: 200px;
    display: block;
}
p {
    font-weight: 600;
    margin-bottom: 5px;
}
button {
    background: white;
    color: black;
    margin-top: 10px;
    border: 1px solid black;
    padding: 10px 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 20px;
}

#error {
    color: red;
    font-weight: 200;
}
```
```js
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorRender = document.getElementById("error");
console.log(errorRender);

function purchase() {
    console.log("Button clicked");
    errorRender.textContent = "Something went wrong, please try again";
}
```
# Calculator challenge
```html
<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <span id="num1-el"></span>
        <span id="num2-el"></span>
        <br>
        <button onclick="add()">Add</button>
        <button onclick="subtract()">Subtract</button>
        <button onclick="divide()">Divide</button>
        <button onclick="multiply()">Multiply</button>
        <br>
        <span id="sum-el">Sum: </span>
        <script src="index.js"></script>
    </body>
</html>
```
```css
body {
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px 0;
    margin: 0;
    text-align: center;
}

span {
    border-bottom: 2px solid black;
    padding: 4px;
}

button {
    margin: 20px 0;
    background: white;
    color: black;
    border: 1px solid black;
    font-weight: bold;
    cursor: pointer;
    padding: 5px 8px;
}
```
1. Create four functions: add(), subtract(), divide(), multiply()
2. Call the correct function when the user clicks on one of the buttons
3. Perform the given calculation using num1 and num2
4. Render the result of the calculation in the paragraph with id="sum-el"

E.g. if the user clicks on the "Plus" button, you should render: "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
```js
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
function add() {
    let result = num1 + num2;
    sumEl.textContent = "Sum: " + result;
}

function subtract() {
    let result = num1 - num2;
    sumEl.textContent = "Difference: " + result;
}

function divide() {
    let result = num1 / num2;
    sumEl.textContent = "Divide: " + result;
}

function multiply() {
    let result = num1 * num2;
    sumEl.textContent = "Product: " + result;
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
```
# Solo Project - Basketball Scoreboard
```html
<html>

<head>
    <title>Basketball Scoreboard</title>
    <link rel="stylesheet" href="style.css">
    <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'>
</head>

<body>
    <div class="container">
        <div class="home">
            <h1>HOME</h1>
            <button id="home--btn">0</button>
            <div class="operate">
                <button id="btn--one" onclick="plusOne()">+1</button>
                <button id="btn--two" onclick="plusTwo()">+2</button>
                <button id="btn--three" onclick="plusThree()">+3</button>
            </div>
        </div>

        <div class="guest">
            <h1>GUEST</h1>
            <button id="guest--btn">0</button>
            <div class="operate">
                <button id="btn--one" onclick="guestPlusOne()">+1</button>
                <button id="btn--two" onclick="guestPlusTwo()">+2</button>
                <button id="btn--three" onclick="guestPlusThree()">+3</button>
            </div>
        </div>
    </div>
    <div class="container-two">

        <button class="save--btn" onclick="saveClick()">SAVE</button>
        <p id="home--count" onclick="homeCount">Home Count : </p>
        <p id="guest--count" onclick="guestCount">Guest Count : </p>
    </div>

    <script src="index.js"></script>
</body>

</html>
```
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container{
    margin:33px auto;
    background-color: rgb(7, 32, 103);
    color: white;
    display: flex;
    width: 550px;
    height: 350px;
    padding: 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
}
h1{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 40px;
}
.guest , .home{
    margin: 0px 25px;
}
#home--btn, #guest--btn{
    width: 155px;
    height: 120px;
    margin: 15px;
    background-color: black;
    color: rgb(255, 53, 90);
    font-size: 90px;
    font-family: 'Orbitron', sans-serif;
    border-radius: 7px;
}
.operate{
    width: 178px;
    height: 55px;
    margin-right: 0px;
    padding-left: 7px;
    /* border: 1px solid white; */
}
.operate > button{
    width: 45px;
    height: 45px;
    margin: 3px;
    background-color: transparent;
    border: 2px solid rgb(219, 219, 219);
    font-size: 18px;
    color: rgb(219, 219, 219);
    border-radius: 5px;
    font-family: 'Orbitron', sans-serif;

    
}
.operate > button:active{
    background-color: rgba(255, 255, 255, 0.275);
}


.container-two{
    margin:33px auto;
    background-color: rgb(161, 208, 255);
    color: white;
    display: flex;
    flex-direction: column;
    width: 550px;
    height: 140px;
    padding: 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    border: 3px solid rgb(60, 60, 60);
    padding: 20px;
    overflow-x: auto;
    overflow-y: auto;
}
.save--btn{
    margin-top: 10px;
    width: 150px;
    padding: 10px 7px;
    border-radius: 3px;
    position: sticky;
    top: 0;
   
    font-size: 13px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: rgb(4, 16, 109);
    border: none;
}
.save--btn:active{
    background-color: rgb(70, 80, 200);
}
.container-two >p{
    color: black;
    font-weight: bold;
    font-size: 18px;
    
}
#home--count{
    margin-top: 10px;
    margin-bottom: 10px;

}
#guest--count{
    margin-bottom: 20px;
}
```
```js
// Home status 

let homeCount = 0;
let changeCount = document.getElementById("home--btn");

function plusOne() {
    homeCount += 1;
    changeCount.textContent = homeCount;
}

function plusTwo() {
    homeCount += 2;
    changeCount.textContent = homeCount;
}

function plusThree() {
    homeCount += 3;
    changeCount.textContent = homeCount;
}

// Guest status
let guestCount = 0;
let guestCountChange = document.getElementById("guest--btn");

function guestPlusOne() {
    guestCount += 1;
    guestCountChange.innerText = guestCount;
}

function guestPlusTwo() {
    guestCount += 2;
    guestCountChange.innerText = guestCount;
}

function guestPlusThree() {
    guestCount += 3;
    guestCountChange.innerText = guestCount;
}

// save items

let saveCountHome;
let saveCountGuest;
let domHome = document.getElementById("home--count");
let domGuest = document.getElementById("guest--count");

function saveClick() {
    saveCountHome = homeCount + "--";
    domHome.textContent += saveCountHome;

    saveCountGuest = guestCount + "--";
    domGuest.textContent += saveCountGuest;
}
```
You can see all projects at: https://pracital-part1-js-course-scrimba.netlify.app/