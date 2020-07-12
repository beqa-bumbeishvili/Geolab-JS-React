import React from 'react';
import Car from '../classes/Car'
import { Link } from 'react-router-dom'

interface CarProperties {
    car: Car,
    disableButton: boolean
}

class CarItem extends React.Component<CarProperties> {

    render() {
        return (
            <div className='col-3 mt-2' id={this.props.car.id}>
                <p className='car-title text-center'>{this.props.car.manufacturer + ' ' + this.props.car.model}</p>
                <img src={require('../images/' + this.props.car.id + '.' + this.props.car.imageType)}
                    className='car-image w-100 rounded' height='200' />
                <button className='btn btn-primary w-100 buy-button' disabled={this.props.disableButton}>ყიდვა</button>
                <Link to={'details/' + this.props.car.id}><button className='btn btn-info w-100 mt-1'>ინფორმაცია</button></Link>
            </div>
        )
    }
}

export default CarItem;