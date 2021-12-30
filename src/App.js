import './App.css';
import Home from './Component/Home'
import GymMaterial from './Component/GymMaterial'
import Products from './Component/Products'
import Training from './Component/Training'
import ContactUs from './Component/ContactUs'
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'

  




function App() {
  return (
    <>
    <div className="app" >
     
      <Router>
       <div className='flex-gap' style={{display:"inline-flex",flexWrap:"wrap",backgroundColor:"black", gap:"3vw",width:"100%",justifyContent:"center",height:"6vw",alignItems:"center",fontFamily:"'Lato', sans-serif",bottom:"0.0vw",position:"relative"}}>

       <img style={{position:"relative",width:"4vw",height:"3.5vw"}} src="https://i.postimg.cc/K855qFKB/images.jpg" alt="image" />

      <Link className='link' to="/" style={{color:"lightBlue",textDecoration:"none",fontSize:"1.7vw"}}>Home</Link>  
      <Link className='link' to="/GymMaterial"style={{color:"lightBlue",textDecoration:"none",fontSize:"1.7vw"}}>GymMaterial</Link>
      <Link className='link' to="/Training"style={{color:"lightBlue",textDecoration:"none",fontSize:"1.7vw"}}>Training</Link>
      <Link className='link' to="/ContactUs" style={{color:"lightBlue",textDecoration:"none",fontSize:"1.7vw"}}>Products</Link>
      <Link className='link' to="/buy" style={{color:"lightBlue",textDecoration:"none",fontSize:"1.7vw"}}>ContactUs</Link>

     


      </div>
      
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/GymMaterial" element={<GymMaterial />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/buy" element={<Products />} />
      </Routes>

      </Router>

      
    </div>
    </>
  )
}

export default App;
