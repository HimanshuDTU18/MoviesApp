import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from '../Container/Home/Index'
import Contact from '../Container/Contact/Index'
import Series from '../Container/Series/Index'
import Search from '../Container/search'
import Details from '../Container/Details/Index'
import HeaderComponents from '../Components/Header/Index'
import About from '../Container/About'
import Footer from '../Components/Footer/Index'

function RouterComponent() {
  return (
    <>
   
        <BrowserRouter>
        <HeaderComponents/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/series" element={<Series/>}/>
                <Route path ="/search" element={<Search/>}/>
                <Route path="/details/:movieid/:mediaType" element={<Details/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default RouterComponent