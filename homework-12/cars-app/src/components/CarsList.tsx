import React from 'react';
import CarItem from './CarItem'
import carsStore from '../helpers/carsStore'

const carsList = carsStore.getCarsList();

interface CarsListProps {
    inputValue: string
}

class CarsList extends React.Component<CarsListProps> {
    _disabled = (carPrice: string, userPrice: string) => {
        let carPriceNumber = parseInt(carPrice);
        let inputPriceNumber = parseInt(userPrice);

        if (isNaN(carPriceNumber) || isNaN(inputPriceNumber)) return false;

        return carPriceNumber > inputPriceNumber;
    }

    render() {
        return (
            <div className='row mt-5'>
                {carsList.map((car, i) => <CarItem key={i} car={car} disableButton={this._disabled(car.price, this.props.inputValue)} />)}
            </div>
        )
    }
}

export default CarsList;