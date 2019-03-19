console.log("helllloo")
/*
You may notice that your code to enable individual powers (not all at once) is very similar. To keep your code DRY, make one function that will handle activating a power depending on which button is clicked. (Hint: one way to get started is to use event.target.id.split("-") in your function)
*/


function handlerFunction (section){
    section.classList.toggle("enabled")
    section.classList.toggle("disabled")   
}

document.querySelector("#activate-flight").addEventListener("click", function(event){
    const section = document.getElementById(event.target.id.split("-")[1])
    handlerFunction(section)
})
document.querySelector("#activate-mindreading").addEventListener("click", function(event){
    const section = document.getElementById(event.target.id.split("-")[1])
    handlerFunction(section)
})
document.querySelector("#activate-xray").addEventListener("click", function(event){
    const section = document.getElementById(event.target.id.split("-")[1])
    handlerFunction(section)
})

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
