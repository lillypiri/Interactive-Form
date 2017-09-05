// when other is selected, a box to input other job is shown
document.addEventListener(
    'DOMContentLoaded',
    function() {
        document.querySelector('select[name="user_title"]').addEventListener('change', changeEventHandler);
    },
    false
);

otherField = document.getElementById('other-title');
otherFieldLabel = document.getElementById('other-title-label');

otherFieldLabel.style.display = 'none';
otherField.style.display = 'none';

function changeEventHandler(event) {
    if (event.target.value === 'other') {
        console.log('Other selected');
        otherField.style.display = 'block';
        otherFieldLabel.style.display = 'block';
    } else {
        console.log('You are a ' + event.target.value + '.');
        otherField.style.display = 'none';
        otherFieldLabel.style.display = 'none';
    }
}

// // hide the color drop down menu and label
// colorSelect = document.getElementById("color");
// colorLabel = document.getElementById("color-label");
// colorSelect.style.display = "none";
// colorLabel.style.display = "none";

var tshirtSelect = document.querySelector('select[name="user_design"]');

document.addEventListener(
    'DOMContentLoaded',
    function() {
        tshirtSelect.addEventListener('change', changeDesignHandler);
    },
    false
);

// T-shirt color options are revealed based on the design selected.
// grab and group all of the design options
var designsOptions = {
    selectdesign: [document.getElementById('selecttheme')],
    'js puns': [
        document.getElementById('cornflowerblue'),
        document.getElementById('darkslategrey'),
        document.getElementById('gold')
    ],
    'heart js': [
        document.getElementById('tomato'),
        document.getElementById('steelblue'),
        document.getElementById('dimgrey')
    ]
};
function changeDesignHandler(event) {
    // Hide all options
    designsOptions['selectdesign']
        .concat(designsOptions['js puns'])
        .concat(designsOptions['heart js'])
        .forEach(function(optionElement) {
            if (optionElement.parentElement) {
                optionElement.parentElement.removeChild(optionElement);
            }
        });

    // Add the options back in that match the current selection
    var select = document.getElementById('color');
    designsOptions[event.target.value].forEach(function(optionElement) {
        select.appendChild(optionElement);
    });

    // Select the first option
    select.options[0].selected = 'selected';
}
// Select the first option
changeDesignHandler({ target: { value: 'selectdesign' } });

// When we choose a payment option, the chosen payment section is revealed and the other payment sections are hidden
function hidePaymentFields() {
    document.getElementById('credit-card').style.display = 'none';
    document.getElementById('bitcoin-div').style.display = 'none';
    document.getElementById('paypal-div').style.display = 'none';
}
hidePaymentFields();

document.addEventListener(
    'DOMContentLoaded',
    function() {
        document.querySelector('select[name="user_payment"]').addEventListener('change', changePaymentHandler);
    },
    false
);

document.getElementById('cc-num').addEventListener('keyup', event => {
    event.target.value = event.target.value.replace(/[^0-9]+/, '');
});

function changePaymentHandler(event) {
    hidePaymentFields();
    var ccreq = document.getElementById('cc-num');
    var cczip = document.getElementById('zip');
    var cccvv = document.getElementById('cvv');
    ccreq.removeAttribute('required');
    cczip.removeAttribute('required');
    cccvv.removeAttribute('required');

    console.log(event.target.value);
    if (event.target.value === 'credit card') {
        document.getElementById('credit-card').style.display = 'block';
        ccreq.setAttribute('required', '');
        ccreq.setAttribute('type', 'tel');
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
        document.getElementById('bitcoin-div').style.display = 'block';
    } else if (event.target.value === 'paypal') {
        document.getElementById('paypal-div').style.display = 'block';
    }
}

// User cannot select two activities that are at the same time
var jsf = document.getElementById('jsframeworks');
var express = document.getElementById('express');
var node = document.getElementById('node');
var jslib = document.getElementById('jslib');
var mainconf = document.getElementById('mainconf');
var buildtools = document.getElementById('buildtools');
var npmw = document.getElementById('npmw');

var checkboxes = document.getElementsByName('checkbox');

console.log(checkboxes);

function enableButtonDisplayTotal() {
    submitButton.removeAttribute('disabled');
    displayTotal();
}

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', e => {
        let data = { data: e.target.dataset, checked: e.target.checked };
        console.log('clicked checkbox, our data is: ', data);
        enableButtonDisplayTotal(data);
    });
}

//both on Tuesday 9am-12pm
jsf.addEventListener('change', e => {
    express.disabled = event.target.checked;
    enableButtonDisplayTotal();
});

express.addEventListener('change', e => {
    jsf.disabled = event.target.checked;
    enableButtonDisplayTotal();
});

// both on Tuesday 1pm-4pm
node.addEventListener('change', e => {
    jslib.disabled = event.target.checked;
    enableButtonDisplayTotal();
});

jslib.addEventListener('change', e => {
    node.disabled = event.target.checked;
    enableButtonDisplayTotal();
});

// event listener for submit button
var selectActivity = document.createElement('label');
var activitiesTotal = document.createElement('total-cost');
var activitiesFieldset = document.getElementsByTagName('fieldset')[2];
var submitButton = document.querySelector('button[type="submit"]');

document.addEventListener(
    'DOMContentLoaded',
    function() {
        submitButton.addEventListener('click', () => {
            checkName();
            checkEmail();
            validateActivity();
            checkCC();
            checkZip();
            checkCvv();
        });
    },
    false
);

// Check in real time that the user entered a name at all and is longer than two characters
var nameInput = document.getElementById('name');
nameInput.addEventListener('keyup', checkName, false);
var nameLabel = document.getElementsByTagName('label')[0];
var nameError = document.createElement('label');

function checkName() {
    if (nameInput.value === '' || nameInput === null) {
        nameError.textContent = 'Please enter a name';
        nameError.setAttribute('class', 'error');
        nameLabel.appendChild(nameError);
        console.log(nameError.parentElement);
    } else if (nameInput.value.length < 2) {
        nameError.textContent = 'Please enter a name longer than two characters';
        nameError.setAttribute('class', 'error');
        nameLabel.appendChild(nameError);
    } else if (nameError.parentElement !== null) {
        console.log(nameError.parentElement);
        console.log('test');
        nameLabel.removeChild(nameError);
    }
}

// Check that the user entered anything in the email field
var mail = document.getElementById('mail');
var mailLabel = document.getElementsByTagName('label')[1];
var mailError = document.createElement('label');
mail.addEventListener('keyup', checkEmail, false);
var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function checkEmail() {
    if (mail.value === '' || mail.value === null) {
        mailError.textContent = 'Please enter an email address';
        mailError.setAttribute('class', 'error');
        mailLabel.appendChild(mailError);
        console.log(mailError.parentElement);
    } else if (!mail.value.match(emailPattern)) {
        mailError.textContent = 'Please enter a valid email address';
        mailError.setAttribute('class', 'error');
        mailLabel.appendChild(mailError);
        console.log(mailError.parentElement);
    } else if (mailError.parentElement !== null) {
        console.log(mailError.parentElement);
        if (mailError.parentElement) {
            mailError.parentElement.removeChild(mailError);
        }
    }
}

// display total price of activities selected
function displayTotal(data) {
    let price = [].slice.call(document.querySelectorAll('[data-price]')).reduce((total, checkbox) => {
        return checkbox.checked ? total + parseInt(checkbox.dataset.price, 10) : total;
    }, 0);
    activitiesTotal.textContent = 'Your total is $' + price;
    activitiesFieldset.appendChild(activitiesTotal);
}
displayTotal();

// activities error message
function activitiesError() {
    selectActivity.textContent = 'Please select an activity';
    selectActivity.setAttribute('class', 'error');
    activitiesFieldset.appendChild(selectActivity);
}

// Check that the user has ticked an activity checkbox, if not, submit button is disabled
function validateActivity() {
    var activitySelected =
        jsf.checked ||
        express.checked ||
        node.checked ||
        jslib.checked ||
        mainconf.checked ||
        buildtools.checked ||
        npmw.checked;
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

//Check that the user entered anything in the CVV field
var cvvfield = document.getElementById('cvv');
var cvvClass = cvvfield.parentElement;
var cvvError = document.createElement('label');
cvvfield.addEventListener('keyup', checkCvv, false);

function checkCvv() {
    if (cvvfield.value === '' || cvvfield.value === null) {
        cvvError.textContent = 'Please enter a CVV number';
        cvvError.setAttribute('class', 'error');
        cvvClass.appendChild(cvvError);
    } else if (cvvfield.value.length < 3) {
        cvvError.textContent = 'Please enter a 3 digit CVV number';
        cvvError.setAttribute('class', 'error');
        cvvClass.appendChild(cvvError);
    } else if (cvvfield.value.length > 3) {
        cvvError.textContent = 'Please enter only 3 digits';
        cvvError.setAttribute('class', 'error');
        cvvClass.appendChild(cvvError);
    } else if (cvvError.parentElement !== null) {
        cvvClass.removeChild(cvvError);
    }
}

//Check that the user entered anything in the zip field
var zipfield = document.getElementById('zip');
var zipClass = zipfield.parentElement;
var zipError = document.createElement('label');
zipfield.addEventListener('keyup', checkZip, false);

function checkZip() {
    if (zipfield.value === '' || zipfield.value === null) {
        zipError.textContent = 'Please enter a valid 5 digit zip code';
        zipError.setAttribute('class', 'error');
        zipClass.appendChild(zipError);
    } else if (zipfield.value.length < 5) {
        zipError.textContent = 'Please enter a zip code that is at least 5 digits long';
        zipError.setAttribute('class', 'error');
        zipClass.appendChild(zipError);
    } else if (zipfield.value.length > 5) {
        zipError.textContent = 'Please enter a zip code that is no more than 5 digits long';
        zipError.setAttribute('class', 'error');
        zipClass.appendChild(zipError);
    } else if (zipError.parentElement !== null) {
        zipClass.removeChild(zipError);
    }
}

//Check that the user entered anything in the credit card field
var ccfield = document.getElementById('cc-num');
var ccClass = ccfield.parentElement;
var ccError = document.createElement('label');
ccfield.addEventListener('keyup', checkCC, false);

function checkCC() {
    if (ccfield.value === '' || ccfield.value === null) {
        ccError.textContent = 'Please enter a valid Credit Card number.';
        ccError.setAttribute('class', 'error');
        ccClass.appendChild(ccError);
    } else if (ccfield.value.length < 13) {
        ccError.textContent = 'Please enter a number that is at least 13 digits long.';
        ccError.setAttribute('class', 'error');
        ccClass.appendChild(ccError);
    } else if (ccError.parentElement !== null) {
        ccClass.removeChild(ccError);
    }
}
