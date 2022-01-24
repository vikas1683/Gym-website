
import Home from './Component/Home'
import GymMaterial from './Component/GymMaterial'
import Products from './Component/Products'
import Training from './Component/Training'
import ContactUs from './Component/ContactUs'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';
import Menu from './Component/MaterialAPI'
import Data from './Component/ProductAPI'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';



function App() {

  const [menuData, setMenuData] = useState(Menu)

  const [menuList, setMenuList] = useState(Data)

  return (
    <>
      <div className="app" >
        <Router>
          <div id='navbar'>

            <div id='logo'>
              <img id='img' src="https://i.postimg.cc/K855qFKB/images.jpg" alt="image" />
            </div>


            <Link id='nav-link' exact to='/'>Home</Link>
            <Link id='nav-link' exact to="gym-material">GymMaterial</Link>
            <Link id='nav-link' exact to="/training" >Training</Link>
            <Link id='nav-link' exact to="/products" >Products</Link>
            <Link style={{ position: "relative", left: "20vw", fontSize: "1.5vw" }} id='nav-link' exact to="/login"  >Login/<ContactPhoneIcon /></Link>


          </div>

          <Routes >
            <Route exact path="/login" element={<ContactUs />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/gym-material" element={<GymMaterial menuData={menuData} />} />
            <Route exact path="/training" element={<Training />} />
            <Route exact path="/products" element={<Products menuList={menuList} />} />

          </Routes>

        </Router>

      </div>
    </>
  )
}

export default App;
