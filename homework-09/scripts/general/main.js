import * as carsHelper from '../helpers/carsHelper.js'
import * as carsStore from '../stores/carsStore.js'
import * as alertsHelper from '../helpers/alertsHelper.js'

let cars = carsStore.getCarsList();

//show car titles in p tag
carsHelper.displayCarTitles(cars);

addClickEvents();

//show car details when user clicks on the image
function showCarDetail(carImageElement) {
    let carID = carImageElement.parentNode.id;
    let car = cars.find(d => d.id === carID); //find car with id
    let alertText;

    if (car) {  //if car found
        alertText = car.getDescription();
    }
    else {
        alertText = alertsHelper.idSearchFailed();
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
        let availableCars = carsHelper.getFilteredCars(cars, priceAsNumber);

        highlightBuyButtons(availableCars);

        if (availableCars.length > 0) {
            alertText = carsHelper.availableCarsTextList(availableCars);
        } else {
            alertText = alertsHelper.carNotFoundWithinPrice();
        }
    }
    else {
        alertText = alertsHelper.incorrectPriceFormat();
    }

    alert(alertText);
}

function highlightBuyButtons(availableCars) {
    carsHelper.disableAllBuyButtons();

    for (let i = 0; i < availableCars.length; i++) {
        let currentCarID = availableCars[i].id;

        toggleBuyButtonVisibility(currentCarID, false);
    }
}

function highlightCarBy(condition) {
    carsHelper.disableAllBuyButtons();

    let chosenCarID = carsStore.getCarIdBy(condition);

    toggleBuyButtonVisibility(chosenCarID, false);
}

function toggleBuyButtonVisibility(carID, disable) {
    let chosenCarContainer = document.querySelector('#' + carID);

    chosenCarContainer.querySelector('.buy-button').disabled = disable;
}

//show average car price message
function avgCarPriceAlert() {
    let averagePrice = carsStore.getAveragePrice();

    let message = alertsHelper.averagePriceMessage(averagePrice);

    alert(message);
}

function addClickEvents() {
    averagePriceClick();
    expensiveCarClick();
    cheapestCarClick();
    searchResultClick();
    carImageClick();
}

function averagePriceClick() {
    document.querySelector('#average-price-btn').addEventListener("click", function () {
        avgCarPriceAlert(this);
    });
}

function expensiveCarClick() {
    document.querySelector('#expensive-car-highight').addEventListener("click", function () {
        highlightCarBy('max_price');
    });
}

function cheapestCarClick() {
    document.querySelector('#cheap-car-highight').addEventListener("click", function () {
        highlightCarBy('min_price');
    });
}

function searchResultClick() {
    document.querySelector('#searchResult').addEventListener("click", function () {
        searchResultAlert();
    });
}

function carImageClick() {
    document.querySelectorAll('.car-image').forEach(item => {
        item.addEventListener('click', function () {
            showCarDetail(this);
        });
    });
}

/*
Authors:
 Beka Bumbeishvili
 Nino Jakhveladze
*/