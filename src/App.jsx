import {BrowserRouter, Routes, Route} from "react-router-dom"

import Footer from '../public/Components/Footer';
import Header from '../public/Components/Header'
import Homepage from "../public/Components/Homepage";
import About from "../public/Components/About";
import Services from "../public/Components/Services";
import Products from "../public/Components/Products";
import Contact from "../public/Components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
