import React from 'react';

class Buttons extends React.Component {
    render() {
        return (
            <div className='mt-5'>
                <form className='form-inline my-2 my-lg-0 text-center d-block'>
                    <button className='btn btn-outline-primary my-2 my-sm-0' id='average-price-btn' type='button'>საშუალო
                    ფასი</button> 
                    <button id='expensive-car-highight' className='btn btn-outline-primary my-2 my-sm-0' type='button'>ყველაზე ძვირიანი მანქანა
                    </button>
                    <button id="cheap-car-highight" className='btn btn-outline-primary my-2 my-sm-0' type='button'>ყველაზე იაფიანი მანქანა
                    </button>
                    <input className='form-control mr-sm-2' type='text' placeholder='ფასი' aria-label='Search' id='price-input'></input>
                    <button id='searchResult' className='btn btn-outline-primary my-2 my-sm-0' type='button'>შემოწმება</button>
                </form>
            </div>
        )
    }
}

export default Buttons;