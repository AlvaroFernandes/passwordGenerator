//select buttom element.
const generateBtn = document.querySelector('#generate');

//variables to create password
const specials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';

// variable ta will recieve the character for the password
let str;

function passwordSize() {

    //define size of password  
    let lengthPassword = prompt("How many character do you want on your password?");

    // lengthPassword = parseInt(lengthPassword);
    console.log(typeof lengthPassword);
    console.log(lengthPassword);

    //check if user choose a number and if this number is biger tham 6.
    if (lengthPassword === '') {
        alert('choose a number of characteres for your password.');
        passwordSize();
    } else {
        passwordParameters(lengthPassword);
    }
}

// Get parameters to the #password input
function passwordParameters(lengthPassword) {


    //if password contain specials character.
    let haveSpecials = confirm('Do you want specials characteres in your password?');
    console.log(haveSpecials);

    //if password contain uppercase.
    let haveUppercase = confirm('Do you want uppercase characteres in your password?');
    console.log(haveUppercase);

    //if password contain numbers.
    let haveNumbers = confirm('Do you want numbers in your password?');
    console.log(haveNumbers);



    //create password according with user selections.
    if (haveSpecials === true && haveUppercase === true && haveNumbers === true) {
        let str = lowercase + specials + uppercase + numbers;
        generatePassword(lengthPassword, str);
    }
    if (haveSpecials === true && haveUppercase === true && haveNumbers === false) {
        let str = lowercase + specials + uppercase;
        generatePassword(lengthPassword, str);
    }
    if (haveSpecials === true && haveUppercase === false && haveNumbers === false) {
        let str = lowercase + specials;
        generatePassword(lengthPassword, str);
    }
    if (haveSpecials === false && haveUppercase === true && haveNumbers === true) {
        let str = lowercase + uppercase + numbers;
        generatePassword(lengthPassword, str);
    }
    if (haveSpecials === false && haveUppercase === true && haveNumbers === false) {
        let str = lowercase + uppercase;
        generatePassword(lengthPassword, str);
    }
    if (haveSpecials === false && haveUppercase === false && haveNumbers === true) {
        let str = lowercase + numbers;
        generatePassword(lengthPassword, str);
    }
    if (haveSpecials === false && haveUppercase === false && haveNumbers === false) {
        let str = lowercase;
        generatePassword(lengthPassword, str);
    }

}

//generate 
function generatePassword(lengthPassword, str) {
    console.log(lengthPassword);
    console.log(str);
    let password = '';

    for (let i = 0; i < lengthPassword; i++) {
        let strLength = str.length;
        let rChar = Math.floor(Math.random() * strLength);
        console.log(rChar);
        password += str.substring(rChar, rChar + 1);
    }



    showPassword(password);

}

function showPassword(password) {
    //let password = generatePassword();
    let passwordText = document.querySelector('#password');
    console.log(password);

    passwordText.innerHTML = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', passwordSize);