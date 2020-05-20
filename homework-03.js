/* 1. შექმენით ობიექტი მანქანა. გაუკეთეთ მახასიათებლები მარკა, მოდელი, ფერი, გამოშვების წელი, ფასი, ცხენის ძალა. 
 შემდეგ დაბეჭდეთ სტრინგი რომელიც შეიცავს ყველა ზემოთაღნიშნულ ველს პარამეტრად */

let porsche = {
    manufacturer: 'Porsche',
    model: 'Panamera',
    color: 'black',
    releaseYear: 2020,
    price: '120000$',
    horsepower: 330
};

let description = `ამ მანქანას აქვს შემდეგი მახასიათებლები:
 მარკა - ${porsche.manufacturer},
 ფერი - ${porsche.color},
 მოდელი - ${porsche.model},
 გამოშვების წელი - ${porsche.releaseYear},
 ცხენის ძალა - ${porsche.horsepower},
 ფასი - ${porsche.price}`;

// console.log(description);

/* 2. შექმენით ზემოთხსენებული მახასიათებლების მქონე რამდენიმე მანქანის ობიექტი.
გააკეთეთ მანქანების მასივი და ციკლის გამოყენებით დაბეჭდეთ ყველა იმ მანქანის მარკა და მოდელი რომლის ფასიც ნაკლებია 15000.
 თუ ასეთი არ მოიძებნა დაბეჭდეთ “სამწუხაროდ ამ ფასში მანქანას ვერ შეიძენთ :( ” */

let mercedes = { manufacturer: 'Mercedes', model: 'S-Class', color: 'white', releaseYear: 2019, price: '94250$', horsepower: 362 };
let toyota = { manufacturer: 'Toyota', model: 'Prius', color: 'blue', releaseYear: 2009, price: '5000$', horsepower: 118 };
let honda = { manufacturer: 'Honda', model: 'Fit', color: 'silver', releaseYear: 2006, price: '3500$', horsepower: 110 };
let ford = { manufacturer: 'Ford', model: 'Fusion', color: 'gray', releaseYear: 2015, price: '32780$', horsepower: 175 };

let cars = [porsche, mercedes, toyota, honda, ford];
let carFound = false;

for (let i = 0; i < cars.length; i++) {
    let currentCar = cars[i];
    let price = parseInt(currentCar.price);

    if (price < 15000) {
        carFound = true;
        // console.log(currentCar.manufacturer + ' ' + currentCar.model);
    }
}

// if (!carFound) console.log('სამწუხაროდ ამ ფასში მანქანას ვერ შეიძენთ :(');




//################################ Homework 3 below #######################################



/* 1) ფუნქცია რომელიც ითვლის და აბრუნებს რიცხვთა მასივის საშუალო არითმეტიკულს და მისი გამოყენებით დაბეჭდეთ თქვენი მანქანების საშუალო ფასი შემდეგნაირი მესიჯით: 
“ჩვენს მარაგში არსებული მანქანების საშუალო ფასი არის : x” სადაც x რეალური რიცხვია.  */

let prices = cars.map(car => parseInt(car.price));
let averagePrice = getAverageNumber(prices);

console.log('ჩვენს მარაგში არსებული მანქანების საშუალო ფასი არის: ' + averagePrice);

function getAverageNumber(numbersArray) {
    if (numbersArray.length === 0) return 0;

    let sum = 0;

    numbersArray.forEach(value => sum += value);

    return sum / numbersArray.length;
}


/* 2) ფუნქცია რომელიც პოულობს და აბრუნებს მაქსიმალურ რიცხვს მასივში. და მისი გამოყენებით დაბეჭდეთ თქვენს კოლექციაში არსებული ყველაზე ძვირიანი
 მანქანის ფასი. შემდეგი მესიჯის სახით: 
“ჩვენს მარაგში არსებული ყველაზე ძვირიანი მანქანის ფასი არის : x” სადაც x რეალური რიცხვია.   */


let maxPrice = getMaxNumber(prices);

console.log('ჩვენს მარაგში არსებული ყველაზე ძვირიანი მანქანის ფასი არის: ' + maxPrice);

function getMaxNumber(numbersArray) {
    if (numbersArray.length === 0) return;

    let max = numbersArray[0];

    for (let i = 1; i < numbersArray.length; i++) {
        if (numbersArray[i] > max)
            max = numbersArray[i];
    }

    return max;
}


/* 3) დაწერეთ ყველამ თქვენ-თქვენთვის საკლასო სამუშაოში გაკეთებულ ამოცანა user-ს შემოწმების შესახებ უნდა შექმნათ user-ების მასივი. 
ყველა user-ს უნდა ქონდეს username და password ველები.   */

let users = [
    { username: 'user1', password: 'uydsZ39YL$WP' },
    { username: 'user2', password: 'ui/6NdAa7b' },
    { username: 'user3', password: 'W8g(MifboYf6rKdg' },
    { username: 'user4', password: '@6o7kw' },
    { username: 'user5', password: '+K]2H9' },
    { username: 'user6', password: 'jAf6]D3zXbnZ)g' }
];


/* 3) დაწერეთ ფუნქცია რომელიც ამოწმებს კონკრეტული string პარამეტრისთვის თუ არსებობს user ასეთი სახელით.   */

function checkUsername(users, username) {
    return users.find(user => user.username === username);
}


/* 4) დაწერეთ ფუნქცია რომელიც ამოწმებს მოიძებნება თუ არა user შემდეგი ველებით არგუმენტად მიღებული 2 სტრინგი possibleUsername და possiblePassword  */

function checkUser(users, possibleUsername, possiblePassword) {
    return users.find(user => user.username === possibleUsername && user.password === possiblePassword);
}


/* 5) გამოიძახეთ ორივე ფუნქცია რამე ნებისმიერი string-ებისთვის და გააკეთეთ მესიჯების ლოგიკური ჯაჭვი რომ დაიბეჭდოს სწორი მესიჯები.
“მოცემული სახელით მომხმარებელი არ მოიძებნა”,
“პაროლი არასწორია”, 
“შეხვედით სისტემაში წარმატებით”. 

დაამატეთ მე3 ფუნქცია: პაროლის სიძლიერის შესამოწმებელი. 
თუ მომხმარებლის პაროლის სიგრძე ნაკლებია 8ზე წარმატებულად სისტემაში შესვლის შემთხვევაში დაუწეროს: 
“შეხვედით სისტემაში წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი”*/

let incorrectInput = { username: 'user7', password: 'incorrect_password' };
let correctInput = { username: 'user5', password: '+K]2H9' };

let usernameFound = checkUsername(users, correctInput.username);
let userFound = checkUser(users, correctInput.username, correctInput.password);
let strongPassword = checkPasswordStrength(correctInput.password);

if (!usernameFound) console.log('მოცემული სახელით მომხმარებელი არ მოიძებნა');
else if (!userFound) console.log('პაროლი არასწორია');
else if (!strongPassword) console.log('შეხვედით სისტემაში წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი');
else console.log('შეხვედით სისტემაში წარმატებით');


function checkPasswordStrength(password){
    return password.length >= 8;
}

/*
    Author: Beqa Bumbeishvili
*/