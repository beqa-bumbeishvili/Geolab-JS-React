let porsche = { id: 'porsche-1',
    manufacturer: 'Porsche', 
     model: 'Panamera', 
     color: 'black', 
     releaseYear: 2020, 
     price: '120000$',
     horsepower: 330 };

let mercedes = { id: 'mercedes-1', 
    manufacturer: 'Mercedes',
     model: 'S-Class', 
     color: 'white', 
     releaseYear: 2019, 
     price: '94250$', 
     horsepower: 362 };

let toyota = { id: 'toyota-1', 
    manufacturer: 'Toyota', 
    model: 'Prius', 
    color: 'blue', 
    releaseYear: 2009,
     price: '5000$', 
     horsepower: 118 };

let honda = { id: 'honda-1', 
    manufacturer: 'Honda',
     model: 'Fit', 
     color: 'silver', 
     releaseYear: 2006, 
     price: '3500$', 
     horsepower: 110 };

let ford = { id: 'ford-1', 
    manufacturer: 'Ford', 
    model: 'Fusion', 
    color: 'gray', 
    releaseYear: 2015, 
    price: '32780$',
    horsepower: 175 };

let cars = [porsche, mercedes, toyota, honda, ford];

//show card details when user clicks on the image
function showCarDetail(carID) {
    let car = cars.find(d => d.id === carID); //find car with id
    let alertText;

    if (car) {  //if car found
        alertText = `ამ მანქანას აქვს შემდეგი მახასიათებლები:
მარკა - ${car.manufacturer}
ფერი - ${car.color}
მოდელი - ${car.model}
გამოშვების წელი - ${car.releaseYear}
ცხენის ძალა - ${car.horsepower}
ფასი - ${car.price}`;
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
        let availableCars = getFilteredCars(priceAsNumber);

        if (availableCars.length > 0) {
            alertText = availableCarsTextList(availableCars);
        } else {
            alertText = "სამუხაროდ ამ ფასში მანქანა ვერ მოიძებნა";
        }
    }
   else {
       alertText = "გთხოვთ შეიყვანოთ ფასი სწორ ფორმატში.";
   }
    alert(alertText);
}

//find cars under price
function getFilteredCars(price) {
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
function availableCarsTextList(availableCars) {
    let carInfo = 'ამ ფასად შეგიძლიათ შეიძინოთ: \n';

    for (let i = 0; i < availableCars.length; i++) {
        let currentCar = availableCars[i];
        carInfo += `${currentCar.manufacturer} ${currentCar.model} ${currentCar.price} \n`;
    }

    return carInfo;
}