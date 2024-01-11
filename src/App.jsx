import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Dishes from './components/Dishes'
import Review from './components/Review'
import Cart from './components/Cart';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
          <main>
          <div id="home">
            <Home />
          </div>

          {/* <div id="dishes">
            <Dishes />
          </div>*/}

          <div id="about">
            <About />
          </div>

          <div id="menu">
            <Menu />
          </div>

          <div id="cart">
            <Cart />
          </div>

          <div id="review">
            <Review />
          </div>

        </main>
        
        <Footer/>
      </div>
      
    </>
  )
}

export default App
