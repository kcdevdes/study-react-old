import React, { useState } from 'react';

function Counter() {
  const [ number, setInt ] = useState(0);

  const onIncrease = () => {
    console.log("clickEvent : Increase");
    setInt (prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    console.log("clickEvent : Decrease");
    setInt (prevNumber => prevNumber - 1);
  }

  return (
    <div>
      <h1>{ number }</h1>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
    </div>
  )
}

export default Counter;