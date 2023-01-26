
var btnSendRequest = document.getElementById('btnSend');
var contactName = document.getElementById('disabledTextInput');
var companyName = document.getElementById('disabledTextInput2')
var email = document.getElementById('inputEmail')
var country = document.getElementById('disabledTextInput3')
var title = document.getElementById('title')
var err = document.getElementById('err');
var result = document.getElementById('result');
var btnReset = document.getElementById('btnReset');

var user = {
    contactName: [],
    companyName: [],
    email: [],
    country: [],
}

btnSendRequest.addEventListener('click', function(e){
    e.preventDefault()
    var valueName = contactName.value;
    var valueCompName = companyName.value;
    var valueEmail = email.value;
    var valueCountry = country.value;

    if(valueName !== '' && valueCompName !== '' && valueEmail !== '' && valueCountry !== ''){
        err.innerText = ''
        title.innerText = "You're application successfully sent!"
        user.contactName.push(valueName),
        user.companyName.push(valueCompName),
        user.email.push(valueEmail),
        user.country.push(valueCountry)
        update()
    } else {
        title.innerText = ''
        err.innerText = 'The form is full'
    }
})

function update(){
    result.innerHTML = '';
    for(var i=0; i<user.contactName.length && i<user.companyName.length && i<user.email.length && i<user.country.length; i++){
        result.innerHTML += '<ol>' + '<li>' + user.contactName[i] + '</li>' + '<li>' + user.companyName[i] + '</li>' +  '<li>' + user.email[i] + '</li>' +  '<li>' + user.country[i] + '</li>' + '</ol>'
    }

}








