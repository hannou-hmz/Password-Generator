const numbers = "1234567890";
const upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase = "zxcvbnmlkjhgfdsaqwertyuiop";
const specialChars = "-=!@#$%^&*()_+}''{|?>: ";
let isUpperCase = document.getElementById("upper");
let isLowerCase = document.getElementById("lower");
let isNumber = document.getElementById("nums");
let isSpecial = document.getElementById("special");

function updateLengthDisplay(){
    passLength = document.getElementById("passLength").value;
    document.getElementById("lengthNumber").textContent = passLength;

}


function generatePassword(){
    let length = Number(document.getElementById("lengthNumber").textContent);
    let options = [];
    let password = "";

    if(length < 9){
        alert("Password length must be at least 9 characters!!");
        return;
    }
    
    if(isUpperCase.checked){options.push(upperCase);}
    if(isLowerCase.checked){options.push(lowerCase);}
    if(isNumber.checked){options.push(numbers);}
    if(isSpecial.checked){options.push(specialChars);}

    if(isUpperCase.checked === false && 
        isLowerCase.checked === false && 
        isNumber.checked === false && 
        isSpecial.checked === false)
        {
            alert("Choose one of the options...");
            return;
        }

    for(let i = 0; i<length; i++){
        let random = options[Math.floor(Math.random() * options.length)];
        password += random.charAt(Math.floor(Math.random()* random.length));
    }

    document.getElementById("bar-input").value = password;
}

function reset(){
    isUpperCase.checked = false ; 
    isLowerCase.checked = false ;
    isNumber.checked = false ; 
    isSpecial.checked = false;
    document.getElementById("bar-input").value = "ngo1[#!s";
    document.getElementById("lengthNumber").textContent = 9;
    document.getElementById("passLength").value = 9;
}