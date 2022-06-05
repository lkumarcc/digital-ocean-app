import React from 'react';
import './CoreTenetsToDoElements.css';
import { Image } from 'react-bootstrap';
import coretenetsheader from "./coretenetshomepage.JPG";

const imgStyle = {
    maxHeight: 500,
    maxWidth: 5000,
  }

const CoreTenets = () => {
  return ( 
    <div className="model-wrapper">
    <div className="container-fluid overall-Model">

    {/* head picture
    <div className = "jumbotron">
        <div class="coretenets-header-cover">
            <Image fluid src={coretenetsheader} style={imgStyle} sclass="img-fluid" alt="Responsive image">
                    </Image>
        </div>
        </div> */

    // STUFF FOR HOMEPAGE
    //     <div className="roborecovery-header">
    //     <p>ENABLING ACCESSIBLE AND</p>
    //     <p>EQUITABLE ROBOTICS EDUCATION</p>
    // </div>
    // <br></br>


        }
    
    {/* header content */}
        <div className="container model-header-container">

            <div className="row model-header-row">

                <div className="col-sm-12 model-header-column">
                   
                    <h1 className="roborecovery-title">OUR CORE TENETS</h1>
                    <hr></hr>

                </div>
            </div>
        </div>
    {/* model content: core tenents */}
    <div className="container our-core-tenets">
        
        {/* <div className=x"row header-core-tenets">
            <h1>Our Core Tenets:</h1>

        </div> */}

        <div className="row row1-core-tenets">
            <div className="col-sm-8 my-auto power-of-robotics" align="center">

                    <h2 >The Power of Robotics:</h2>
                    <p>While building and coding robots, students not only develop valuable 
                        technical skills, but also capabilities like teamwork and creative problem 
                        solving that will serve them for a lifetime. Plus, robotics is so fun, kids 
                        don’t even feel like they’re learning!</p>
       
            </div>

            <div className="col-sm-4 tenets-photo-one">

            </div>

            
        </div>

        <hr></hr>

        <div className="row row2-core-tenets">

            <div className="col-sm-4 tenets-photo-two">

            </div>

            <div className="col-sm-8 my-auto access-for-all">

                <h2>Here's access:</h2>
                <p> Our partners receive all equipment, supplies, and assistance with club
                     leadership in one streamlined package. This avoids thousands of dollars 
                     in costs while also saving the headaches of initiating and coordinating 
                     a new program</p>


            </div>

        </div>
    
    </div>

           


    </div>
    </div>
    
  );

};
  
export default CoreTenets;