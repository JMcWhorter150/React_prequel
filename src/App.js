// #1 You need to import React
import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './Greet';
// #2 You always define a function (or a class)
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <Greet whom="Alice" />
    </div>
  );
}

// #3 You always export that function (or class)
export default App;
