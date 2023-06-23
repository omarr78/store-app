
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Component } from 'react';
import { Routes, Route } from "react-router-dom";

import Productlist from "./component/Productlist";
import Slider from "./component/Slider";
import Navbar from "./component/Navbar"
import About from './component/About';
import ProductDetails from "./component/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <Productlist />
          </>
        }
        />
        <Route path="about" element ={<About/>}/>
        <Route path="product/:productId" element ={<ProductDetails/>}/>
      </Routes>

    </div>
  );
}

export default App;
