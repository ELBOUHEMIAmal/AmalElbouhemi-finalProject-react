import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Sale from './pages/Sale'
import Features from './pages/Features'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/sale" element={<Sale />}/>
        <Route path="/features" element={<Features />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
