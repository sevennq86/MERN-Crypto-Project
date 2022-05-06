import React, { useEffect, useState } from "react";
import Panel from './components/Panel';

let Crypto = ({ coins }) => {
  
  const [currentCoin, setCurrentCoin] = useState(coins[0])

  

  const handleBack = () => {
    if (currentCoin === coins[0]) {
      setCurrentCoin(coins[coins.length - 1]);
    } else {
      let index = coins.indexOf(currentCoin)
      setCurrentCoin(coins[index - 1]);
    }
  };

  const handleNext = () => {
    if (currentCoin === coins[coins.length - 1]) {
      setCurrentCoin(coins[0]);
    } else {
      let index = coins.indexOf(currentCoin)
      setCurrentCoin(coins[index + 1]);
    }
  }

//  useEffect(() => {
//   setCurrentCoin(coins[0])
//  }, [])
  
  return (
    <div>
      <div className="coin-slider">
        <button onClick={handleBack}>back</button>
        <Panel crypto={currentCoin} />
        <button onClick={handleNext}>forward</button>
      </div>
    </div>
  )
}

export default Crypto;