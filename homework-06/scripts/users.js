let users = [
    {
        username: 'user1',
        password: 'uydsZ39YL$WP'
    },
    {
        username: 'user2',
        password: 'ui/6NdAa7b'
    },
    {
        username: 'user3',
        password: 'W8g(MifboYf6rKdg'
    },
    {
        username: 'user4',
        password: '@6o7kw'
    },
    {
        username: 'user5',
        password: '+K]2H9'
    },
    {
        username: 'user6',
        password: 'jAf6]D3zXbnZ)g'
    }
];

function showLoginMessage(){
    let username = '' // აქ აიღებ username-ს როგორც სოფო აკეთებს ვიდეოში
    let password =  '' // აქ აიღებ password-ს როგორც სოფო აკეთებს ვიდეოში

    let usernameFound = checkUsername(users, username);
    let userFound = checkUser(users, username, password);
    let passwordIsStrong = checkPasswordStrength(password);

    let loginMessage = getLoginMessage(usernameFound, userFound, passwordIsStrong);

    // აქ გააკეთე ალერთი დაბრუნებული მესიჯით
}

function checkUsername(users, username) {
    return users.find(user => user.username === username);
}

function checkUser(users, possibleUsername, possiblePassword) {
    return users.find(user => user.username === possibleUsername && user.password === possiblePassword);
}

function checkPasswordStrength(password) {
    return password.length >= 8;
}

function getLoginMessage(usernameFound, userFound, strongPassword) {
    let message;

    if (!usernameFound) message = 'მოცემული სახელით მომხმარებელი არ მოიძებნა';
    else if (!userFound) message = 'პაროლი არასწორია';
    else if (!strongPassword) message = 'შეხვედით სისტემაში წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი';
    else message = 'შეხვედით სისტემაში წარმატებით';

    return message;
}

function navigateToLogin() {
    window.location = "login.html"
}