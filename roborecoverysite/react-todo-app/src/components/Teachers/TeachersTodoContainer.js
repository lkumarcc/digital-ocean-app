import React from 'react';
import './TeachersTodoElements.css';
// import './DonateTodoElements.css';
import { Image } from 'react-bootstrap';
import background from "./teacherroborecovery.jpg";

const Teachers = () => {
    return (

        <div className="teachers-background">

<div className="container teachers-container"> 
        <div className="row gx-5 for-teachers">


            {/* Column For How it Works */}

            <div className = "col-sm-6 how-it-works">
                <div >
                    <h1 className="for-teachers-header">Donating for Teachers</h1>
                    <hr style={{color: '#981817'}}></hr>
                </div>

                <div className="content-teacher-works"> 
                    <h2 className="teacher-works-header" style={{fontWeight: 'bold'}}>How it Works:</h2>
                    <p>
                        <ol>
                        <li>We collect donations of LEGO Mindstorms robots from the robotics community across the United States.</li>
                        <li>Donations will be then shipped to the STEM Library Lab</li>

                        </ol>
                    </p>
                </div>

                 
            {/* Column for How Teachers Accept Kits */}

            <div className="teachers-donate"> 

                <h2 style={{fontWeight: 'bold'}}>How to Donate:</h2>

                <div className="teachers-donate-content">
                <p>
                Interested in borrowing robots for your classroom? Have Questions? </p>
                <p>Get in touch:
                </p>
                <br></br>
                <p>Email William Bai, Director of RoboRecovery, at roborecoverynola@gmail.com</p>
                </div>

                </div>
            </div>

            <div className = "col-sm-6 teachers-image">
                {/* <p>kfmlwmflewmkfwefk</p> */}
            </div>

            
            
        
        </div>

        


      </div>
      </div>

);
};
  
export default Teachers;