import React from 'react';
import './Country.css';

const Country = (props) => {

    const {name, capital, region, flags, population} = props.countryDetails;
    const handleAddCountry = props.handleAddCountry;
    
    return (
        <div className="country-box">
            <h2 style={{color: 'tomato'}}>{name.common}</h2>
            <img style={{height: '50px'}} src={flags.svg} alt="" />
            <h4>Capital: {capital}</h4>
            <p><small>{population}</small></p>
            <p><small>{region}</small></p>
            <button onClick={()=> handleAddCountry(props.countryDetails)}>Country Details</button>
        </div>
    );
};

export default Country;