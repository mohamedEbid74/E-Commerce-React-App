import React from "react";
import hand_logo from "../../Assets/hand_icon.png";
import arrow_logo from "../../Assets/arrow.png";
import welcome_pic from "../../Assets/hero_image.png";
import classes from "./Welcome.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Welcome = () => {
  return (
    <>
    <section className={classes.welcome}>

      <Container style={{maxWidth: '90%'}}>
        <Row>
          <Col xs={12} sm={6} md={6} className={classes.left_side}>
            
              <div>
                <h2>new arrivals only</h2>
                <div className={classes.welcome_hand}>
                  <p>new</p>
                  <img src={hand_logo} alt='' />
                </div>
                <p>Collections</p>
                <p>For Everyone...</p>
                <div className={classes.latest}>
                  <p>Latest Collection</p>
                  <img src={arrow_logo} alt='' />
                </div>
              </div>
            
          </Col>

          <Col className={classes.right_side}>
            <div>
              <img src={welcome_pic} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default Welcome;
