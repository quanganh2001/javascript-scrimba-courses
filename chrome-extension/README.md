# Add button and input tag
1. Create an input element with type="text" and id="input-el"
2. Create a SAVE INPUT button with id="input-btn"
```html
<!-- Create an input element with type="text" and id="input-el" -->
<input type="text" id="input-el">
<!-- Create a SAVE INPUT button with id="input-btn" -->
<button id="input-btn">SAVE INPUT</button>
```
# Style the button and input tag
Style our app according to the provided design!

green color -> `#5f9341`
```css
body {
    margin: 0;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
}

/*

Style our app according to the provided design!

green color -> #5f9341

*/


input {
	width: 100%;
    padding: 10px;
	box-sizing: border-box;
	border: 1px solid #5f9341;
	margin-bottom: 4px;
}

button {
	background: #5f9341;
	color: white;
	padding: 10px 20px;
	border: none;
	font-weight: bold;
}
```
# Make input button work with onclick
Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
```html
<button id="input-btn" onclick="saveLead()">SAVE INPUT</button>
```
```js
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
function saveLead() {
	console.log("Button clicked!")
}
```
# Refactor to addEventListener
```js
let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function() {
	console.log("Button clicked from addEventListener");
});
```
# Your turn to refactor
Refactor the code so that it uses `.addEventListener()` when you click the SAVE INPUT Button
```js
// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT Button

let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function() {
	console.log("Button clicked!");
})
```
# Create the myLeads array and inputEl
Create two variables:
- myLeads -> should be assigned to an empty array
- inputEl -> should be assigned to the text input field
```js
// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
```
# Push to the myLeads array
Push the value "www.awesomelead.com" to myArray when the input button is clicked
```js
// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function() {
	myLeads.push("www.awesomelead.com");
	console.log(myLeads);
});
```
# Push the value from the input field
Push the value from inputEl into the myLeads array, instead of the hard-coded "www.awesomeleads.com" value. If you cannot do it exercise, try search on Google "get value from input field javascript"
```js
inputBtn.addEventListener("click", function() {
	// Push the value from inputEl into the myLeads array
	// instead of the hard-coded "www.awesomeleads.com" value
	// Google -> "get value from input field javascript"
	myLeads.push(inputEl.value);
	console.log(myLeads);
});
```
# Use a for loop to log out leads
Log out the items in the myLeads array using a for loop
```js
// Log out the items in the myLeads array using a for loop
for (let i = 0; i < myLeads.length; i++) {
	console.log(myLeads[i]);
}
```
# Create unordered list
1. Create an unordered list element (`<ul>`) with `id="ul-el"`
2. Grab the unordered list and store it in a const variable called ulEl
```html
<!-- 1. Create an unordered list element (<ul>) with id="ul-el" -->
<ul id="ul-el"></ul>
```
```js
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el");
```
# Render the leads in the unordered list
Render the leads in the unordered list using `ulEl.textContent`
```js
// Render the leads in the unordered list using ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
	ulEl.textContent += myLeads[i] + " ";
}
```

Result: 
```txt
www.awesomelead.com www.epiclead.com www.greatlead.com
```

# How to render <li> elements with innerHTML
```js
for (let i = 0; i < myLeads.length; i++) {
	ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}
```
Result:

[![image.png](https://i.postimg.cc/5NVtvjTp/image.png)](https://postimg.cc/mhmRWZbF)

# Render li elements with innerHTML
Replace `.textContent` with `.innerHTML` and use `<li>` tags
```js
// Replace .textContent with .innerHTML and use <li> tags
for (let i = 0; i < myLeads.length; i++) {
	ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}
```
Result:

[![image.png](https://i.postimg.cc/jSWg6qG3/image.png)](https://postimg.cc/Snhfk4Qc)

# Use createElement() and append() instead of innerHTML
Let's try a different method: Use createElement() and append() instead of innerHTML
```js
// Let's try a different method
for (let i = 0; i < myLeads.length; i++) {
	// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
	// create element
	// set text content
	// append to ul
	const li = document.createElement("li");
	li.textContent = myLeads[i];
	ulEl.append(li);
}
```

Results are the same.

# Improving the performance of our app
1. Create a variable, listItems, to hold all the HTML for the list items, assign it to an empty string
2. Add the item to the listItems variable instead of the ulEl.innerHTML
3. Render the listItems inside the unordered list using ulEl.innerHTML
```js
// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = "";
for (let i = 0; i < myLeads.length; i++) {
	// 2. Add the item to the listItems variable instead of the ulEl.innerHTML
	listItems += "<li>" + myLeads[i] + "</li>";
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems;
```

Results are the same.
# Create the render function
1. Wrap the code below in a renderLeads() function
2. Call the renderLeads() function
```js
inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value);
	// 2. Call the renderLeads() function
	renderLeads();
});

// 1. Wrap the code below in a renderLeads() function
function renderLeads() {
	let listItems = "";
	for (let i = 0; i < myLeads.length; i++) {
		listItems += "<li>" + myLeads[i] + "</li>";
	}
	ulEl.innerHTML = listItems;
}
```
# Clear the input field
```js
inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value);
	// Clear out the input field
	inputEl.value = "";
	renderLeads();
});
```
# Add a tag
Wrap the lead in an anchor tag (`<a>`) inside the `<li>`

Can you make th link open in a new tab?
```js
function renderLeads() {
	let listItems = "";
	for (let i = 0; i < myLeads.length; i++) {
		// Wrap the lead in an anchor tag (<a>) inside the <li>
		// Can you make th link open in a new tab?
		listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
		console.log(listItems);
	}
	ulEl.innerHTML = listItems;
}
```
# Template Strings
```js
function renderLeads() {
	let listItems = "";
	for (let i = 0; i < myLeads.length; i++) {
		// Wrap the lead in an anchor tag (<a>) inside the <li>
		// Can you make th link open in a new tab?
		listItems += `
			<li>
				<a target='_blank' href='${myLeads[i]}'>
					${myLeads[i]}
				</a>
			</li>
		`;
	}
	ulEl.innerHTML = listItems;
}
```
# Refactor the app to use a template string
```js
function renderLeads() {
	let listItems = "";
	for (let i = 0; i < myLeads.length; i++) {
		// Refactor the code below to use a template string
		listItems += `
			<li>
				<a target='_blank' href='${myLeads[i]}'>
					${myLeads[i]}
				</a>
			</li>
		`;
	}
	ulEl.innerHTML = listItems;
}
```
# Style the list
Style the list according to the design
```css
/* STYLE THE LIST ACCORDING TO THE DESIGN */
ul {
	margin-top: 20px;
	list-style: none;
	padding-left: 0;
}

li {
	margin-top: 5px;
}

a {
	color: #5f9341;
}
```

Output:

[![image.png](https://i.postimg.cc/25K5nNkD/image.png)](https://postimg.cc/rd5cLbRn)

# Your first localStorage
1. Save a key-value pair in localStorage
2. Refresh the page. Get the value and log it to the console
3. Clear localStorage
```js
localStorage.setItem("myName", "Per Harald Borgen");
let name = localStorage.getItem("myName");
console.log(name);
localStorage.clear();
```
# Storing arrays in localStorage
1. Turn the myLeads string into an array
2. Push a new value to the array
3. Turn the array into a string again
4. Console.log the string using typeof to verify that it's a string
```js
let myLeads = `["www.awesomelead.com"]`;

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads);
// 2. Push a new value to the array
myLeads.push("www.epiclead.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads);
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads);
```
The result is string.
# Save the leads to localStorage
Save the myLeads array to localStorage, remember: `JSON.stringify()`
```js
inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value);
	inputEl.value = "";
	// Save the myLeads array to localStorage
	// PS: remember JSON.stringify()
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	renderLeads();

	// To verify that it works:
	console.log( localStorage.getItem("myLeads"));
});
```

Output:

[![image.png](https://i.postimg.cc/gJLJYzC7/image.png)](https://postimg.cc/9RVVbhFP)
# Get the leads from localStorage
1. Get the leads from the localStorage - PS: `JSON.parse()`
2. Store it in a variable, leadsFromLocalStorage
3. Log out the variable
```js
// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );
console.log(leadsFromLocalStorage);
localStorage.clear();
```
# Checking localStorage before rendering
1. Check if leadsFromLocalStorage is truthy
2. If so, set myLeads to its value and call renderLeads()
```js
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );
console.log(leadsFromLocalStorage);
// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	renderLeads();
}
```
# Style the delete button
Style the button according to the provided design 
```css
/* Style the button according to the provided design */

#delete-btn {
	background: white;
	color: #5f9341;
}
```
Output:

[![image.png](https://i.postimg.cc/RCg4XMdf/image.png)](https://postimg.cc/Dm49z3ty)
# Make the delete button work
1. Store the delete button in a deleteBtn variable
2. Listen for double clicks on the delete button (google it!)
3. When clicked, clear localStorage, myLeads, and the DOM!
```js
// 1. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn");

// 2. Listen for double clicks on the delete button (google it!)
// 3. When clicked, clear localStorage, myLeads, and the DOM!
deleteBtn.addEventListener("dblclick", function() {
	localStorage.clear();
	myLeads = [];
	renderLeads();
}); 
```
# Refactor renderLeads() to use a parameter
Refector the function so that it takes a parameter, leads, that it uses instead of the global myLeads variable. Remember to update all invocations of the function as well.
```js
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// Refector the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations 
// of the function as well.

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})
```
# Create the tabBtn
1. Grab the SAVE TAB button and store it in a tabBtn variable
2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
```js
// 1. Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn = document.getElementById("tab-btn");

const tabs = [
	{url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function() {
	console.log(tabs[0].url);
})
```

Output: https://www.linkedin.com/in/per-harald-borgen/
# Save the tab url
Save the URL instead of logging it out
```js
tabBtn.addEventListener("click", function() {
	// Save the URL instead of logging it out
	myLeads.push(tabs[0].url);
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	render(myLeads);
})
```
As you can see, it save the Linkedln URL
# Use the Chrome API to get the tab
```js
tabBtn.addEventListener("click", function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		myLeads.push(tabs[0].url);
		localStorage.setItem("myLeads", JSON.stringify(myLeads));
		render(myLeads);
	});
})
```
manifest.json
```json
{
    "manifest_version": 3,
    "version": "1.0",
    "name": "Leads tracker",
    "action": {
        "default_popup": "index.html",
        "default_icon": "icon.png"
    },
    "permissions": [
        "tabs"
    ]
}
```
# Deploy the final version
Go to Settings -> Extensions -> Load unpacked -> Choose the leads tracker folder and try it now!