
import React from 'react';
import './DonateTodoElements.css';
import { Image } from 'react-bootstrap';
import background from "../roborecoverybackground.jpg";
import ourmodel from "./RoboRecoveryFlyer(1).png";
import logo from "../RoboRecoveryLargeLogo.jpg";
import row1left from "./row1left.png";

/*
Questions to ask Nitin:
-resizing the rows isn't working and i dislike that (h-50)
-i don't understad where to put the bootstrap distinctions 
  className vs class

  footer code
<div className="row gx-5 footer">
            <div className="col-sm-12 col-for-image"> 
            <div className="footer-image">
              {/* <Image fluid src={logo} class="img-fluid" alt="Responsive image"></Image> 
  
 */
              

const Donate = () => {
  return (
   
      
  <div>



    <div class="header-picture-cover">

    </div>

    {/* <div className="container container-1"> 

      <div className="row row1">

        <div className="image column-1" class="col-sm-12 h-50"> 
        <Image fluid src={background} class="img-fluid" alt="Responsive image"></Image>
        </div>
      </div>
      
    </div> */}
    
    <div className="kits-we-accept-wrapper">
      {/* <img className="float-left" src={row1left}></img> */}
      <div className="container container-1"> 
      <h2 className="roborecovery-title" font-weight = "bold">How To Donate</h2>
                <hr></hr>
        
          <div className="row gx-5 row2">
          

              <div className="kits col-sm-12"> 
              
                <div className="kits-header">
                  <h1 className="kits-accept">Kits We Accept</h1>
                  <hr></hr>
                  </div> 
        
          
          
                <div className="kits-content">
                  <ul>
                  <li>LEGO Mindstorms NXT 1.0, NXT 2.0, and EV3 parts, including motors, sensors, cables, batteries, </li>
                  <li>LEGO Mindstorms and LEGO Technic bricks (no need to disassemble)</li>
                  <li>LEGO Mindstorms Expansions Sets</li>
                  <li>Previous FIRST LEGO League Robot Game field kits</li>
                  </ul>
                </div> 
              
              
          </div>
        </div>

      
    </div>

   
    {/* <div className="container container-2"> 
        <div className="row gx-5 for-teachers">
          <div >
          <h1 className="for-teachers-header">Donating for Teachers</h1>
          <hr style={{color: '#981817'}}></hr>
          </div>

            <div className="col-sm-6 teacher-works"> 
              <h2 className="teacher-works-header" style={{fontWeight: 'bold'}}>How it Works:</h2>
              <p>
                <ol>
                  <li>We collect donations of LEGO Mindstorms robots from the robotics community across the United States.</li>
                  <li>Donations will be then shipped to the STEM Library Lab</li>

                </ol>
              </p>
            </div>

            <div className="col-sm-6 teachers-donate"> 
            <h2 style={{fontWeight: 'bold'}}>How to Donate:</h2>
            <p>
            Interested in borrowing robots for your classroom? Have Questions? </p>
            <p>Get in touch:
            </p>
            <br></br>
            <p>Email William Bai, Director of RoboRecovery, at roborecoverynola@gmail.com</p>
            </div>
        </div>
      </div> */}

      <div className="container container-3"> 
      <div className="row gx-5 for-donors">

      <div >
          <h1 className="donate-teachers-header">Donating for Donors</h1>
          <hr style={{color: '#981817'}}></hr>
          </div>

          <div className="col-sm-6 donors-works" > 
            <h2 className="donate-works-header" style={{fontWeight: 'bold'}}>How it Works:</h2>
            <p style={{textAlign: 'left'}}>
              <ol>
                  <li>Teachers can borrow classroom sets of robotics kits from the STEM Library Lab.</li>
                  <li>Teachers will have access to free LEGO robotics professional development workshops and complimentary lesson plans tailored to their classroom needs.</li>
                  <li>Teachers, with the support from volunteer teaching assistants, mentor students as they learn engineering and design principles.</li>

              </ol>
            </p>

          </div>
            


          <div className="col-sm-6 donors-donate"> 
          <h2 style={{fontWeight: 'bold'}}>How to Donate:</h2>

          <div classname="donors-donate-content">
            <p> If you have a kit to donate, fill out this quick survey!
            </p>
            <br></br>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYlPuCleMdWXgROu9vmvJsm8MBWgeUR_eBTV21X2OMdEQRaA/viewform?usp=sf_link">Take the Survey Now!</a>
          </div>
          </div>
          </div>
        </div>

          {/* model image */}
          <div className="container model-container">
            <div className = "row header-model">
                <h2 className="roborecovery-title" font-weight = "bold">Our Model</h2>
                <hr></hr>
            </div>
            <div className="row model-photo-row">

                <div className="col-sm-12 model-picture-column">
           
               <Image fluid src={ourmodel} class="img-fluid" alt="Responsive image">
                   </Image>
        

                </div>

            </div>
        </div>


        
        </div>
      
   
  </div>
     

  

  );
};
  
export default Donate;