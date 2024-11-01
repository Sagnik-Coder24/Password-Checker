var myInput = document.getElementById("pwd");
var lengthcheck = document.getElementById("lengthcheck");
var pwdlengthcheck = document.getElementById("pwdlengthcheck");
var uppercheck = document.getElementById("uppercheck");
var lowercheck = document.getElementById("lowercheck");
var numbercheck = document.getElementById("numbercheck");
var symbolcheck = document.getElementById("symbolcheck");

myInput.addEventListener('keyup', function(event) {
    var password = myInput.value;
    lengthCheck(password);
    lengthValidator(password);
    upperCheck(password);
    lowerCheck(password);
    numberCheck(password);
    symbolCheck(password);
});

function lengthCheck(pass) {
    var len = pass.length;
    lengthcheck.innerText = 'Number of Charecters entered are: ' + len;
};

function lengthValidator(pass) {
    if (pass.length >= 8) {
        pwdlengthcheck.classList.remove('invalid');
        pwdlengthcheck.classList.add('valid');
    } else {
        pwdlengthcheck.classList.remove('valid');
        pwdlengthcheck.classList.add('invalid');
    }
};

function upperCheck(pass) {
    var upperCaseLetters = /[A-Z]/g;
    if (pass.match(upperCaseLetters)) {
        uppercheck.classList.remove('invalid');
        uppercheck.classList.add('valid');
    } else {
        uppercheck.classList.remove('valid');
        uppercheck.classList.add('invalid');
    }
};

function lowerCheck(pass) {
    var lowerCaseLetters = /[a-z]/;
    if (pass.match(lowerCaseLetters)) {
        lowercheck.classList.remove('invalid');
        lowercheck.classList.add('valid');
    } else {
        lowercheck.classList.remove('valid');
        lowercheck.classList.add('invalid');
    }
};

function numberCheck(pass) {
    var numbers = /[0-9]/g;
    if (pass.match(numbers)) {
        numbercheck.classList.remove('invalid');
        numbercheck.classList.add('valid');
    } else {
        numbercheck.classList.remove('valid');
        numbercheck.classList.add('invalid');
    }
};

function symbolCheck(pass) {
    var symbols = /[$-/:~!"^_@|{};&+#%`\[\]]/;
    if (pass.match(symbols)) {
        symbolcheck.classList.remove('invalid');
        symbolcheck.classList.add('valid');
    } else {
        symbolcheck.classList.remove('valid');
        symbolcheck.classList.add('invalid');
    }
};

function showPassword() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}