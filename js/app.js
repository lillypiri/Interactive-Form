var fieldset = document.getElementsByTagName('fieldset')[0];
var addedField = document.createElement("input");
var joblabel = document.createElement('label');
console.log(document.getElementById("cornflowerblue"));
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

// var email = document.getElementById("mail");
//
// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I expect a valid e-mail format, darling!");
//   } else {
//     email.setCustomValidity("Please enter an email address.");
//   }
// });


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
function hideColorOptions() {
    document.getElementById("selecttheme").style.display = "block";
    document.getElementById("cornflowerblue").style.display = "none";
    document.getElementById("darkslategrey").style.display = "none";
    document.getElementById("gold").style.display = "none";
    document.getElementById("tomato").style.display = "none";
    document.getElementById("steelblue").style.display = "none";
    document.getElementById("dimgrey").style.display = "none";
}
hideColorOptions();

var tshirtSelect = document.querySelector('select[name="user_design"]');

document.addEventListener('DOMContentLoaded',function() {
    tshirtSelect.addEventListener('change', changeDesignHandler);
},false);

// T-shirt color options are revealed based on the design selected.
function changeDesignHandler(event) {
    hideColorOptions();
    console.log(event.target.value);
    if (event.target.value === 'selectdesign') {
        hideColorOptions();
        document.getElementById('color').options[0].selected = "selected";
    } else if (event.target.value === 'js puns') {
        document.getElementById("selecttheme").style.display = "none";
        document.getElementById("cornflowerblue").style.display = "block";
        document.getElementById("cornflowerblue").selected = "selected";
        document.getElementById("darkslategrey").style.display = "block";
        document.getElementById("gold").style.display = "block";
    } else if (event.target.value === 'heart js') {
        document.getElementById("selecttheme").style.display = "none";
        document.getElementById("tomato").style.display = "block";
        document.getElementById("tomato").selected = "selected";
        document.getElementById("steelblue").style.display = "block";
        document.getElementById("dimgrey").style.display = "block";
    }
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
    const ccreq = document.getElementById('cc-num');
    const cczip = document.getElementById('zip');
    const cccvv = document.getElementById('cvv');
    ccreq.removeAttribute('required');
    cczip.removeAttribute('required');
    cccvv.removeAttribute('required');


    console.log(event.target.value);
    if (event.target.value === 'credit card') {
        document.getElementById("credit-card").style.display = "block";
        ccreq.setAttribute('required', '');
        ccreq.setAttribute('type', 'number');
        ccreq.setAttribute('min', 0000000000000);
        ccreq.setAttribute('max', 9999999999999999);
        cczip.setAttribute('required', '');
        cczip.setAttribute('type', 'number');
        cczip.setAttribute('min', 00000);
        cczip.setAttribute('max', 99999);
        cccvv.setAttribute('required', '');
        cccvv.setAttribute('type', 'number');
        cccvv.setAttribute('min', 000);
        cccvv.setAttribute('max', 999);
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
const mainconf = document.getElementById('mainconf');
const buildtools = document.getElementById('buildtools');
const npmw = document.getElementById('npmw');


// both on Tuesday 9am-12pm
jsf.addEventListener('change', (e) => {
    // console.log(e.target.checked);
    express.disabled = event.target.checked;
    submitButton.removeAttribute('disabled');
});

express.addEventListener('change', (e) => {
    jsf.disabled = event.target.checked;
    submitButton.removeAttribute('disabled');
});


// both on Tuesday 1pm-4pm
node.addEventListener('change', (e) => {
    jslib.disabled = event.target.checked;
    submitButton.removeAttribute('disabled');
});

jslib.addEventListener('change', (e) => {
    node.disabled = event.target.checked;
    submitButton.removeAttribute('disabled');
})

// other activities
mainconf.addEventListener('change', (e) => {
    submitButton.removeAttribute('disabled');
})
buildtools.addEventListener('change', (e) => {
    submitButton.removeAttribute('disabled');
})
npmw.addEventListener('change', (e) => {
    submitButton.removeAttribute('disabled');
})

// we have to select an activity before the page will submit
const submitButton = document.querySelector('button[type="submit"]')

document.addEventListener('DOMContentLoaded',function() {
    submitButton.addEventListener('click', () => {
        validateActivity();
        checkName();
    });
},false);

const selectActivity = document.createElement("label");
const activitiesFieldset = document.getElementsByTagName('fieldset')[2];

function activitiesError() {
    selectActivity.textContent = "Please select an activity";
    selectActivity.setAttribute('type', 'text');
    selectActivity.setAttribute('class', 'error');
    activitiesFieldset.appendChild(selectActivity);
}

function validateActivity(event) {
    var checked = jsf.checked || express.checked || node.checked || jslib.checked || mainconf.checked || buildtools.checked || npmw.checked;
    if (checked === true) {
        activitiesFieldset.removeChild(selectActivity);
    } else {
        submitButton.setAttribute('disabled', '');
        activitiesError();
    };
}

const name = document.getElementById('name');
const nameLabel = document.getElementsByTagName('label')[0];
const nameError = document.createElement('label');

function checkName() {
    console.log(name.value);
    if (name.value === '' || name === null) {
        nameError.textContent = "Please enter a name";
        nameError.setAttribute('type', 'text');
        nameError.setAttribute('class', 'error');
        nameLabel.appendChild(nameError);
    } else {
        nameLabel.removeChild(nameError);
    }
};
