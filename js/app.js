var fieldset = document.getElementsByTagName('fieldset')[0];
var addedField = document.createElement("INPUT");

// when other is selected, it calls the addOtherField function
document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="user_title"]').onchange=changeEventHandler;
},false);

function changeEventHandler(event) {
    if(event.target.value === 'other') {
        console.log('Other selected');
        addOtherField();
    } else {
        console.log('You are a ' + event.target.value + '.');
        if (addedField.parentElement !== null)  {
            fieldset.removeChild(addedField);
        }

    }
}



//TODO when other is selected you have to check if the extra input is already there


// adds input field when 'other' job title is selected
function addOtherField() {
    addedField.setAttribute("type", "text");
    addedField.setAttribute("class", "added-field");
    fieldset.appendChild(addedField);
}



// No color options appear in the “Color” menu until the user chooses a T-Shirt theme. The “Color” menu reads “Please select a T-shirt theme” until a theme is selected from the “Design” menu.

// When we choose a payment option, the chosen payment section is revealed and the other payment sections are hidden
document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="user_payment"]').onchange=changePaymentHandler;
},false);

function changePaymentHandler(event) {
    console.log(event.target.value);
    if (event.target.value !== 'credit card') {
        document.getElementById("credit-card").style.display = "none";
    }
}
