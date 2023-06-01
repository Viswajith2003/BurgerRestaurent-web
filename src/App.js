import React from 'react'
import './App.css'
import Navbar  from './Components/Navbar';
import Home  from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() 
{
  return (
    <div>
        {
          <>
             <Navbar/>
            <Home/>
            <Products/>
            <About/>
            <Contact/> 
          </>
        }
    </div>
  );
}

export default App;
