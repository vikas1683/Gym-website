import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Style.css'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Home() {

    return (
        <>
            <section id="home">
                <h1 className='h-primary'>WELCOME</h1>
                <p>FITNESS CENTER</p>
                <p1 id='p'>NO PAIN NO GAIN</p1>
                <button className='btn' onClick={() => alert("(1) PRODUCTS : Best quality products are available in my gym. (2) GYM-MATERIAL : Many machine of the best brand are available in my gym. (3) TRAINER : Experience trainer available in my gym")} variant="outline-danger"  > CLICK ME</button>
            </section>

            <section className="service-container">
                <h4>Gym Material Services</h4>
                <div className="service-box">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.postimg.cc/HsKWrd7d/2947609.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>The Best Brand Material</h3>
                                <p>Fitness is not about being better than someone.  Fitness is about being better than the person you were yesterday.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.postimg.cc/pdrgzFNS/Banner-1656x981-gym.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>The Best Brand Dumbbell</h3>
                                <p>The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can’t achieve it.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.postimg.cc/x1JvmfxR/gym-supplements-background-bodybuilding-pre-workout-whey-protein-powder-pre-workout.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>The Best Brand Products</h3>
                                <p>A wise man should consider that health is the greatest of human blessings, and learn how by his own thought to derive benefit from his illnesses.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>

            <footer className='footer'>
                <div className="container">

                    <div className="row">
                        <div className="footer-col">
                            <h5>Company</h5>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">affiliate program</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h5>Available Sites</h5>
                            <ul>
                                <li><a> <Link style={{ textDecoration: "none" }} id='footer-second' exact to="/">Home</Link>  </a> </li>
                                <li><a> <Link style={{ textDecoration: "none" }} id='footer-second' exact to="GymMaterial">GymMaterial</Link>  </a></li>
                                <li><a> <Link style={{ textDecoration: "none" }} id='footer-second' exact to="/training" >Training</Link>  </a></li>
                                <li><a> <Link style={{ textDecoration: "none" }} id='footer-second' exact to="/contactUs" >Products</Link>  </a></li>
                                <li><a> <Link style={{ textDecoration: "none" }} id='footer-second' exact to="/buy" >Login</Link>  </a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h5>Online shop</h5>
                            <ul>
                                <li><a href="#">Watch</a></li>
                                <li><a href="#">Bag</a></li>
                                <li><a href="#">Shoes</a></li>
                                <li><a href="#">Dress</a></li>
                            </ul>
                        </div>

                        <div className="footer-col" >
                            <h5>Follow us</h5>
                            <div className='social-links'>
                                <a style={{ color: "#8c2366" }} href="https://www.instagram.com/vikascooljatt/"><InstagramIcon /></a>
                                <a style={{ color: "#3333cc" }} href="https://twitter.com/Vikasku78866307"><TwitterIcon /></a>
                                <a style={{ color: "white" }} href="https://www.linkedin.com/in/vikas-kumar-choudhary-3970aa225/"><LinkedInIcon /></a>
                                <a style={{ color: "#b40404" }} href="https://www.youtube.com/channel/UC3RbPWLgRoEfaKorgY1-WFA"><YouTubeIcon /></a>
                                <a style={{ color: "white" }} href="https://www.facebook.com/profile.php?id=100017878540666"><FacebookIcon /></a>
                                <a style={{ color: "green" }} href="https://www.whatsapp.com"><WhatsAppIcon /></a>
                            </div>
                        </div>

                    </div>

                </div>
            </footer>

            {/* <footer className='footer'>
                <div className='container'>
                    <div className='row'>

                        <div className='footer-col'>
                            <ul>
                                <h3 style={{ color: "yellow" }}>Join My Fitness Center</h3>
                                <form>
                                    <input type="text" name='email' placeholder='Email' />
                                    <button className="button-blue">Sign Up</button>
                                </form>
                            </ul>
                        </div>

                        <div className='footer-col'>

                            <ul>
                                <section className='container-two'>
                                    <h2 style={{ color: "yellow" }}>Available sites</h2>

                                    <Link style={{ color: "white", textDecoration: "none" }} id='footer-second' exact to="/">Home</Link>
                                    <Link style={{ color: "white", textDecoration: "none" }} id='footer-second' exact to="GymMaterial">GymMaterial</Link>
                                    <Link style={{ color: "white", textDecoration: "none" }} id='footer-second' exact to="/training" >Training</Link>
                                    <Link style={{ color: "white", textDecoration: "none" }} id='footer-second' exact to="/contactUs" >Products</Link>
                                    <Link style={{ color: "white", textDecoration: "none" }} id='footer-second' exact to="/buy" >Login</Link>

                                </section>

                            </ul>
                        </div>

                        <div className='footer-col'>

                            <ul>
                                <section>
                                    <h1 style={{ color: "yellow" }} id='footer-h1'>Wellness Inspired</h1>
                                    <a style={{ color: "#8c2366" }} href="https://www.instagram.com/vikascooljatt/"><InstagramIcon /></a>
                                    <a style={{ color: "#3333cc" }} href="https://twitter.com/Vikasku78866307"><TwitterIcon /></a>
                                    <a style={{ color: "white" }} href="https://www.linkedin.com/in/vikas-kumar-choudhary-3970aa225/"><LinkedInIcon /></a>
                                    <a style={{ color: "#b40404" }} href="https://www.youtube.com/channel/UC3RbPWLgRoEfaKorgY1-WFA"><YouTubeIcon /></a>
                                    <a style={{ color: "white" }} href="https://www.facebook.com/profile.php?id=100017878540666"><FacebookIcon /></a>
                                    <a style={{ color: "green" }} href="https://www.whatsapp.com"><WhatsAppIcon /></a>

                                </section>
                            </ul>

                        </div>
                        <a style={{ textDecoration: "none", wordWrap: "normal", fontSize: "1.3vw", justifyContent: "center", display: "flex", alignItems: 'center' }} id='section-a' href="https://www.google.com">https://www.vikasfitness.com</a>

                    </div>

                </div>

            </footer> */}




        </>
    )
}




