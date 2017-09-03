
const fieldset = document.getElementsByTagName('fieldset')[0];
// when other is selected, it calls the addOtherField function
document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="user_title"]').addEventListener('change', changeEventHandler);
},false);



otherField = document.getElementById("other-input")
otherFieldLabel = document.getElementById("other-input-label")

otherFieldLabel.style.display = "none";
otherField.style.display = "none";

function changeEventHandler(event) {
    if(event.target.value === 'other') {
        console.log('Other selected');
        otherField.style.display = "block";
        otherFieldLabel.style.display = "block";
    } else {
        console.log('You are a ' + event.target.value + '.');
        otherField.style.display = "none";
        otherFieldLabel.style.display = "none";
    }
}

//TODO  CC error field limits & errors // does it work w/out js

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

document.getElementById('cc-num').addEventListener('keyup', (event) => {
    event.target.value = event.target.value.replace(/[^0-9]+/, '');
})

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
        ccreq.setAttribute('type', 'tel');
        // ccreq.setAttribute('pattern', '\d+')
        ccreq.setAttribute('minlength', 13);
        ccreq.setAttribute('maxlength', 16);
        cczip.setAttribute('required', '');
        cczip.setAttribute('type', 'number');
        cczip.setAttribute('min', 10000);
        cczip.setAttribute('max', 99999);
        cccvv.setAttribute('required', '');
        cccvv.setAttribute('type', 'number');
        cccvv.setAttribute('min', 100);
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

const checkboxes = document.getElementsByName('checkbox');

console.log(checkboxes);

function enableButtonDisplayTotal() {
    submitButton.removeAttribute('disabled');
    displayTotal();
};

for(var i=0; i < checkboxes.length; i++) {
       checkboxes[i].addEventListener('change', (e) => {
           let data = { data: e.target.dataset, checked: e.target.checked }
           console.log('clicked checkbox, our data is: ', data)
           enableButtonDisplayTotal(data);
       });
}

//both on Tuesday 9am-12pm
jsf.addEventListener('change', (e) => {
    express.disabled = event.target.checked;
    enableButtonDisplayTotal();
});

express.addEventListener('change', (e) => {
    jsf.disabled = event.target.checked;
    enableButtonDisplayTotal();
});


// both on Tuesday 1pm-4pm
node.addEventListener('change', (e) => {
    jslib.disabled = event.target.checked;
    enableButtonDisplayTotal();
});

jslib.addEventListener('change', (e) => {
    node.disabled = event.target.checked;
    enableButtonDisplayTotal();
})


// event listener for submit button
const selectActivity = document.createElement("label");
const activitiesTotal = document.createElement("total-cost");
const activitiesFieldset = document.getElementsByTagName('fieldset')[2];
const submitButton = document.querySelector('button[type="submit"]')

document.addEventListener('DOMContentLoaded',function() {
    submitButton.addEventListener('click', () => {
        checkName();
        checkEmail();
        validateActivity();
        checkCC();
        checkZip();
        checkCvv();
    });
},false);

function displayTotal(data) {

    let price = [].slice.call(document
    .querySelectorAll('[data-price]'))
    .reduce((total, checkbox) => {
        return checkbox.checked ? total + parseInt(checkbox.dataset.price, 10) : total;
    }, 0);
    activitiesTotal.textContent = "Your total is $" + price;
    //activitiesTotal.setAttribute('type', 'text');
    activitiesFieldset.appendChild(activitiesTotal);

}
displayTotal();

// Check that the user has ticked an activity checkbox, if not, submit button is disabled

// activities error message
function activitiesError() {
    selectActivity.textContent = "Please select an activity";
    //selectActivity.setAttribute('type', 'text');
    selectActivity.setAttribute('class', 'error');
    activitiesFieldset.appendChild(selectActivity);
}

function validateActivity() {
    var activitySelected = jsf.checked || express.checked || node.checked || jslib.checked || mainconf.checked || buildtools.checked || npmw.checked;
    // If a checkbox is checked AND selectActivity exists THEN remove selectActivity, ELSE disable the submit button AND show error

    // If at least one activity is selected
    if (activitySelected) {
        // remove error label if it exists
        if (selectActivity.parentElement) {
            selectActivity.parentElement.removeChild(selectActivity);
        }
    } else {
        submitButton.setAttribute('disabled', '');
        activitiesError();
    }
}

//Check that the user entered anything in the zip field
const cvvfield = document.getElementById('cvv');
const cvvClass = cvvfield.parentElement;
const cvvError = document.createElement('label');

function checkCvv() {
    if (cvvfield.value === '' || cvvfield.value === null) {
        cvvError.textContent = "Please enter a 3 digit CVV number";
        //nameError.setAttribute('type', 'text');
        cvvError.setAttribute('class', 'error');
        cvvClass.appendChild(cvvError);
    } else if (cvvError.parentElement !== null) {
        cvvClass.removeChild(cvvError);
    }
};

//Check that the user entered anything in the zip field
const zipfield = document.getElementById('zip');
const zipClass = zipfield.parentElement;
const zipError = document.createElement('label');

function checkZip() {
    if (zipfield.value === '' || zipfield.value === null) {
        zipError.textContent = "Please enter a valid 5 digit zip code";
        //nameError.setAttribute('type', 'text');
        zipError.setAttribute('class', 'error');
        zipClass.appendChild(zipError);
    } else if (zipError.parentElement !== null) {
        zipClass.removeChild(zipError);
    }
};


//Check that the user entered anything in the credit card
const ccfield = document.getElementById('cc-num');
const ccClass = ccfield.parentElement;
const ccError = document.createElement('label');

function checkCC() {
    if (ccfield.value === '' || ccfield.value === null) {
        ccError.textContent = "Please enter a valid Credit Card number.";
        //nameError.setAttribute('type', 'text');
        ccError.setAttribute('class', 'error');
        ccClass.appendChild(ccError);
    } else if (ccError.parentElement !== null) {
        ccClass.removeChild(ccError);
    }
};

// Check that the user entered anything in the name field
const name = document.getElementById('name');
const nameLabel = document.getElementsByTagName('label')[0];
const nameError = document.createElement('label');

function checkName() {
    //console.log("name", name.value);
    if (name.value === '' || name === null) {
        nameError.textContent = "Please enter a name";
        //nameError.setAttribute('type', 'text');
        nameError.setAttribute('class', 'error');
        nameLabel.appendChild(nameError);
    } else if (nameError.parentElement !== null) {
        nameLabel.removeChild(nameError);
    }
};

// Check that the user entered anything in the email field
const mail = document.getElementById('mail');
const mailLabel = document.getElementsByTagName('label')[1];
const mailError = document.createElement('label');

function checkEmail() {
    if (mail.value === '' || mail.value === null) {
        mailError.textContent = "Please enter an email address";
        //mailError.setAttribute('type', 'text');
        mailError.setAttribute('class', 'error');
        mailLabel.appendChild(mailError);
    } else if (mailError.parentElement !== null) {
        mailLabel.removeChild(mailError);
    }
}
