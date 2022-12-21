"use strict";
//hidden section
const hiddenSection = document.getElementById('hid');
const formDiv = document.getElementById('hidde');
const continueBtn = document.getElementById('continue')
const cvcNumber = document.getElementById("cvc");
const NumberOfCv = document.getElementById("cv")

//card names and number
const frontCardNumber = document.getElementById("card-number")
const frontCardName = document.getElementById("card-holder");
const frontCardMonth = document.getElementById("month");
const frontCardYear = document.getElementById("year");

//error messages
const numberErrorMsg = document.getElementById("number-error");
const nameErrorMsg = document.getElementById("name-error");
const expiryError = document.getElementById("expiry-error");
const cardHolderName = document.getElementById("card-holde");
const submitBtn = document.getElementById("submit");
const year = document.getElementById("year");
const month = document.getElementById("month");
const nullError = document.getElementById("null-error");
const nullNumber = document.getElementById("null-number");
const cardHolderNumber = document.getElementById('card-num');
const cvcError = document.getElementById("expir-error");
const mont = document.getElementById('mont');
const yea = document.getElementById('yea');

//span for number
const firstSpan = document.getElementById('one');
const secondSpan = document.getElementById('two');
const thirdSpan = document.getElementById('three');
const fourthSpan = document.getElementById('four');


// span for name 
const firstName = document.getElementById('first');
const secondName = document.getElementById('second');
console.log(nullError)



//CARD NAME VALIDATION FOR NAME

function validateCardName(params) {

    
    const numbers = /^[0-9]+$/;
    const letters = /^[A-Za-z]+$/
    //const letterspace = /^[A-Za-z\s]*$/


   if (frontCardName.value == "" || frontCardName.value === null) {
    nullError.classList.remove('hidden');
    frontCardName.style.borderBlockColor = "red";

}  else if (frontCardName.value.match(numbers)) {
    nameErrorMsg.classList.remove('hidden');
    frontCardNumber.style.borderBlockColor = "red";

} else if(frontCardName.value.match(letters))
 {
    nullError.classList.add('hidden')
    nameErrorMsg.classList.add('hidden')
    frontCardName.style.borderBlockColor = "green"
    cardHolderName.innerHTML = frontCardName.value+" "
   

    
 }


}


//CARD VALIDATION FOR NUMBER 
function ValidateCardNum(params) {
     
    const num = frontCardNumber.value;
    const numsArr = Array.from(String(num), Number); 

    console.log(numsArr)
    
    const letters = /^[A-Za-z]+$/
    const nnumbers = /^[0-9]+$/
    if (frontCardNumber.value == "" || frontCardNumber.value === null) {
        numberErrorMsg.classList.remove('hidden');
        frontCardNumber.style.borderBlockColor = "red";
    } else if (frontCardNumber.value.match(letters)) {
        numberErrorMsg.classList.remove('hidden');
    } 
   
    else if (frontCardNumber.value.length < 16) {
        numberErrorMsg.classList.add('hidden')
        nullNumber.classList.remove('hidden');
    }

    else if(frontCardNumber.value.match(nnumbers) || frontCardNumber.length >= 16){
        nullNumber.classList.add('hidden');
        numberErrorMsg.classList.add('hidden');
        frontCardNumber.style.borderBlockColor = 'green';
       // cardHolderNumber.innerHTML = frontCardNumber.value
       firstSpan.innerHTML = numsArr.slice(0,4).join("");
       secondSpan.innerHTML = numsArr.slice(3,7).join("");
       thirdSpan.innerHTML = numsArr.slice(8,12).join("");
       fourthSpan.innerHTML = numsArr.slice(12,16).join("");
    } 
    
}


//CARD VALIBATION FOR month
function validateMonth(params) {
    const nnumbers = /^[0-9]+$/
    const letters = /^[A-Za-z]+$/

    if (month.value == "" || month.value === null ) {
        expiryError.classList.remove('hidden');
        month.style.borderBlockColor = "red";

    } else if (month.value.match(letters)) {
        expiryError.classList.add('hidden');
        cvcError.classList.remove('hidden');
    }
    
    else if (month.value.match(nnumbers)) {
        cvcError.classList.add('hidden')
        expiryError.classList.add('hidden');
        month.style.borderBlockColor = 'green';
        mont.innerHTML = month.value;
    }

    console.log(month.value)
}


//CARD VALIDATION FOR YEAR
function validateYear(params) {
    const nnumbers = /^[0-9]+$/
    const letters = /^[A-Za-z]+$/

    if (year.value == "" || year.value === null ) {
        expiryError.classList.remove('hidden');
        year.style.borderBlockColor = "red"; 
        
        
    } else if (year.value.match(letters)) {
        expiryError.classList.add('hidden');
        cvcError.classList.remove('hidden');
    }
    
    else if (year.value.match(nnumbers)) {
        expiryError.classList.add('hidden')
        cvcError.classList.add('hidden')
        year.style.borderBlockColor = 'green';
        yea.innerHTML = year.value;

    console.log(month.value)
}
}

//CARD VALIDATION FOR CVC
function validateCvc(params) {
    const nnumbers = /^[0-9]+$/
    const letters = /^[A-Za-z]+$/

    if (NumberOfCv.value == "" || NumberOfCv.value == null) {
        expiryError.classList.remove('hidden')
    } else if (NumberOfCv.value.match(letters)) {
        expiryError.classList.add('hidden');
        cvcError.classList.remove('hidden');
    } else if(NumberOfCv.value.match(nnumbers)) {
        NumberOfCv.style.borderBlockColor = 'green'
        cvcNumber.innerHTML = NumberOfCv.value
    }

}


function showHidSection(params) {
    const nnumbers = /^[0-9]+$/;
    if (frontCardNumber.value.length >= 16 && month.value.match(nnumbers)) {
        hiddenSection.classList.remove('hidden');
        formDiv.classList.add('hidden');
    }

 
}   


function Continue(params) {
    hiddenSection.classList.add('hidden');
    formDiv.classList.remove('hidden');
}



continueBtn.addEventListener('click', Continue)
//FUNCTIONS FOR SUBMIT CLICKS

submitBtn.addEventListener(
    "click", go
)

function go(params) {
    event.preventDefault()
}



/*****************************************************************
 * *************************************************************
 * CLICK EVENTS **********************************************
 * ***********************************************************
 */

//VALIDATE CARD NAMES 
submitBtn.addEventListener(
    'click', validateCardName
)


//VALIDATE CARDNUMBERS
submitBtn.addEventListener(
    'click', ValidateCardNum
)


//VALIDATE CARDMONTH
submitBtn.addEventListener(
    'click', validateMonth
)

//VALIDATE CARDYEAR
submitBtn.addEventListener(
    "click", validateYear
)


//VALIDATE CARD VCV
submitBtn.addEventListener(
    "click",validateCvc
)

//VALIDATE SUBMITBUTTON
submitBtn.addEventListener(
   'click', showHidSection
) 