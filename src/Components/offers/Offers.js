import React from "react";
import offer_pic from "../../Assets/exclusive_image.png";
import classes from "./Offers.module.css";
import Stack from "react-bootstrap/Stack";

const Offers = () => {
  return (
    <>
      <section className={classes.offer}>
        <div className={classes.offer_content}>
          <Stack direction='horizontal' className={classes.stach}>
            <div className={classes.offer_left_side}>
              <h1>exclusive</h1>
              <h1>offers for you</h1>
              <p>only on best seller products</p>
              <button>check now</button>
            </div>
            <div className={classes.offer_right_side}>
              <img src={offer_pic} alt='' />
            </div>
          </Stack>
        </div>
      </section>
    </>
  );
};

export default Offers;
