import React from 'react'
// import { Link } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css'

export default function Training() {
    return (
        <>          <section className="section-a">
            <a style={{ fontSize: "1.5vw" }} id='a-canvas' className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"> Click Me : Training Information </a>
            <a style={{ fontSize: "1.5vw" }} className="btn btn-primary" id='b-canvas' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Click Me : Important Training Ideas</a>
            <a style={{ fontSize: "1.5vw" }} className="btn btn-primary" id='c-canvas' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Click Me : Training Tips Information </a>

        </section>

            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Training Information</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <img style={{ position: "relative", width: "12vw", left: "6vw", bottom: "1vw" }} src="https://i.postimg.cc/K8GFbZFL/physical-activity-gym-woman-and-man-work-out-wallpaper-preview.jpg" alt="image" />
                        <h6>1. Strength training</h6>
                        <p>Muscular fitness is another key component of a fitness training program. Strength training can help you increase bone strength and muscular fitness, and it can help you manage or lose weight. It can also improve your ability to do everyday activities.Aim to include strength training of all the major muscle groups into your fitness routine at least twice a week.</p>
                        <h6>2. Core exercises</h6>
                        <p>The muscles in your abdomen, lower back and pelvis — known as your core muscles — help protect your back and connect upper and lower body movements. Core strength is a key element of a well-rounded fitness training program.</p>
                        <h6>3. Flexibility and stretching</h6>
                        <p>Flexibility is an important aspect of physical fitness, and it's a good idea to include stretching and flexibility activities in a fitness program. Stretching exercises can help increase flexibility, which can make it easier for you to do many everyday activities that require flexibility.</p>
                    </div>

                </div>
            </div>




            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasTopLabel">Training Ideas</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div style={{ display: "inline-flex", justifyContent: "center", textAlign: "center" }} className="offcanvas-body">

                    <img style={{ position: "relative", width: "12vw", right: "0.5vw" }} src="https://i.postimg.cc/vZgVf107/istockphoto-1149242178-170667a.jpg" alt="image" />

                    <p>While holding a dumbbell with both hands at chest level, set your feet shoulder-width apart. Push your butt back like you are sitting in an invisible chair and go down until your elbows meet the inside of your knees.</p>

                    <img src="https://i.postimg.cc/jS80y5kX/istockphoto-543189116-170667a.jpg" alt="image" />
                    <p>This will help create a strong back, arms, and core.

                        First find an empty bench and grab your dumbbells. Start by placing your left hand and left knee on the bench. Holding a dumbbell in your right hand, bend your right elbow and pull the dumbbell up to the side of your chest. </p>
                </div>
            </div>



            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Information</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <h6>What is gym based training?</h6>
                    <p>Gym-based personal trainers are trainers who work out of a gym or health club. ... A personal trainer working for a health club of gym usually isn't working for you, but for the gym or club.</p>
                    <h6>What are the main gym exercises?</h6>
                    <p>There are eight essential exercises that should be included in your resistance training program: Squat, deadlift, power clean, bench press, reverse bent over row, pull-ups, military press, and dips. The squat and deadlift are the two most important exercises to be included.</p>
                    <h6>What should we eat after gym?</h6>
                    <p>Good post-workout food choices include=
                        Yogurt and fruit;
                        Peanut butter sandwich;
                        Post-workout recovery smoothie;
                        Turkey on whole-grain bread with vegetables;</p>
                    <h6>How do I start gym?</h6>
                    <p>Start with cardio machines to build up your comfort level, or bring some weights to a quiet area of the gym or an empty studio to start training by yourself, he suggests. You could also ask the personal trainers at the gym for help getting set up on certain equipment to make sure you're using it properly.</p>
                </div>
            </div>



            <section className="section-main">

                <div className="section-part" >

                    <img className='responsive-image'
                        src="https://i.postimg.cc/xjhV32z2/Whats-App-Image-2021-12-31-at-12-04-22-PM.jpg" alt="image" />
                    <div >
                        <h1>The best online personal fitness trainer in India?</h1>
                        <p>Vikas Choudhary is one of the best Online Personal Fitness Trainer in India today. He charges very reasonable price from his clients which is affordable for a common person also. You will get the full worth of your money spent when you take his services. He is the most popular and trusted name when you talk about online fitness training. Below are the prices of his Online Fitness Coaching Packages as on date</p>
                    </div>

                    <p style={{ position: "relative", top: '2vw' }}>MFG Monthly Fitness Plan: Rs.3,000/-</p>

                    <p style={{ position: "relative", top: '2vw' }}> MFG Quarterly Fitness Plan: Rs.8,000/-</p>

                    <p style={{ position: "relative", top: '2vw' }}> MFG Six Month Fitness Plan: Rs.14,000/-</p>


                    <p style={{ position: "relative", top: '4vw' }}>He has excellent reviews for his online coaching services. His fitness programs are research based therefore people get guaranteed results from them. They see the results on weekly basis and get internally motivated to follow the program consistently. Internal motivation is the best motivation which inspires you to put more efforts for achieving goal. This is the reason why many of his clients avail his services for longer period of time.</p>

                    <p style={{ position: "relative", top: '4vw' }}>Most of the people are satisfied with his services not only because of the results but also with the professional approach of his training. He never promises you the results which can’t be achieved naturally. Before enrollment only he makes clear the realistic goal which you can achieve. You will always get what you expect from his online fitness program. There are many online trainers who just say yes for everything and when time comes to give results they come up with various excuses.</p>

                    <p style={{ position: "relative", top: '4vw' }}>He always advocates for transforming the body through natural methods only. Whatever is your goal, he trains you to achieve it through hard work and disciplined diet. He is strictly against the use of banned drugs to achieve your fitness goal. However it is now very common in the fitness industry that online fitness coaches advise their clients to take these substances for getting faster results. You may reach your goal early with these banned drugs but the results are not sustainable and you get various side effects also.</p>

                    <p style={{ position: "relative", top: '4vw' }}> Today there are many social media fitness influencers who are actually the bodybuilders and have no formal education in fitness domain. Young kids are following them blindly and experimenting on their bodies through their advice. After couple of months they wonder why no changes have happened in their body. Therefore it is always wise to invest some time in research. Choose the right online personal trainer who is expert of the field and can help you transforming body naturally! </p>

                    <p style={{ position: "relative", top: '4vw' }}>Vikas choudhary is a graduate from the prestigious National Defence Academy and the Air Force Academy. He is one of the most qualified fitness experts in the country with his military training, competitive athletics, and bodybuilding experiences, and has trained some of the best coaches. He is also an author and researcher in his field along with being the co-founder of the Body Mechanics chain of gyms. All the articles and video plans for We R Stupid are personally created by Akshay Chauhan.</p>

                    <h3 style={{ position: "relative", top: '4vw', fontFamily: "Merriweather" }}>Why You Need A Fitness Expert?</h3>
                    <p style={{ position: "relative", top: '4vw' }}>Every time you eat or drink you are either feeding a disease or fighting it! Today 99% of diseases are due to wrong eating and no physical activity leading to low immunity. I have seen in my fitness career, people spending money on activities like eating outside more than often, buying the most expensive phone or clothes and  I really don’t mind it, after all, it is all your money. We do invest in health insurance but still we forget to invest in our own health, in the form of right nutrition and exercise guidance. Most of us follow the wrong diet and workout; get injured or lose weight in the beginning but gain back again, Why? So what I am talking about? Let me clear you;</p>
                    <p style={{ position: "relative", top: '4vw' }}>(1) There is no magic pill for weight loss (2) Don’t even think about losing weight without changing diet macros, we need to follow a strict diet (3) Nothing will happen overnight (4)You need someone well experienced in fitness to talk in every step of your fitness journeys like weekly progress tracking and discussion and then diet and workout should be customized accordingly. Remember, a healthy mind rests in a healthy body wherein an unhealthy body is a home to stress, low immunity, and various illnesses.</p>


                </div>



                <div className='section-apart'>
                    <img className='responsive'
                        src="https://i.postimg.cc/qq7d6jtM/Whats-App-Image-2021-12-31-at-12-58-58-PM.jpg" alt="image" />

                    <h1>Qualities of a great Personal Trainer</h1>
                    <h6>Here are five qualities you should look for in a personal trainer :</h6>
                    <h5>1. Patience and Honesty</h5>
                    <p>This should be the number one quality you look for in a personal trainer. As the cliché goes, achieving your fitness goal will not happen overnight. Patience is the key to a good client-trainer relationship.</p>
                    <p>Your Personal Trainers should understand that you will have many questions and clarifications you might want to ask them, and not take it against you. They should not also want to see results, since what works for one client may not work for another. Your personal trainer should do an assessment of your body, as well as take into consideration your needs, wants, restrictions and the like.</p>
                    <p>Trainers should also be truthful, transparent and honest to their clients no matter what. They should not give you false promises and hopes, but reassure you that they will be with you every step of the way.</p>
                    <h5>2. Great Communication Skills</h5>
                    <p>Your trainer should be a great communicator, especially when they talk about the technical part of working out you should know. They should be able to explain to you the implications of your nutrition, workout and generally how the body works scientifically.</p>
                    <p>During sessions which they can’t be physically with you inside the gym, they should be able to explain things to you on the phone and give clear instructions how to do certain moves without physically being present through every workout.</p>
                    <p></p>
                    <h5>3. Professionalism</h5>
                    <p>Despite the relationship you’re cultivating with them, they are still doing their job. You can befriend your personal trainer, but a certain level of professionalism should still be clear for both of you.</p>
                    <p>This would mean that sessions should not be compromised by hours of story-telling or, routines made easier because the both of you became friends. At the same time, there should be fairness when it comes to fees and charges. The duration of your training session, the location and the experience level of your personal trainer will dictate the cost of your session.</p>
                    <h5>4. Great Personality</h5>
                    <p>As a client, you want to feel comfortable and trust that your trainer has your best interest in mind. Believe it or not, personal trainers are one of the few people that will see you at your lowest point, during the times you look your worst and you should feel okay with it.</p>
                    <p>Like a friend, they should be understanding and ready to listen and compromise. But at the same time, as a trainer, they should stick to their rules and not let you slack off your workout routine and program.</p>

                    <h3>Sources:</h3>
                    <div className='https'>
                        <a style={{ textDecoration: "none" }} href="http://edition.cnn.com/2013/07/12/health/personal-trainer-traits/index.html">1. http://edition.cnn.com/2013/07/12/health/personal-trainer-traits/index.html</a> <br /> <br />

                        <a style={{ textDecoration: "none" }} href="https://breakingmuscle.com/coaching-business/5-essential-qualities-to-look-for-in-a-good-trainer">2. https://breakingmuscle.com/coaching-business/5-essential-qualities-to-look-for-in-a-good-trainer</a> <br /> <br />

                        <a style={{ textDecoration: "none" }} href="https://www.boxinginsider.com/training-and-conditioning/5-qualities-you-need-for-the-right-personal-trainer/">3. http://www.boxinginsider.com/training-and-conditioning/5-qualities-you-need-for-the-right-personal-trainer/</a>
                    </div>


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
                            <h5>Get help</h5>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Order Status</a></li>
                                <li><a href="#">payment options</a></li>
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
        </>

    )
}





