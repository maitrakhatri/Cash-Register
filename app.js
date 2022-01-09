const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button")
const errorMessage = document.querySelector("#error-message")
const returnAmount = document.querySelector("#reutrn-amount")
const numberofnotes = document.querySelectorAll(".no-of-notes")
const cashGivenSection = document.querySelector(".cashgiven")

const dominationAvailable = [2000, 500, 100, 20, 10, 5, 1]

cashGivenSection.style.display = "none";

billAmount.addEventListener("change", () => cashGivenSection.style.display = "block")

// billAmount.addEventListener("change", function changeHandler() {
//     cashGivenSection.style.display = "block";
// })

checkButton.addEventListener("click", () => {

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

const showMessage = message => {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}

// function showMessage(message) {
//     errorMessage.style.display = "block";
//     errorMessage.innerText = message;
// }


const noOfNotesToReturn = amountLeft => {
    for(i=0; i < dominationAvailable.length; i++) {

        const noofnotes = Math.trunc(amountLeft/dominationAvailable[i]);
        amountLeft = amountLeft % dominationAvailable[i];
        numberofnotes[i].innerText = noofnotes;
        
    }

}

// function noOfNotesToReturn(amountLeft) {

//     for(i=0; i < dominationAvailable.length; i++) {

//         const noofnotes = Math.trunc(amountLeft/dominationAvailable[i]);
//         amountLeft = amountLeft % dominationAvailable[i];
//         numberofnotes[i].innerText = noofnotes;
        
//     }
   
// }