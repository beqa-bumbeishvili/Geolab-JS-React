import React from 'react';
import Car from '../classes/Car'
import CarItem from './CarItem'

interface CarsListState {
    cars: Car[]
}

interface CarsListProps {
    inputValue: string
}

class CarsList extends React.Component<CarsListProps> {
    state: CarsListState = { cars: [] }

    componentDidMount(){
        let setCarsFunction = this.setCars;

        fetch('http://localhost:3000/cars')
        .then(response => response.json())
        .then(function(data){
            setCarsFunction(data);
        })
        .catch(function(error){
            console.log(error);
        });
    }

    setCars = (cars: Car[]) =>{
        this.setState({
            cars: cars
        });
    }
 
    _disabled = (carPrice: string, userPrice: string) => {
        let carPriceNumber = parseInt(carPrice);
        let inputPriceNumber = parseInt(userPrice);

        if (isNaN(carPriceNumber) || isNaN(inputPriceNumber)) return false;

        return carPriceNumber > inputPriceNumber;
    }

    render() {
        return (
            <div className='row mt-5'>
                {this.state.cars.map((car, i) => <CarItem key={i} car={car} disableButton={this._disabled(car.price, this.props.inputValue)} />)}
            </div>
        )
    }
}

export default CarsList;