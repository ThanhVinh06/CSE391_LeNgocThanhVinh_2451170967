const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");

const submitBtn = document.getElementById("submitBtn");

let nameValid = false;
let emailValid = false;
let passwordValid = false;
let confirmValid = false;
let phoneValid = false;

// Name Validation
nameInput.addEventListener("input", () => {

```
const msg = document.getElementById("nameMsg");

const value = nameInput.value.trim();

if(value.length >= 2 && value.length <= 50){
    msg.textContent = "✅ Valid Name";
    msg.className = "success";
    nameValid = true;
}
else{
    msg.textContent = "❌ Name must be 2-50 characters";
    msg.className = "error";
    nameValid = false;
}

checkForm();
```

});

// Email Validation
emailInput.addEventListener("input", () => {

```
const msg = document.getElementById("emailMsg");

const regex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(regex.test(emailInput.value)){
    msg.textContent = "✅ Valid Email";
    msg.className = "success";
    emailValid = true;
}
else{
    msg.textContent = "❌ Invalid Email";
    msg.className = "error";
    emailValid = false;
}

checkForm();
```

});

// Password Validation
passwordInput.addEventListener("input", () => {

```
const password =
    passwordInput.value;

const bar =
    document.getElementById("strengthBar");

const msg =
    document.getElementById("passwordMsg");

if(password.length < 8){

    bar.style.width = "33%";
    bar.style.background = "red";

    msg.textContent = "Weak";
    passwordValid = false;
}

else if(
    /[A-Za-z]/.test(password) &&
    /\d/.test(password) &&
    !/[!@#$%^&*]/.test(password)
){

    bar.style.width = "66%";
    bar.style.background = "orange";

    msg.textContent = "Medium";
    passwordValid = true;
}

else if(
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*]/.test(password)
){

    bar.style.width = "100%";
    bar.style.background = "green";

    msg.textContent = "Strong";
    passwordValid = true;
}

validateConfirm();
checkForm();
```

});

// Confirm Password
confirmInput.addEventListener("input", () => {
validateConfirm();
});

function validateConfirm(){

```
const msg =
    document.getElementById("confirmMsg");

if(
    confirmInput.value ===
    passwordInput.value &&
    confirmInput.value !== ""
){
    msg.textContent = "✅ Password Match";
    msg.className = "success";
    confirmValid = true;
}
else{
    msg.textContent = "❌ Password Not Match";
    msg.className = "error";
    confirmValid = false;
}

checkForm();
```

}

// Phone Validation + Auto Format
phoneInput.addEventListener("input", () => {

```
let numbers =
    phoneInput.value.replace(/\D/g,"");

if(numbers.length > 10){
    numbers = numbers.slice(0,10);
}

let formatted = "";

if(numbers.length <= 4){
    formatted = numbers;
}
else if(numbers.length <= 7){
    formatted =
        numbers.slice(0,4)
        + "-"
        + numbers.slice(4);
}
else{
    formatted =
        numbers.slice(0,4)
        + "-"
        + numbers.slice(4,7)
        + "-"
        + numbers.slice(7);
}

phoneInput.value = formatted;

const msg =
    document.getElementById("phoneMsg");

if(numbers.length === 10){
    msg.textContent = "✅ Valid Phone";
    msg.className = "success";
    phoneValid = true;
}
else{
    msg.textContent = "❌ Phone must have 10 digits";
    msg.className = "error";
    phoneValid = false;
}

checkForm();
```

});

// Enable Submit
function checkForm(){

```
submitBtn.disabled = !(
    nameValid &&
    emailValid &&
    passwordValid &&
    confirmValid &&
    phoneValid
);
```

}

// Submit
document
.getElementById("registerForm")
.addEventListener("submit", function(e){

```
e.preventDefault();

alert(
    "Đăng ký thành công!\n\n" +
    "Tên: " + nameInput.value + "\n" +
    "Email: " + emailInput.value + "\n" +
    "Phone: " + phoneInput.value
);
```

});
