import React from "react"
import { Button } from 'react-bootstrap';
import './TodoContainerElements.css';
class TodoContainer extends React.Component {
  render() {
    return (
      <div className="homepage-background">
{/* 
        roborecovery main page words and header */}
        <div classname="roborecovery-words-main">

          <div className="container container-one-main">

            <div className="row row-one-main">

              <div className="col-sm-12 column-words-main">
                <h1 className="roborecovery-header-homepage">RoboRecovery</h1>

                <div className="roborecovery-text-homepage">Past Robots for Present Education</div>
              </div>

            </div>

          </div>

        </div>

        <div className="roborecovery-buttons-main">
        <div classname="container container-two-main">
        <div className="row row-two-main">

            <div className="col-sm-6 column-one"> 
            
            <Button className="aboutusbutton" href="./components/About/AboutTodoContainer" size="xxl" color="secondary">About Us</Button>
            </div>


            <div className="col-sm-6 column-two">

            <Button className="reachusbutton" href="./components/ReachUs/ReachUsTodoContainer" size="xxl" color="secondary">Contact Us</Button>



             </div>

                
            
            </div>
 

            </div>
          </div>

          
        

       </div>
    )
  }
}
export default TodoContainer