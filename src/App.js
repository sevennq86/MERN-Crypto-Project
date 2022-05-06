import React, { useEffect, useState } from 'react';
import './App.css';
import Crypto from './Crypto';

function App() {
  const [coins, setCoins] = useState([])
  
  const apiCall = () => {
    fetch(`https://rodrigo-crypto-api.herokuapp.com/api/cryptocurrencies`)
      .then(res => res.json())
      .then(data => setCoins(data))
      .catch(error => console.error(error, "error"))
  }
  useEffect(() => {
    apiCall()
  }, [])

  return (
    <div className="App">
      <div className="logo">
        <h1 className="title">Crypto Currencies</h1>
      </div>
      <div className="panel-container">
        <Crypto coins={coins} />
      </div>
    </div>
  );
}

export default App;
