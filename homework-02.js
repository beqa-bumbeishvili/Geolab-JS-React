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
 ფასი - ${porsche.price}
 `;

console.log(description);

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

    if (price < 1500) {
        carFound = true;
        console.log(currentCar.manufacturer + ' ' + currentCar.model);
    }
}

if (!carFound) console.log('სამწუხაროდ ამ ფასში მანქანას ვერ შეიძენთ :(');

/*
    Author: Beqa Bumbeishvili
*/