import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  return (
    <div className='counter-container'>
        <p className='count-value'>counter = {count} </p>
        <div className='button-container'>
            <button className='buttons' onClick={() => setCount(count + 1)}>
                +1 
            </button>
            <button className='buttons' onClick={() => setCount(count - 1)}>
                -1
            </button>
            <input className='buttons' type='button' onClick={() => setCount(0)} value='RESET'/>
        </div>
    </div>
  );
}

export default Counter;