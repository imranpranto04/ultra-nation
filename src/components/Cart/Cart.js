import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation = 0;
    for(let i=0; i<cart.length; i++) {
        const  country = cart[i];
        console.log(country);
        totalPopulation = totalPopulation + country.population;
    }
    console.log(props);
    return (
        <div>
            <h3>This is cart: {cart.length}</h3>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;