var fieldset = document.getElementsByTagName('fieldset')[0];
var addedField = document.createElement("INPUT");

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

jsf.addEventListener('change', (e) => {
    // console.log(e.target.checked);
    const checkbox = event.target;
    const checked = checkbox.checked;
    checked ? express.disabled = event.target.checked : express.disabled = false;
});

express.addEventListener('change', (e) => {
    const checkbox = event.target;
    const checked = checkbox.checked;
    checked ? jsf.disabled = true : jsf.disabled = false;
});

node.addEventListener('change', (e) => {
    const checkbox = event.target;
    const checked = checkbox.checked;
    checked ? jslib.disabled = true : jslib.disabled = false;
});


jslib.addEventListener('change', (e) => {
    const checkbox = event.target;
    const checked = checkbox.checked;
    checked ? node.disabled = true : node.disabled = false;
})
