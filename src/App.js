import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact'
import {Routes, Route, BrowserRouter} from 'react-router-dom';

export default function App() {
  const [menu, setMenu] = useState(false)
  const handleClick = () => setMenu(!menu)

  return (
    
    <div className="App">
      { menu ? <Menu handleClick={handleClick}/> : 
        <>
        <Navbar handleClick={handleClick}/>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/work' element={<Work/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              </Routes>
          </BrowserRouter>
        <Footer/>
        </>
      }
    </div>
  );
}
