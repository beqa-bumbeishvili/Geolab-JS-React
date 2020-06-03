let users = [
    {
        username: 'user1',
        email: 'user1@gmail.com',
        password: 'uydsZ39YL$WP'
    },
    {
        username: 'user2',
        email: 'user2@gmail.com',
        password: 'ui/6NdAa7b'
    },
    {
        username: 'user3',
        email: 'user3@gmail.com',
        password: 'W8g(MifboYf6rKdg'
    },
    {
        username: 'user4',
        email: 'user4@gmail.com',
        password: '@6o7kw'
    },
    {
        username: 'user5',
        email: 'user5@gmail.com',
        password: '+K]2H9'
    },
    {
        username: 'user6',
        email: 'user6@gmail.com',
        password: 'jAf6]D3zXbnZ)g'
    }
];

function showLoginMessage() {
    let username = document.getElementById("inputUsername").value;
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;

    let fieldIsEmpty = checkField(username, password);
    let usernameFound = checkUsername(users, username);
    let isCorrectEmail = checkEmail(email);
    let userFound = checkUser(users, username, email, password);
    let passwordIsStrong = checkPasswordStrength(password);

    let loginResult = getLoginMessage(fieldIsEmpty, usernameFound, isCorrectEmail, userFound, passwordIsStrong);

    alert(loginResult.message);

    if (loginResult.successFullLogin)
        navigateTo('index');
}

function checkUsername(users, username) {
    return users.find(user => user.username === username);
}

function checkEmail(email){
    let pattern = /\S+@\S+\.\S+/;
    let validEmail = pattern.exec(email) !== null;
    
    return validEmail;
}

function checkUser(users, possibleUsername, possibleEmail, possiblePassword) {
    return users.find(user => user.username === possibleUsername
        && user.email === possibleEmail
        && user.password === possiblePassword);
}

function checkPasswordStrength(password) {
    return password.length >= 8;
}

function checkField(username, password) {
    return username === "" || password === "";
}

function getLoginMessage(fieldIsEmpty, usernameFound, isCorrectEmail, userFound, strongPassword) {
    let message;
    let successFullLogin = false;

    if (fieldIsEmpty) { message = 'გთხოვთ შეავსეთ მონაცემები'; }
    else if (!usernameFound) { message = 'მოცემული სახელით მომხმარებელი არ მოიძებნა'; }
    else if (!isCorrectEmail) { message = 'იმეილი არის არასწორ ფორმატში, გთხოვთ გაასწოროთ'; }
    else if (!userFound) { message = 'პაროლი ან მეილი არასწორია'; }
    else if (!strongPassword) {
        message = 'შეხვედით სისტემაში წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი';
        successFullLogin = true;
    }
    else {
        message = 'შეხვედით სისტემაში წარმატებით';
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
    togglePasswordVisibility();
    toggleEyeIcon();
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