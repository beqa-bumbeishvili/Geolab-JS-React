let porsche = { id: 'porsche-1', manufacturer: 'Porsche', model: 'Panamera', color: 'black', releaseYear: 2020, price: '120000$', horsepower: 330 };
let mercedes = { id: 'mercedes-1', manufacturer: 'Mercedes', model: 'S-Class', color: 'white', releaseYear: 2019, price: '94250$', horsepower: 362 };
let toyota = { id: 'toyota-1', manufacturer: 'Toyota', model: 'Prius', color: 'blue', releaseYear: 2009, price: '5000$', horsepower: 118 };
let honda = { id: 'honda-1', manufacturer: 'Honda', model: 'Fit', color: 'silver', releaseYear: 2006, price: '3500$', horsepower: 110 };
let ford = { id: 'ford-1', manufacturer: 'Ford', model: 'Fusion', color: 'gray', releaseYear: 2015, price: '32780$', horsepower: 175 };

let cars = [porsche, mercedes, toyota, honda, ford];

function showCarDetail(carID) {
    let car = cars.find(d => d.id === carID); //find car with id
    let alertText;

    if (car) {  //if car found
        alertText =  `ამ მანქანას აქვს შემდეგი მახასიათებლები:
მარკა - ${car.manufacturer}
ფერი - ${car.color}
მოდელი - ${car.model}
გამოშვების წელი - ${car.releaseYear}
ცხენის ძალა - ${car.horsepower}
ფასი - ${car.price}`
    };

    alert(alertText);

}