// References
var btnTranslate = document.querySelector("#btn-translate");
var txtInput     = document.querySelector("#txt-input");
var outputDiv    = document.querySelector("#output-div")

// Event Listener
btnTranslate.addEventListener("click", clickEventHandler);

// Callback
function clickEventHandler() {
    // console.log(txtInput.value);
    // var txtInputValue = txtInput.value;
    outputDiv.innerText = "dgdiyiidiy " + txtInput.value;
}
