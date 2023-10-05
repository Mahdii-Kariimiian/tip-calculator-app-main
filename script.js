const $ = document
const billInput = $.getElementById("bill-input")
const button_5 = $.getElementById("button-5")
const button_10 = $.getElementById("button-10")
const button_15 = $.getElementById("button-15")
const button_25 = $.getElementById("button-25")
const button_50 = $.getElementById("button-50")
const button_custom = $.getElementById("button-custom")
const numberOfPeople= $.getElementById("number-of-people")
const numberPeople = $.querySelector(".number-of-people")
const tipAmountPerPerson = $.querySelector(".tip-amount-per-person")
const totalAmountPerPerson = $.querySelector(".total-amount-per-person")
const resetBtn = $.getElementById("reset-btn")
let bill = 0
let billPlusTip = 0
// grab Bill amount
billInput.addEventListener("input", () => {
    bill = parseFloat(billInput.value);
    billPlusTip = bill + ((bill*parseFloat(button_custom.value))/100) 
    emptyIsNaNFunc()
});

// calculating tip
    button_5.addEventListener('click' , ()=>{
        billPlusTip = parseFloat(billInput.value) + ((bill*5)/100)
        button_custom.value = ""
        emptyIsNaNFunc()
    })
    button_10.addEventListener('click' , ()=>{
        billPlusTip = parseFloat(billInput.value) + ((bill*10)/100)
        button_custom.value = ""
        emptyIsNaNFunc()
    })
    button_15.addEventListener('click' , ()=>{
        billPlusTip = parseFloat(billInput.value) + ((bill*15)/100)
        button_custom.value = ""
        emptyIsNaNFunc()
    })
    button_25.addEventListener('click' , ()=>{
        billPlusTip = parseFloat(billInput.value) + ((bill*25)/100)
        button_custom.value = ""
        emptyIsNaNFunc()
    })
    button_50.addEventListener('click' , ()=>{
        billPlusTip = parseFloat(billInput.value) + ((bill*50)/100)
        button_custom.value = ""
        emptyIsNaNFunc()
    })
    button_custom.addEventListener('input' , ()=>{
            billPlusTip = bill + ((bill*parseFloat(button_custom.value))/100) 
            emptyIsNaNFunc()
    })
// grab number of people
numberOfPeople.addEventListener("input" , ()=> {
        emptyIsNaNFunc()
    })
// Calculate total amount per person
function calculateTotal() {
    totalPerPerson = (billPlusTip / parseFloat(numberOfPeople.value)).toFixed(2)
    totalAmountPerPerson.innerText = `$ ${totalPerPerson}`
    calculateTip ()
}
// Calculate tip amount per person
function calculateTip (){
    tipPerPerson = ((billPlusTip - parseFloat(billInput.value)) / parseFloat(numberOfPeople.value)).toFixed(2)
    tipAmountPerPerson.innerText = `$ ${tipPerPerson}`

    if (isNaN(totalPerPerson)){
        totalAmountPerPerson.innerText = "choose tip %"
        tipAmountPerPerson.innerText = "choose tip %"
    }
}
    
//alerts for empty or invalid input 
function emptyIsNaNFunc() {
    if (!billInput.value) {
        billInput.classList.add("border")
        billInput.classList.add("border-rose-500")
        billInput.classList.add("bg-rose-50")
    } else if (isNaN(billInput.value)) {
        billInput.classList.add("border")
        billInput.classList.add("border-rose-700")
        billInput.classList.add("bg-rose-50")
    } else {
        billInput.classList.remove("border")
        billInput.classList.remove("border-rose-500")
        billInput.classList.remove("bg-rose-50")
    }
    
    if (!numberOfPeople.value) {
        numberOfPeople.classList.add("outline")
        numberOfPeople.classList.add("outline-rose-500")
        numberOfPeople.classList.add("bg-rose-50")
    } else if (isNaN(numberOfPeople.value)) {
        numberOfPeople.classList.add("outline")
        numberOfPeople.classList.add("outline-rose-500")
        numberOfPeople.classList.add("bg-rose-50")
    } else {
        numberOfPeople.classList.remove("outline")
        numberOfPeople.classList.remove("outline-rose-500")
        numberOfPeople.classList.remove("bg-rose-50")
    }

    if (numberOfPeople.value && billInput.value) {
        calculateTotal()
    }
}

// reset button
function reset () {
    billInput.value = ""
    numberOfPeople.value = ""
    button_custom.classList.remove("outline")
    button_custom.classList.remove("outline-rose-500")
    button_custom.classList.remove("bg-rose-50")
    numberOfPeople.classList.remove("outline")
    numberOfPeople.classList.remove("outline-rose-500")
    numberOfPeople.classList.remove("bg-rose-50")
    billInput.classList.remove("border")
    billInput.classList.remove("border-rose-500")
    billInput.classList.remove("bg-rose-50")
    totalAmountPerPerson.innerText = "$00.00"
    tipAmountPerPerson.innerText = "$00.00"
}

resetBtn.addEventListener("click" , reset) 

