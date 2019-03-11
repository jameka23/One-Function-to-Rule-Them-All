console.log("helllloo")
/*
You may notice that your code to enable individual powers (not all at once) is very similar. To keep your code DRY, make one function that will handle activating a power depending on which button is clicked. (Hint: one way to get started is to use event.target.id.split("-") in your function)
*/
// function flightHandlerFunction(){
//     const section = document.getElementById("flight")
//     section.classList.toggle("enabled")
// }

// function mindHandlerFunction(){
//     const section = document.getElementById("mindreading")
//     section.classList.toggle("enabled")
// }

// function xrayHandlerFunction(){
//     const section = document.getElementById("xray")
//     section.classList.remove("disabled")
//     section.classList.add("enabled")
// }

function flightHandlerFunction(e){
    console.log(e.target.id.split("-"))    

    section.classList.remove("disabled")
    section.classList.add("enabled")   
}

document.querySelectorAll("#activate").split("-").addEventListener("click", (e) => {
    console.log(e)    
})
// document.querySelector("#activate-mindreading").addEventListener("click", mindHandlerFunction)
// document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)

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
