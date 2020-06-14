import User from '../classes/user.js'

function getUserList() {
    let user1 = new User('user1', 'user1@gmail.com', 'uydsZ39YL$WP');
    let user2 = new User('user2', 'user2@gmail.com', 'ui/6NdAa7b');
    let user3 = new User('user3', 'user3@gmail.com', 'W8g(MifboYf6rKdg');
    let user4 = new User('user4', 'user4@gmail.com', '@6o7kw');
    let user5 = new User('user5', 'user5@gmail.com', '2K22H9');
    let user6 = new User('user6', 'user6@gmail.com', 'jAf6]D3zXbnZ)g');

    return [user1, user2, user3, user4, user5, user6];
}

export { 
    getUserList
}