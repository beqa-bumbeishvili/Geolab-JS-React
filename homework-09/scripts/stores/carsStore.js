import Car from '../classes/car.js'

function getCarsList() {
    let porsche = new Car('porsche-1', 'Porsche', 'Panamera', 'black', 2020, '120000$', 330);
    let mercedes = new Car('mercedes-1', 'Mercedes', 'S-Class', 'white', 2019, '94250$', 362);
    let toyota = new Car('toyota-1', 'Toyota', 'Prius', 'blue', 2009, '5000$', 118);
    let honda = new Car('honda-1', 'Honda', 'Fit', 'silver', 2006, '3500$', 110);
    let ford = new Car('ford-1', 'Ford', 'Fusion', 'gray', 2015, '32780$', 175);

    return [porsche, mercedes, toyota, honda, ford];
}

function getCarIdBy(condition) {
    let cars = getCarsList();

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

function getAveragePrice(){
    let cars = getCarsList();

    let sum = 0;

    for (let i = 0; i < cars.length; i++) {
        let priceAsNumber = parseInt(cars[i].price);
        let validNumber = !isNaN(priceAsNumber);
        if (validNumber) sum = sum + priceAsNumber;
    }

    return sum/cars.length;
}


export {getCarsList, getCarIdBy, getAveragePrice}