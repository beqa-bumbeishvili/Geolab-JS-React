import React from 'react';
import Car from '../classes/Car'
import carsStore from '../stores/CarsStore'
import '../styles/car-details.css'
import { RouteComponentProps } from 'react-router-dom'

interface CarsDetailsState {
    currentCar?: Car
}

interface MatchParams {
    id: string
}

interface ParamProperties extends RouteComponentProps<MatchParams> {

}

class CarDetails extends React.Component<ParamProperties, CarsDetailsState> {
    constructor(props: ParamProperties) {
        super(props);

        this.state = {
            currentCar: carsStore.getCar(this.props.match.params.id)
        }
    }

    render() {
        return (
            <div className="wrapper row">
                <div className="preview col-md-6">

                    <div className="preview-pic tab-content">
                        <div className="tab-pane active" id="pic-1">
                            <img src={require('../images/' + this.state.currentCar?.id + '.' + this.state.currentCar?.imageType)} /></div>
                    </div>

                </div>
                <div className="details col-md-6">
                    <h3 className="product-title">{this.state.currentCar?.manufacturer + ' ' + this.state.currentCar?.model}</h3>
                    <p className="vote">Color: <strong>{this.state.currentCar?.color}</strong></p>
                    <p className="vote">Horsepower: <strong>{this.state.currentCar?.horsepower}</strong></p>
                    <p className="vote">Release Year: <strong>{this.state.currentCar?.releaseYear}</strong></p>
                    <h4 className="price">current price: <span>{this.state.currentCar?.price}</span></h4>
                </div>
            </div>
        )
    }
}

export default CarDetails;