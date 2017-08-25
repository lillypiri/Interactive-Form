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
// fix dom error

// adds input field when 'other' job title is selected
function addOtherField() {
    addedField.setAttribute("type", "text");
    addedField.setAttribute("class", "added-field");
    fieldset.appendChild(addedField);
}
