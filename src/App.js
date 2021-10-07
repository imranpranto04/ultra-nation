import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {

  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data =>setCountries(data));
  },[])

  const handleAddCountry = (countryDetails) =>{
    const newCart = [...cart, countryDetails]
    setCart(newCart);}

  return (
    <div className="App">
      <h2>Country Loaded: {countries.length}</h2>
      <h4>Country Selected: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      <div className="country">
        {
          countries.map(country => <Country countryDetails={country} handleAddCountry={handleAddCountry} key={country.name.common}></Country>)
        }
      </div>
    </div>
  );
}

export default App;
