"use strict";
/*const cvcNumber = document.querySelector('.cvc');
const frontCardNumber = document.querySelector('.card-number');
const frontCardName = document.querySelector('.card-holder')
const frontCardMonth = document.querySelector('.month')
const frontCardYear = document.querySelector('.year')
const nameErrorMsg = document.querySelector('.name-error')
const numberErrorMsg = document.querySelector('.number-error')
const expiryError = document.querySelector('.expiry-error')
const submitBtn = document.querySelector('.submit')  */

const cvcNumber = document.getElementById("cvc");
const frontCardNumber = document.getElementById("card-number")
const frontCardName = document.getElementById("card-holder");
const frontCardMonth = document.getElementById("month");
const frontCardYear = document.getElementById("year");
const numberErrorMsg = document.getElementById("number-error");
const nameErrorMsg = document.getElementById("name-error");
const expiryError = document.getElementById("expiry-error");
const cardHolderName = document.getElementById("card-holde");
const submitBtn = document.getElementById("submit");
const year = document.getElementById("year");
const month = document.getElementById("month");
const nullError = document.getElementById("null-error");
const nullNumber = document.getElementById("null-number");

console.log(nullError)



//CARD NAME VALIDATION FOR NAME

function validateCardName(params) {
    const numbers = /^[0-9]+$/;
    

   if (frontCardName.value == "" || frontCardName.value === null) {
    nullError.classList.remove('hidden');
    frontCardName.style.borderBlockColor = "red";
}  else if (frontCardName.value.match(numbers)) {
    nameErrorMsg.classList.remove('hidden');
    frontCardNumber.style.borderBlockColor = "red";
}


}


//CARD VALIDATION FOR NUMBER 
function ValidateCardNum(params) {
     
    const letters = /^[A-Za-z]+$/

    if (frontCardNumber.value == "" || frontCardNumber.value === null) {
        nullNumber.classList.remove('hidden');
        frontCardNumber.style.borderBlockColor = "red";
    } else if (frontCardNumber.value.match(letters)) {
       numberErrorMsg.classList.remove('hidden');
    }
    
}


//CARD VALIBATION FOR NUMBER
function validateMonth(params) {
    const nnumbers = /^[0-9]+$/
    const letters = /^[A-Za-z]+$/

    if (month.value == "" || month.value === null || month.value.match(letters)) {
        expiryError.classList.remove('hidden');
        month.style.borderBlockColor = "red";
        
    } 

    console.log(month.value)
}


//CARD VALIDATION FOR YEAR
function validateYear(params) {
    const nnumbers = /^[0-9]+$/
    const letters = /^[A-Za-z]+$/

    if (year.value == "" || year.value === null || year.value.match(letters)) {
        expiryError.classList.remove('hidden');
        year.style.borderBlockColor = "red";
        
    } 

    console.log(month.value)
}





/*****************************************************************
 * *************************************************************
 * CLICK EVENTS **********************************************
 * ***********************************************************
 */
submitBtn.addEventListener(
    'click', validateCardName
)

submitBtn.addEventListener(
    'click', ValidateCardNum
)

submitBtn.addEventListener(
    'click', validateMonth
)

submitBtn.addEventListener(
    "click", validateYear
)

submitBtn.addEventListener(
    'input', InuptYear
)











