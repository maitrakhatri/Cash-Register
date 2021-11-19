var billAmount = document.querySelector("#bill-amount")
var cashGiven = document.querySelector("#cash-given")
var checkButton = document.querySelector("#check-button")
var errorMessage = document.querySelector("#error-message")
var returnAmount = document.querySelector("#reutrn-amount")
var numberofnotes = document.querySelectorAll(".no-of-notes")
var cashGivenSection = document.querySelector(".cashgiven")

var dominationAvailable = [2000, 500, 100, 20, 10, 5, 1]

cashGivenSection.style.display = "none";

billAmount.addEventListener("change", function changeHandler() {
    cashGivenSection.style.display = "block";
})

checkButton.addEventListener("click", function onClickHandler() {
    
    errorMessage.style.display = "none";
    if(billAmount.value > 0) {

        var amountLeft = cashGiven.value - billAmount.value;
        
        if (amountLeft < 0) { 
            showMessage("Cash given should be more or equal to the bill amount."); 
        } 

        if (amountLeft > 0) {
            noOfNotesToReturn(amountLeft);
        }

        if (amountLeft = 0) {
            showMessage("No need to return change");
        }
    }

    else{
        showMessage("Enter a positive amount");
    }
})

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}


function noOfNotesToReturn(amountLeft) {

    for(i=0; i < dominationAvailable.length; i++) {

        const noofnotes = Math.trunc(amountLeft/dominationAvailable[i]);
        amountLeft = amountLeft % dominationAvailable[i];
        numberofnotes[i].innerText = noofnotes;
        
    }
   
}


