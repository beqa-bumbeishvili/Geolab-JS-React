class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

        static checkField = (username, password) => {
            return username === "" || password === "";
        }

        static checkUsername(users, username) {
            return users.find(user => user.username === username);
        }

        static checkEmail(email) {
            let pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            let validEmail = pattern.exec(email) !== null;
        
            return validEmail;
        }

        static checkUser(users, possibleUsername, possibleEmail, possiblePassword) {
            return users.find(user => user.username === possibleUsername
                && user.email === possibleEmail
                && user.password === possiblePassword);
        }
        static checkPasswordStrength = password => {
            let pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[^\w\s]).{6,}$/;
            let validPassword = pattern.exec(password) !== null;
        
            return validPassword;
        }
}

let user1 = new User('user1', 'user1@gmail.com', 'uydsZ39YL$WP');
let user2 = new User('user2', 'user2@gmail.com', 'ui/6NdAa7b');
let user3 = new User('user3', 'user3@gmail.com', 'W8g(MifboYf6rKdg');
let user4 = new User('user4', 'user4@gmail.com', '@6o7kw');
let user5 = new User('user5', 'user5@gmail.com', '2K22H9');
let user6 = new User('user6', 'user6@gmail.com', 'jAf6]D3zXbnZ)g');


let users = [user1, user2, user3, user4, user5, user6];

function showLoginMessage() {
    let username = document.getElementById("inputUsername").value;
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;

    let fieldIsEmpty = User.checkField(username, password);
    let usernameFound = User.checkUsername(users, username);
    let isCorrectEmail = User.checkEmail(email);
    let userFound = User.checkUser(users, username, email, password);

    let passwordIsStrong = User.checkPasswordStrength(password);

    let loginResult = getLoginMessage(fieldIsEmpty, usernameFound, isCorrectEmail, userFound, passwordIsStrong);

    alert(loginResult.message);

    if (loginResult.successFullLogin)
        navigateTo('index');
}

function getLoginMessage(fieldIsEmpty, usernameFound, isCorrectEmail, userFound, passwordIsStrong) {
    let message;
    let successFullLogin = false;

    if (fieldIsEmpty) { message = 'გთხოვთ შეავსეთ მონაცემები'; }
    else if (!usernameFound) { message = 'მოცემული სახელით მომხმარებელი არ მოიძებნა'; }
    else if (!isCorrectEmail) { message = 'იმეილი არის არასწორ ფორმატში, გთხოვთ გაასწოროთ'; }
    else if (!userFound) { message = 'პაროლი ან მეილი არასწორია'; }
    else if (!passwordIsStrong) {
        message = 'სისტემაში შეხვედით წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი';
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