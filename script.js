const passwordShow = document.getElementById("Password");
const length = 12;
 const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowerCase = "abcdefghijklmnopqrstuvwxyz";
 const number = "123456789";
const symbol = "!@#$%^&*()_+{}[]:;'?/<>"

const allChars = upperCase + lowerCase + number + symbol;

function generatePassword(){
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length> password.length){
password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordShow.value = password;
}

function copyPassword(){
    generatePassword.select();
    document.execCommand("copy");
}