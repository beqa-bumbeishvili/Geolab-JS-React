class Car {
    constructor(id, manufacturer, model, color, releaseYear, price, horsepower) {
        this.id = id;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.releaseYear = releaseYear;
        this.price = price;
        this.horsepower = horsepower;
    }

    getDescription() {
        return `ამ მანქანას აქვს შემდეგი მახასიათებლები: \nმარკა - ${this.manufacturer} \nფერი - ${this.color} \nმოდელი - ${this.model} \nგამოშვების წელი - ${this.releaseYear} \nცხენის ძალა - ${this.horsepower} \nფასი - ${this.price}`;
    }

    //show each car title at the top of each image
    static displayCarTitles(cars) {
        for (let i = 0; i < cars.length; i++) {
            let containerDiv = document.getElementById(cars[i].id);
            let paragraphDiv = containerDiv.querySelector('.car-title');
            paragraphDiv.innerHTML = cars[i].manufacturer + ' ' + cars[i].model;
        }
    }

    //find cars under price
    static getFilteredCars(cars, price) {
        let filteredCars = [];

        for (let i = 0; i < cars.length; i++) {
            let currentPrice = parseInt(cars[i].price);

            if (!isNaN(currentPrice) && currentPrice <= price) {
                filteredCars.push(cars[i]);
            }
        }

        return filteredCars;
    }

    //generate text from cars
    static availableCarsTextList(availableCars) {
        let carInfo = 'ამ ფასად შეგიძლიათ შეიძინოთ: \n';

        for (let i = 0; i < availableCars.length; i++) {
            let currentCar = availableCars[i];
            carInfo += `${currentCar.manufacturer} ${currentCar.model} ${currentCar.price} \n`;
        }

        return carInfo;
    }

    static getCarIdBy(cars, condition) {
        let chosenCar = cars[0];

        for (let i = 1; i < cars.length; i++) {
            let chosenCarPriceAsNumber = parseInt(chosenCar.price);
            let currentPriceAsNumber = parseInt(cars[i].price);
            let validPrices = !isNaN(chosenCarPriceAsNumber) && !isNaN(currentPriceAsNumber);

            if (!validPrices) return undefined;

            let searchCondition = condition === 'min_price' ? currentPriceAsNumber < chosenCarPriceAsNumber : currentPriceAsNumber > chosenCarPriceAsNumber

            if (searchCondition)
                chosenCar = cars[i];
        }

        return chosenCar.id;
    }

    //reusable function to disable all buy buttons
    static disableAllBuyButtons() {
        let buyButtons = document.querySelectorAll('.buy-button');

        for (let i = 0; i < buyButtons.length; i++)
            buyButtons[i].disabled = true;
    }
}

let porsche = new Car('porsche-1', 'Porsche', 'Panamera', 'black', 2020, '120000$', 330);
let mercedes = new Car('mercedes-1', 'Mercedes', 'S-Class', 'white', 2019, '94250$', 362);
let toyota = new Car('toyota-1', 'Toyota', 'Prius', 'blue', 2009, '5000$', 118);
let honda = new Car('honda-1', 'Honda', 'Fit', 'silver', 2006, '3500$', 110);
let ford = new Car('ford-1', 'Ford', 'Fusion', 'gray', 2015, '32780$', 175);

let cars = [porsche, mercedes, toyota, honda, ford];

//show car titles in p tag
Car.displayCarTitles(cars);

//show car details when user clicks on the image
function showCarDetail(carImageElement) {
    let carID = carImageElement.parentNode.id;
    let car = cars.find(d => d.id === carID); //find car with id
    let alertText;

    if (car) {  //if car found
        alertText = car.getDescription();
    }
    else {
        alertText = 'მანქანა ვერ მოიძებნა';
    }
    alert(alertText);
}

//show available cars under certain price
function searchResultAlert() {
    let price = document.getElementById('price-input').value;
    let priceAsNumber = parseInt(price);
    let validNumber = !isNaN(priceAsNumber);
    let alertText;

    if (validNumber) {
        let availableCars = Car.getFilteredCars(cars, priceAsNumber);

        highlightBuyButtons(availableCars);

        if (availableCars.length > 0) {
            alertText = Car.availableCarsTextList(availableCars);
        } else {
            alertText = "სამუხაროდ ამ ფასში მანქანა ვერ მოიძებნა";
        }
    }
    else {
        alertText = "გთხოვთ შეიყვანოთ ფასი სწორ ფორმატში.";
    }
    alert(alertText);
}

function highlightBuyButtons(availableCars) {
    Car.disableAllBuyButtons();

    for (let i = 0; i < availableCars.length; i++) {
        let currentCarID = availableCars[i].id;

        toggleBuyButtonVisibility(currentCarID, false);
    }
}

function highlightCarBy(condition) {
    Car.disableAllBuyButtons();

    let chosenCarID = Car.getCarIdBy(cars, condition);

    toggleBuyButtonVisibility(chosenCarID, false);
}

function toggleBuyButtonVisibility(carID, disable) {
    let chosenCarContainer = document.querySelector('#' + carID);

    chosenCarContainer.querySelector('.buy-button').disabled = disable;
}

//show average car price message
function avgCarPriceAlert() {
    let sum = 0;

    for (let i = 0; i < cars.length; i++) {
        let priceAsNumber = parseInt(cars[i].price);
        let validNumber = !isNaN(priceAsNumber);
        if (validNumber) sum = sum + priceAsNumber;
    }

    return alert(`ჩვენს საიტზე არსებული მანქანების საშუალო ღირებულება არის ${sum / cars.length}$`);
}

/*
Authors:
 Beka Bumbeishvili
 Nino Jakhveladze
*/