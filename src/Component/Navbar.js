import React from 'react'
import GymMaterial from './GymMaterial'
import Home from './Home'
import Products from './Products'
import Training from './Training'
import ContactUs from './ContactUs'

import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom'


export default function Navbar() {
    return (
        <>
        <div>
            <Router>
                <div className='box'>
                <img className="navImage" src="https://i.postimg.cc/W4VTvpD4/images.jpg" alt="image" />
                <Link className='link' to="/">Home</Link>
                <Link  className='link' to="gymMaterial">GymMaterial</Link>
                <Link  className='link' to="product">Products</Link>
                <Link  className='link' to="training">Training</Link>
                <Link  className='link' to="contactUs">ContactUs</Link>
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="gymMaterial" element={<GymMaterial />} />
                    <Route path="product" element={<Products />} />
                    <Route path="training" element={<Training />} />
                    <Route path="contactUs" element={<ContactUs />} />
                </Routes>
            </Router>
        </div>
        </>
    )
}


// [[[  Home  ]]]

