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

  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<Country />} />
          <Route path="/price" element={<Price />} />
          <Route path="/categoryNumber" element={<CategoryNumber />} />
          <Route path="/categoryTotal" element={<CategoryTotal />} />
          <Route path="/menWomen" element={<MenWomen />} />
          <Route path="/topTen" element={<TopTen />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
