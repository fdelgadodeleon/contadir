import React, { useEffect, useState } from 'react';
import Button from './Button';
import './Counter.css';

const Counter = () => {
  const [value, setValue] = useState(10);

  const increase = () => setValue(value + 1)

  function decrease() { setValue(value - 1) }

  useEffect(() => {
    document.title = `El valor es ${value}`
  })

  return (
    <div className="container">
      <h2>Contador Función</h2>
      <div className="counter">
        <Button label="-" onClick={decrease} />
        <h1>{value}</h1>
        <Button label="+" onClick={increase} />
      </div>
    </div>

  )
}

export default Counter;