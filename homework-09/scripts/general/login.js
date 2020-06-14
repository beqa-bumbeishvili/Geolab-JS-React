import * as usersHelper from '../helpers/usersHelper.js'
import * as usersStore from '../stores/usersStore.js'
import * as alertsHelper from '../helpers/alertsHelper.js'

let users = usersStore.getUserList();

function showLoginMessage() {
    let username = document.getElementById("inputUsername").value;
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;

    let fieldIsEmpty = usersHelper.checkField(username, password);
    let usernameFound = usersHelper.checkUsername(users, username);
    let isCorrectEmail = usersHelper.checkEmail(email);
    let userFound = usersHelper.checkUser(users, username, email, password);

    let passwordIsStrong = usersHelper.checkPasswordStrength(password);

    let loginResult = getLoginMessage(fieldIsEmpty, usernameFound, isCorrectEmail, userFound, passwordIsStrong);

    alert(loginResult.message);

    if (loginResult.successFullLogin)
        navigateTo('index');
}

function getLoginMessage(fieldIsEmpty, usernameFound, isCorrectEmail, userFound, passwordIsStrong) {
    let message;
    let successFullLogin = false;

    if (fieldIsEmpty) { message = alertsHelper.fillInputErrosMessage(); }
    else if (!usernameFound) { message =  alertsHelper.userNotFoundErrorMessage(); }
    else if (!isCorrectEmail) { message = alertsHelper.incorrectEmailFormat(); }
    else if (!userFound) { message = alertsHelper.incorrectEmailOrPassword(); }
    else if (!passwordIsStrong) {
        message = alertsHelper.succsessLoginAlertMessage();
        successFullLogin = true;
    }
    else {
        message = alertsHelper.successLoginMessage();
        successFullLogin = true;
    }

    return {
        message: message,
        successFullLogin: successFullLogin
    };
}

function navigateTo(pageName) {
    window.location = pageName + '.html';
}

function passwordEyeClick() {
    usersHelper.togglePasswordVisibility();
    usersHelper.toggleEyeIcon();
}

if (document.querySelector('#logIn')) 
    document.querySelector('#logIn').addEventListener('click', function() {
    showLoginMessage(this);
});

if (document.querySelector('#eye-icon')) 
    document.querySelector('#eye-icon').addEventListener('click', function() {
    passwordEyeClick(this);
});

if (document.querySelector('#mainPageLogInBtn')) 
    document.querySelector('#mainPageLogInBtn').addEventListener('click', function() {
    navigateTo('login');
});