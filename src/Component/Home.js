import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {
    return (
        <>
            <div className='home'>
                <img src="https://i.postimg.cc/zGkPrfn0/91448-fitness-wallpaper-top-free-fitness-background.jpg" alt="" />
                <img src="https://i.postimg.cc/zGkPrfn0/91448-fitness-wallpaper-top-free-fitness-background.jpg" alt="" />
                <h1>WELCOME</h1>
                <h2>The Great Gym</h2>
            </div>
            <div className='container'>
                <Carousel className='first'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.postimg.cc/SKz97fcX/6535822.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.postimg.cc/C12qHVDG/6535838.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.postimg.cc/2y23f2sS/photo-1595257842044-8f021a58c8a0.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        </>
    )
}




// src="https://i.postimg.cc/Nf3qG369/physical-activity-gym-woman-and-man-work-out-wallpaper-preview.jpg"

// src="https://i.postimg.cc/YSLWNw5N/2968276.jpg"

// src="https://i.postimg.cc/sxT1SVJJ/gym-supplements-background-bodybuilding-pre-workout-whey-protein-powder-pre-workout.jpg"
