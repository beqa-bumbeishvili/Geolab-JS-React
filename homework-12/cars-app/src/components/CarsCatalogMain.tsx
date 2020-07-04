import React from 'react';
import Buttons from './Buttons';
import CarsList from './CarsList';
import '../styles/style.css'
import '../styles/bootstrap.min.css'

class CarsCatalogMain extends React.Component {
    render() {
        return (
            <div className='container'>
                <Buttons />
                <CarsList />
            </div>
        )
    }
}

export default CarsCatalogMain;