console.log("helllloo")


// The learning objective of this exercise is writing event listeners to handle button clicks, and modifying the classList of DOM elements when those events are broadcast by the browser.

/*
1. Add the correct string as the first argument to addEventListener()
2. Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section           id="flight"> (section, not button) and replace it with a class of enabled.
3. Have your developer tools open. When you click the button, the following element...

*/
function flightHandlerFunction(){
    const section = document.getElementById("flight")
    section.classList.remove("disabled")
    section.classList.add("enabled")
}

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

/*
Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements
*/

function mindHandlerFunction(){
    const section = document.getElementById("mindreading")
    section.classList.remove("disabled")
    section.classList.add("enabled")
}

function xrayHandlerFunction(){
    const section = document.getElementById("xray")
    section.classList.remove("disabled")
    section.classList.add("enabled")
}

document.querySelector("#activate-mindreading").addEventListener("click", mindHandlerFunction)
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)

/*
Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the   document.querySelectorAll() method for these.
*/

function activateHandler(){
    const sections = document.querySelectorAll(".power")
    for(let i = 0; i < sections.length; i++){
        sections[i].classList.remove("disabled")
        sections[i].classList.add("enabled")
    }
}

function deactivateHandler(){
    const sections = document.querySelectorAll(".power")
    for(let i = 0; i < sections.length; i++){
        sections[i].classList.remove("enabled")
        sections[i].classList.add("disabled")
    }
}

document.querySelector("#activate-all").addEventListener("click",activateHandler)
document.querySelector("#deactivate-all").addEventListener("click",deactivateHandler)