class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static checkField(username, password) {
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