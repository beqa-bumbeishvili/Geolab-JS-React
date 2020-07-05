import React from 'react';
import carsStore from '../helpers/carsStore'
import alertsHelper from '../helpers/alertsHelper'
import carsHelper from '../helpers/carsHelper'

class Buttons extends React.Component {

    private _showAveragePrice = () => {
        let averagePrice = carsStore.getAveragePrice();

        let message = alertsHelper.averagePriceMessage(averagePrice);

        alert(message);
    }

    private _highlightCarBy = (condition: string) => {
        carsHelper.disableAllBuyButtons();

        let chosenCarID = carsStore.getCarIdBy(condition) || '';

        carsHelper.toggleBuyButtonVisibility(chosenCarID, false);
    }


    private _searchResultAlert() {
        let price = (document.getElementById('price-input') as HTMLInputElement)!.value;

        let priceAsNumber = parseInt(price);
        let validNumber = !isNaN(priceAsNumber);
        let alertText;

        let cars = carsStore.getCarsList();

        if (validNumber) {
            let availableCars = carsHelper.getFilteredCars(cars, price);

            carsHelper.highlightBuyButtons(availableCars);

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

    render() {
        return (
            <div className='mt-5'>
                <form className='form-inline my-2 my-lg-0 text-center d-block'>
                    <button className='btn btn-outline-primary my-2 my-sm-0' id='average-price-btn' type='button'
                        onClick={this._showAveragePrice} >საშუალო ფასი</button>
                    <button id='expensive-car-highight' className='btn btn-outline-primary my-2 my-sm-0' type='button'
                        onClick={() => this._highlightCarBy('max_price')} > ყველაზე ძვირიანი მანქანა </button>
                    <button id="cheap-car-highight" className='btn btn-outline-primary my-2 my-sm-0' type='button'
                        onClick={() => this._highlightCarBy('min_price')}> ყველაზე იაფიანი მანქანა</button>
                    <input className='form-control mr-sm-2' type='text' placeholder='ფასი' aria-label='Search' id='price-input'></input>
                    <button id='searchResult' className='btn btn-outline-primary my-2 my-sm-0' type='button'
                    onClick={this._searchResultAlert} >შემოწმება</button>
                </form>
            </div>
        )
    }
}

export default Buttons;