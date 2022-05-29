import React from 'react';
import './AboutToDoElements.css';
import sponsor1 from './1sponsors.png';
import sponsor2 from './2sponsors.png';
import sponsor3 from './3sponsors.png';
// import programoffers from "./3lego-mindstorms.png";

const numberheader = {
    color: "#981817",
    fontWeight: 'bold',
  };

  const ourimpactsize = {
    fontSize: 18,
  };

const About = () => {
    
  return ( 
    
<div className="master-div">
{/* first header */}
    <div className="header-photo">

    </div>

{/* container one: why roborecovery */}
    <div className="container container-why-roborecovery">
       
        <div className="row row2-why-roborecovery">
            
            <div className="col-sm-4 photo-why-roborecovery">

            </div>

            <div className="col-sm-8 content-why-roborecovery">
                <h1 className="header-why-roborecovery">Why RoboRecovery?</h1>
                <br></br>
                <div className="content-why-roborecovery">
                <p>RoboRecovery envisions an equitable future for science, 
                    technology, engineering, and mathematics (STEM) 
                    education, where all youth have access to hands-on 
                    opportunities in STEM and can become future leaders 
                    in STEM.
                </p>
                <p>
                    RoboRecovery’s mission is to catalyze pathways into STEM 
                    careers for underserved students by increasing access to 
                    STEM enrichment opportunities, specifically in robotics.
                </p>
                </div>
            </div>

        </div>

    </div>


{/* container three - what our program offers */}
    <div className="container what-our-program-offers">

        <div className="row row1-program-offers">
            <div className="col-sm-8 program-content">
            <h1 className="header-program-offers">What Our Program Offers:</h1>
                <div className="list-program-content">
                <ul>
                    <li> Robotics Kits: We source LEGO robotics equipment from teams 
                        and suppliers. We use these to create robotics kits, which we
                         loan for free to our partners.</li>
                    <li>Lesson Plans: We’ve designed a series of open-source lesson 
                        plans for our program, which introduces students to robotics 
                        over the course of 8-10 weeks.</li>
                    <li>Club Leaders/Mentors: Through the Center for Public Service at 
                        Tulane University, we recruit Tulanestudent volunteers who facilitate
                        robotics programming and mentor students.</li>
                </ul>
                </div>
            </div>

            <div className="col-sm-4 program-photo">
               
            </div>

        </div>

    </div>

{/* container four - our impact */}
    <div className="container our-impact">
        <div className="row header-impact">
            <div className="col-sm-12 header-our-impact">
                <h1 style={{numberheader}}>Our Impact</h1>
            </div>

        </div>

        <div className="row row1-sponsors">
            <div className="col-sm-4 stat-20">
                <h2 style={numberheader}>20%</h2>
                <p style={ourimpactsize}>Increase in students’ reported ability to 
                    explain engineering and coding concepts</p>
                <br></br>
            </div>

            <div className="col-sm-4 stat-70">
                <br></br>
                <h2 style={numberheader}>70%</h2>
                <p style={ourimpactsize}>Students on free and reduced lunch</p>

            </div>

            <div className="col-sm-4 stat-90">
                <h2 style={numberheader}>90%</h2>
                <p style={ourimpactsize}>Students from ethnicities historically underrepresented 
                    in STEM fields</p>
                <br></br>
            </div>

        </div>

        <div className="row row2-sponsors">
            <div className="col-sm-6 stat-12">
                <h1 style={numberheader}>12%</h1>
                <p style={ourimpactsize}>Increase in students’ reported interest in 
                    attending college.</p>
            </div>

            <div className="col-sm-6 stat-200">
                <h1 style={numberheader}>$20,000+</h1>
                <p style={ourimpactsize}>Estimated value of LEGO robotics equipment 
                    available for borrowing.</p>

            </div>

        </div>
    </div>


{/* container five - sponsors */}
    <div className="container our-sponsors">
        <div className="row our-sponsors-header">
            <div className="col-sm-12 sponsors-header-column">
                <h1>Our Partners:</h1>
                <br></br>
            </div>
        </div>
    
        <div className="row row1-our-sponsors">
            <div className="col-sm-3 first-sponsors-photo">
                <img src={sponsor1} className='img-fluid shadow-4' alt='..' />
            </div>

            <div className="col-sm-6 second-sponsors-photo">
                <img src={sponsor2} className='img-fluid shadow-4' alt='...' />
            </div>

            <div className="col-sm-3 third-sponsors-photo">
                <img src={sponsor3} className='img-fluid shadow-4' alt='...' />
            </div>

        </div>



    </div>


{/* container six - footer */}
    <div className="container-fluid footer-container">
        <div className="row footer-row">
            <div className="col-sm-12 footer-content">
            <footer className="footer">
                <h2>Contact Us</h2>
                <hr></hr>
                <p>Email: Email: roborecoveryNOLA@gmail.com</p>
                <p>Facebook: @roborecoverynola</p>
                <p>Instagram: @roborecoverynola</p>
                <p>Twitter: @roborecoverynola</p>

            </footer>
            </div>

        </div>

    </div>


</div>



  );

};
  
export default About;