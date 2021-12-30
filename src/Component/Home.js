import React from 'react'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import ReactPlayer from 'react-player'


export default function Home() {
    return (
        <>
            <div>

                <img className='home-image' src="https://i.postimg.cc/DfHfKkc8/boxer-1984344.jpg" alt="image" />

                <h1 style={{ position: "relative", fontSize: "6vw", color: "blue", textAlign: "center", right: "20vw", bottom: "45vw" }}>WELCOME</h1>
                <h2 style={{ position: "relative", fontSize: "6vw", color: "red", textAlign: "center", right: "20vw", bottom: "45vw" }}>FITNESS CENTER</h2>
                <h4 style={{ position: "relative", fontSize: "6vw", color: "lightGreen", textAlign: "center", right: "20vw", bottom: "45vw" }}>NO PAIN NO GAIN</h4>




                <Button onClick={() => alert("Click [ READ MORE ] Button To Get More Information")} variant="outline-warning" >Click Me</Button>

                <Dropdown style={{ position: "relative", color: "lightGreen", bottom: "2.7vw", right: "18vw", textAlign: "center" }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        READ MORE
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">PRODUCTS : Best quality products are available in my gym</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">GYM-MATERIAL : Many machine of the best brand are available in my gym</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">TRAINER : Experience trainer available in my gym</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h1 className='h1'> Gym Material OF Best Brand</h1>

                <div className='border'>
                    <Carousel className='carousel'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.postimg.cc/hjcFnnyR/crossfit-1126999.jpg"
                                // src="https://i.postimg.cc/sDhqGtN7/2947609.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Gym Material Slide</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.postimg.cc/YSLWNw5N/2968276.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Gym Material Slide</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.postimg.cc/Gm1Tj1WW/gym-1170496-1280.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Gym Material Slide</h3>
                            </Carousel.Caption>
                        </Carousel.Item>


                    </Carousel>
                </div>

                  <h1 className='h2'>MY GYM MOTIVATIONAL VIDEOS</h1>
                    <div className='background'>
                     <div className='player'>
                    <ReactPlayer className='one' style={{bottom: "22.2vw", position: "relative",left:"2.2vw",transition: 'all 1s ease-in-out'}}
                        url="https://youtu.be/hlCvQ5rZXjk"
                        controls
                        playbackRate={2}
                        width="45vw"
                        height="30vw" 
                />
  
                    <ReactPlayer className='two' style={{bottom: "22.2vw", position: "relative" ,left:"4vw",transition: 'all 1s ease-in-out'}}
                        url="https://youtu.be/v1z7GALM-IY"
                        controls
                        playbackRate={2}
                        width="45vw"
                        height="30vw" 
                />
                
                </div>
                     <div className='player-extra'>
                    <ReactPlayer className='one' style={{bottom: "22.2vw", position: "relative",left:"2.2vw",transition: 'all 1s ease-in-out'}}
                        url="https://youtu.be/Qxd11sQnZio"
                        controls
                        playbackRate={2}
                        width="45vw"
                        height="30vw" 
                />
  
                    <ReactPlayer className='two' style={{bottom: "19vw", position: "relative" ,left:"4vw",transition: 'all 1s ease-in-out'}}
                        url="https://youtu.be/F_kctoYCEfI"
                        controls
                        playbackRate={2}
                        width="45vw"
                        height="23vw" 
                />
                
                </div>
                </div>

            </div>
        </>
    )
}
