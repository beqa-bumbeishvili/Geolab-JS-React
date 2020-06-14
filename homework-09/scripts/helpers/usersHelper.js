function checkField(username, password) {
    return username === "" || password === "";
}

function checkUsername(users, username) {
    return users.find(user => user.username === username);
}

function checkEmail(email) {
    let pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let validEmail = pattern.exec(email) !== null;

    return validEmail;
}

function checkUser(users, possibleUsername, possibleEmail, possiblePassword) {
    return users.find(user => user.username === possibleUsername
        && user.email === possibleEmail
        && user.password === possiblePassword);
}

function checkPasswordStrength(password) {
    let pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[^\w\s]).{6,}$/;
    let validPassword = pattern.exec(password) !== null;

    return validPassword;
}

function togglePasswordVisibility() {
    let passwordInput = document.querySelector('#inputPassword');
    if (passwordInput.type === 'password')
        passwordInput.type = 'text';
    else
        passwordInput.type = 'password';
}

function toggleEyeIcon() {
    let eyeIcon = document.querySelector('#eye-icon');

    eyeIcon.classList.toggle('fa-eye-slash');
    eyeIcon.classList.toggle('fa-eye');
}

export { 
    checkField, checkUsername, checkEmail, checkUser, checkPasswordStrength, togglePasswordVisibility, toggleEyeIcon
}