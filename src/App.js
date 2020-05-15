import React, { useState } from 'react';
import Hero from './components/Hero';

function App() {
  //
  const [count, setCount] = useState(0);

  //
  const handleHeroClick = () => {}; // NOTE

  return (
    <div className="app">
      <h1>React hooks - Clock</h1>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name='Nguyen Van A' onClick={handleHeroClick}/>
    </div>
  );
}

export default App;
