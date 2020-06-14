//show each car title at the top of each image
function displayCarTitles(cars) {
    for (let i = 0; i < cars.length; i++) {
        let containerDiv = document.getElementById(cars[i].id);
        let paragraphDiv = containerDiv.querySelector('.car-title');
        paragraphDiv.innerHTML = cars[i].manufacturer + ' ' + cars[i].model;
    }
}

//find cars under price
function getFilteredCars(cars, price) {
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

//reusable function to disable all buy buttons
function disableAllBuyButtons() {
    let buyButtons = document.querySelectorAll('.buy-button');

    for (let i = 0; i < buyButtons.length; i++)
        buyButtons[i].disabled = true;
}


function highlightBuyButtons(availableCars) {
    disableAllBuyButtons();

    for (let i = 0; i < availableCars.length; i++) {
        let currentCarID = availableCars[i].id;

        toggleBuyButtonVisibility(currentCarID, false);
    }
}

function toggleBuyButtonVisibility(carID, disable) {
    let chosenCarContainer = document.querySelector('#' + carID);

    chosenCarContainer.querySelector('.buy-button').disabled = disable;
}

export {
    displayCarTitles, getFilteredCars, availableCarsTextList, disableAllBuyButtons, highlightBuyButtons,
    toggleBuyButtonVisibility
}