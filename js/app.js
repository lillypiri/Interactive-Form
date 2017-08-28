var fieldset = document.getElementsByTagName('fieldset')[0];
var addedField = document.createElement("input");
var joblabel = document.createElement('label');

// when other is selected, it calls the addOtherField function
document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="user_title"]').addEventListener('change', changeEventHandler);
},false);

function changeEventHandler(event) {
    if(event.target.value === 'other') {
        console.log('Other selected');
        addOtherField();
    } else {
        console.log('You are a ' + event.target.value + '.');
        if (addedField.parentElement !== null)  {
            fieldset.removeChild(addedField);
            fieldset.removeChild(joblabel);
        }
    }
}

//TODO when other is selected you have to check if the extra input is already there


// adds input field when 'other' job title is selected
function addOtherField() {
    joblabel.textContent = 'Your job role';
    addedField.setAttribute("type", "text");
    addedField.setAttribute("class", "added-field");
    fieldset.appendChild(joblabel)
    fieldset.appendChild(addedField);
}



// No color options appear in the “Color” menu until the user chooses a T-Shirt theme. The “Color” menu reads “Please select a T-shirt theme” until a theme is selected from the “Design” menu.
// function hideColorOptions() {
//     if (design = select theme) {
//         hide color options
//     }
// }


// When we choose a payment option, the chosen payment section is revealed and the other payment sections are hidden


function hidePaymentFields() {
    document.getElementById("credit-card").style.display = "none";
    document.getElementById("bitcoin-div").style.display = "none";
    document.getElementById("paypal-div").style.display = "none";
}
hidePaymentFields();

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="user_payment"]').addEventListener('change', changePaymentHandler);
},false);

function changePaymentHandler(event) {
    hidePaymentFields();
    console.log(event.target.value);
    if (event.target.value === 'credit card') {
        document.getElementById("credit-card").style.display = "block";
    } else if (event.target.value === 'bitcoin') {
        document.getElementById("bitcoin-div").style.display = "block";
    } else if (event.target.value === 'paypal') {
        document.getElementById("paypal-div").style.display = "block";
    }
}


// User cannot select two activities that are at the same time
const jsf = document.getElementById('jsframeworks');
const express = document.getElementById('express');
const node = document.getElementById('node');
const jslib = document.getElementById('jslib');


// both on Tuesday 9am-12pm
jsf.addEventListener('change', (e) => {
    // console.log(e.target.checked);
    express.disabled = event.target.checked;
});

express.addEventListener('change', (e) => {
    jsf.disabled = event.target.checked;
});


// both on Tuesday 1pm-4pm
node.addEventListener('change', (e) => {
    jslib.disabled = event.target.checked;
});

jslib.addEventListener('change', (e) => {
    node.disabled = event.target.checked;
})
