import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';

import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [card , setCard] = useState([]);

  useEffect(() => {  fetch('https://6445a207b80f57f581be2d4e.mockapi.io/tours').then((res) => {return res.json()}).then(res => {setCard(res)})})

  return (
    <div className="App">
        <Slider item={card} />
    </div>
  );
}

export default App;
