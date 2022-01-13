import React from 'react';
import './ReachUsElements.css';
import { Image } from 'react-bootstrap';
import background from "../RoboRecoveryLargeLogo.jpg";

/*

           fix bottom image
*/

const ReachUs = () => {
  return ( 


   <div className="container container-addition" class="container-fluid">

       <div className="row">

           <div className="col-sm-6 column-1"> </div>


           <div className="col-sm-6 column-2">

               <div className="lettermargins">

                <div className="ReachUs-Header">
                    <h1 className="ReachUs-Header">Ready for Hands-On STEM Learning for Your Students?</h1>
                    <hr></hr>
                </div>
            
                <h2 className="Contact">CONTACT US:</h2>

                <div className="WilliamName">
                    <h2 className="name">William Bai</h2>
                    <p className="William-Header">RoboRecovery Founder and Director</p>
                </div>

                <div className="ContactInfo">
                    <p>Email: roborecoveryNOLA@gmail.com</p>
                    <p>Facebook: @roborecoverynola</p>
                    <p>Twitter: @roborecoverynola</p>
                    <p>Instagram: @roborecoverynola</p>
                </div>

    

               </div>

               <div className="logo">
               <Image fluid src={background} class="img-fluid" alt="Responsive image">
                   </Image>
               </div>

               
            
            </div>
            

           </div>

     </div>
      
         
      
 
  );

};
  
export default ReachUs;