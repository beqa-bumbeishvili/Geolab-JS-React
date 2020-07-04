import React from 'react';
import Car from '../classes/Car'

interface CarProperties {
    car: Car
}

class CarItem extends React.Component<CarProperties> {
    render() {
        return (
            <div className='col-3 mt-2' id={this.props.car.id}>
                <p className='car-title text-center'>{this.props.car.manufacturer + ' ' + this.props.car.model}</p>
                <img src={require('../images/' + this.props.car.id + '.' + this.props.car.imageType)}
                    className='car-image w-100 rounded' height='200' />
                <button className='btn btn-primary w-100 buy-button'>ყიდვა</button>
            </div>
        )
    }
}

export default CarItem;
