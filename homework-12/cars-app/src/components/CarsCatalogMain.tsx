import React from 'react';
import Buttons from './Buttons';
import CarsList from './CarsList';
import '../styles/style.css'
import '../styles/bootstrap.min.css'

interface MainPageStage {
    inputValue: string
}

class CarsCatalogMain extends React.Component<{}, MainPageStage> {

    state: MainPageStage = { inputValue: '' }

    _saveInputValue = (value: string) => {
        this.setState({
            inputValue: value
        })
    }

    render() {
        return (
            <div className='container'>
                <Buttons checkButtonClick={this._saveInputValue} />
                <CarsList inputValue={this.state.inputValue} />
            </div>
        )
    }
}

export default CarsCatalogMain;