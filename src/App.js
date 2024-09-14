import './App.css';
import Category from './components/Category.jsx';
import Prices from './components/Prices.jsx';
import Affichage from './components/Produits.jsx';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="App">
      <div className="sidebar">
        <Category onchangeCategory={setCategory} />
        <br />
        <Prices onchangePrice={setPrice} />
      </div>
      <div className="main">
        <Affichage category={category} price={price} />
      </div>
    </div>
  );
}

export default App;
