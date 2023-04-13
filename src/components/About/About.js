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
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Leah} />
            <Card.Body>
              <Card.Title>Leah</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
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