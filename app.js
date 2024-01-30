const inputt = document.querySelectorAll(".inputs")
const lastbtnn = document.querySelector(".lastbtn")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const errorspan = document.querySelectorAll(".errorspan")
console.log(errorspan)

lastbtnn.addEventListener("focusin", () => {
    if (inputt[0].value === '') {
        inputt[0].style.borderColor = "red"
        one.style.display = "block"
        errorspan[0].style.display = "block"
        
    }
    if (inputt[1].value === '') {
        inputt[1].style.borderColor = "red"
        two.style.display = "block"
        errorspan[1].style.display = "block"
        
    }
    if (inputt[2].value === '' || inputt[2].value !== '') {
        inputt[2].style.borderColor = "red"
        three.style.display = "block"
        errorspan[2].style.display = "block"
        
    }
    if (inputt[2].value.includes("@")) {
        inputt[2].style.borderColor = 'black'
        three.style.display = "none"
        errorspan[2].style.display = "none"
        
    }
    if (inputt[3].value === '') {
        inputt[3].style.borderColor = "red"
        four.style.display = "block"
        errorspan[3].style.display = "block"
    }
})
lastbtnn.addEventListener("focusout", () => {
    inputt.forEach((input) => {
        input.style.borderColor = 'black'
        one.style.display = 'none'
        two.style.display = 'none'
        three.style.display = 'none'
        four.style.display = 'none'
    })
    errorspan.forEach((spans) => {
        spans.style.display = 'none'
    })
})

