// when other is selected, a box to input other job is shown
document.addEventListener(
    'DOMContentLoaded',
    function() {
        document.querySelector('select[name="user_title"]').addEventListener('change', changeEventHandler);
    },
    false
);

otherField = document.getElementById("other-title")
otherFieldLabel = document.getElementById("other-title-label")

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

document.getElementById("color").style.display = "none";
document.getElementById("color-label").style.display = "none";

// T-shirt color options are revealed based on the design selected.
function changeDesignHandler(event) {
    hideColorOptions();
    console.log(event.target.value);
    if (event.target.value === 'selectdesign') {
        hideColorOptions();
        document.getElementById('color').options[0].selected = "selected";
        document.getElementById("color").style.display = "none";
        document.getElementById("color-label").style.display = "none";
    } else if (event.target.value === 'js puns') {
        document.getElementById("color").style.display = "block";
        document.getElementById("color-label").style.display = "block";
        document.getElementById("selecttheme").style.display = "none";
        document.getElementById("cornflowerblue").style.display = "block";
        document.getElementById("cornflowerblue").selected = "selected";
        document.getElementById("darkslategrey").style.display = "block";
        document.getElementById("gold").style.display = "block";
    } else if (event.target.value === 'heart js') {
        document.getElementById("color").style.display = "block";
        document.getElementById("color-label").style.display = "block";
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
    var ccreq = document.getElementById('cc-num');
    var cczip = document.getElementById('zip');
    var cccvv = document.getElementById('cvv');
    ccreq.removeAttribute('required');
    cczip.removeAttribute('required');
    cccvv.removeAttribute('required');


    console.log(event.target.value);
    if (event.target.value === 'credit card') {
        document.getElementById("credit-card").style.display = "block";
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
        document.getElementById("bitcoin-div").style.display = "block";
    } else if (event.target.value === 'paypal') {
        document.getElementById("paypal-div").style.display = "block";
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
var selectActivity = document.createElement("label");
var activitiesTotal = document.createElement("total-cost");
var activitiesFieldset = document.getElementsByTagName('fieldset')[2];
var submitButton = document.querySelector('button[type="submit"]')

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


// Check that the user entered anything in the name field
var nameInput = document.getElementById('name');
nameInput.addEventListener('keyup', checkName, false);
var nameLabel = document.getElementsByTagName('label')[0];
var nameError = document.createElement('label');


function checkName() {
    if (nameInput.value === '' || nameInput === null) {
        nameError.textContent = "Please enter a name";
        nameError.setAttribute('class', 'error');
        nameLabel.appendChild(nameError);
        console.log(nameError.parentElement);
    } else if (nameError.parentElement !== null) {
        console.log(nameError.parentElement);
        console.log("test");
        nameLabel.removeChild(nameError);
    }
};

// Check that the user entered anything in the email field
var mail = document.getElementById('mail');
var mailLabel = document.getElementsByTagName('label')[1];
var mailError = document.createElement('label');
mail.addEventListener('blur', validateEmail, false);

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
        return (true)
    } else {
        mailError.textContent = "Please enter a valid address";
        mailError.setAttribute('class', 'error');
        mailLabel.appendChild(mailError);
        return (false)
    }
}


function checkEmail() {
    if (mail.value === '' || mail.value === null) {
        mailError.textContent = "Please enter an email address";
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

    let price = [].slice.call(document
    .querySelectorAll('[data-price]'))
    .reduce((total, checkbox) => {
        return checkbox.checked ? total + parseInt(checkbox.dataset.price, 10) : total;
    }, 0);
    activitiesTotal.textContent = "Your total is $" + price;
    activitiesFieldset.appendChild(activitiesTotal);

}
displayTotal();

// activities error message
function activitiesError() {
    selectActivity.textContent = "Please select an activity";
    selectActivity.setAttribute('class', 'error');
    activitiesFieldset.appendChild(selectActivity);
}

// Check that the user has ticked an activity checkbox, if not, submit button is disabled
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

//Check that the user entered anything in the CVV field
var cvvfield = document.getElementById('cvv');
var cvvClass = cvvfield.parentElement;
var cvvError = document.createElement('label');

function checkCvv() {
    if (cvvfield.value === '' || cvvfield.value === null) {
        cvvError.textContent = "Please enter a 3 digit CVV number";
        cvvError.setAttribute('class', 'error');
        cvvClass.appendChild(cvvError);
    } else if (cvvError.parentElement !== null) {
        cvvClass.removeChild(cvvError);
    }
};

//Check that the user entered anything in the zip field
var zipfield = document.getElementById('zip');
var zipClass = zipfield.parentElement;
var zipError = document.createElement('label');

function checkZip() {
    if (zipfield.value === '' || zipfield.value === null) {
        zipError.textContent = "Please enter a valid 5 digit zip code";
        zipError.setAttribute('class', 'error');
        zipClass.appendChild(zipError);
    } else if (zipError.parentElement !== null) {
        zipClass.removeChild(zipError);
    }
};

//Check that the user entered anything in the credit card field
var ccfield = document.getElementById('cc-num');
var ccClass = ccfield.parentElement;
var ccError = document.createElement('label');

function checkCC() {
    if (ccfield.value === '' || ccfield.value === null) {
        ccError.textContent = "Please enter a valid Credit Card number.";
        ccError.setAttribute('class', 'error');
        ccClass.appendChild(ccError);
    } else if (ccError.parentElement !== null) {
        ccClass.removeChild(ccError);
    }
};
