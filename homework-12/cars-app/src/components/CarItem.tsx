import React from 'react';
import Car from '../classes/Car'
import carsStore from '../helpers/carsStore'
import alertsHelper from '../helpers/alertsHelper'

interface CarProperties {
    car: Car,
    disableButton: boolean
}

class CarItem extends React.Component<CarProperties> {

    //show car details when user clicks on the image
    showCarDetail = (event: any) => {
        let carImageElement = event.target;

        let carID = (carImageElement!.parentNode! as HTMLDivElement).id;

        let cars = carsStore.getCarsList();

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


    render() {
        return (
            <div className='col-3 mt-2' id={this.props.car.id}>
                <p className='car-title text-center'>{this.props.car.manufacturer + ' ' + this.props.car.model}</p>
                <img src={require('../images/' + this.props.car.id + '.' + this.props.car.imageType)}
                    className='car-image w-100 rounded' height='200' onClick={this.showCarDetail} />
                <button className='btn btn-primary w-100 buy-button' disabled={this.props.disableButton}>ყიდვა</button>
            </div>
        )
    }
}

export default CarItem;