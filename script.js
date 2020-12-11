// References
var btnTranslate = document.querySelector("#translate-btn");
var translateInput     = document.querySelector("#translate-input");
var output    = document.querySelector("#translate-output")

// Event Listener
btnTranslate.addEventListener("click", clickEventHandler);


const serverURL = "https://api.funtranslations.com/translate/minion.json"

function constructURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured " + error);
    alert("Server is down! Please try after some time.")
}

// Callback
function clickEventHandler() {
    var input = translateInput.value;

    fetch(constructURL(input))
        .then(response => response.json())
        .then(json => 
            output.innerText = (json.contents.translated))
        .catch(errorHandler)
}


