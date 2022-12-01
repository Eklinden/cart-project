import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header';
import CategoryNumber from './views/CategoryNumber/CategoryNumber';
import CategoryTotal from './views/CategoryTotal/CategoryTotal';
import Country from './views/Country/Country';
import Home from './views/Home/Home';
import MenWomen from './views/MenWomen/MenWomen';
import Price from './views/Price/Price';
import TopTen from './views/TopTen/TopTen';

function App() {
  const [animation, setAnimation] = useState<string>("fade-in")

  return (
    <div className="App">
      <Header animation={animation} setAnimation={setAnimation} />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home animation={animation} />} />
          <Route path="/country" element={<Country animation={animation} />} />
          <Route path="/price" element={<Price animation={animation} />} />
          <Route path="/categoryNumber" element={<CategoryNumber animation={animation} />} />
          <Route path="/categoryTotal" element={<CategoryTotal animation={animation} />} />
          <Route path="/menWomen" element={<MenWomen animation={animation} />} />
          <Route path="/topTen" element={<TopTen animation={animation} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
