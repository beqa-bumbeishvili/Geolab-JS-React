import React from 'react';
import CarItem from './CarItem'
import carsStore from '../helpers/carsStore'

const carsList = carsStore.getCarsList(); //ciklit davarenderebt amat

class CarsList extends React.Component {
    render() {
        return (
            <div className='row mt-5'>
                {carsList.map((car, i) => <CarItem key={i} car={car} />)}
            </div>
        )
    }
}

export default CarsList;