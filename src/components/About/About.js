import React from "react";
import "./About.css";
import Leah from "./images/Leah.jpeg";
import Susan from "./images/Susan.jpeg";
import Card from 'react-bootstrap/Card';



class About extends React.Component {


  render() {


    return (
      <>
      <h1>All about Leah and Susan</h1>
      <div class="aboutUs">
        <div className="Card">
          
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Susan} />
            <Card.Body>
              <Card.Title>Susan</Card.Title>
              <Card.Text>
              Although my background is in fine art, I have always been interested in technology. I decided to pursue a career in software development as I believe my creativity and problem-solving skills, honed through my fine art training, will be valuable assets in this field.

              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Leah} />
            <Card.Body>
              <Card.Title>Leah</Card.Title>
              <Card.Text>
              I am a Digital Marketer and Software Developer. I am passionate about helping people and working on meaningful projects.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
        {/* <img src={imgBooks} alt="line drawing of stack of books" class="bgAbout" /> */}

      </>
    );
  }
}



export default About;