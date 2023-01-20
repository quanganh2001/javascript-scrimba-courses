// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorRender = document.getElementById("error");
console.log(errorRender);

function purchase() {
    console.log("Button clicked");
    errorRender.textContent = "Something went wrong, please try again";
}