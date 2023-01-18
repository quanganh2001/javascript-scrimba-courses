// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el");
// 1. Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
let count = 0;

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
    // Change the count to 0
    countEl.textContent = 0;
    console.log(count);
}