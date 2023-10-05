Tip Calculator

Junior challenge at frontendmentors.io 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I used](#what-i-learned)
- [Author](#author)

## Overview
This App takes the total amount of payment,the tip percentage and the number of people and calculates the tip amount and the total cost per person. I write this app with Tailwind and without a single line of CSS.

### Screenshot
### Links
- vercel: https://tip-calculator-app-main-sigma.vercel.app/

- frontendmentors: https://www.frontendmentor.io/solutions/tip-calculator-with-no-css-X46cRdXWn-


### Built with

- Semantic HTML5 markup
- Tailwind css
- javascript

### What I used

Here is a glimpse of what I used to build this mini project.
````
HTML and Tailwind

    <div class="container max-w-lg bg-white w-full
                md:flex md:w-2/3 md:max-w-2xl rounded-lg">

      <div class="relative bill-section p-5 
                  md:grow md:w-1/2">
          <p class="mb-1 text-slate-500">Bill</p>
          <input id="bill-input" class="relative hover:transition-all text-right w-full rounded-lg px-4 py-2 mb-6 bg-indigo-50 text-xl 
                                 hover:outline outline-2 outline-teal-400 cursor-pointer" 
                                 type="text" inputmode="numeric" placeholder="$">
                                 

JavaScript
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

````
## Author
Mahdi Karimian
- linkedin (www.linkedin.com/in/mahdi-karimian-116643273)
- Frontend Mentor – @Mahdii-Kariimiian (https://www.frontendmentor.io/profile/Mahdii-Kariimiian)


