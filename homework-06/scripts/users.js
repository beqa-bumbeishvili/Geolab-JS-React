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

let incorrectInput = { username: 'user7', password: 'incorrect_password' };
let correctInput = { username: 'user5', password: '+K]2H9' };

let usernameFound = checkUsername(users, correctInput.username);
let userFound = checkUser(users, correctInput.username, correctInput.password);
let strongPassword = checkPasswordStrength(correctInput.password);

let loginMessage = getLoginMessage(usernameFound, userFound, strongPassword);

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