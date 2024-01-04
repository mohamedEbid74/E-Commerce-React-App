import React from "react";
import classes from "./CardItems.module.css";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
const CartItems = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Col xs={12} sm={12} md={6} lg={6} xl={3}>
        <li>
          <div className={classes.item}>
            <Link to={`/products/${props.id}`}>
              <img src={props.image} alt='' onClick={scrollToTop} />
            </Link>
            <div className={classes.desc}>
              <p className={classes.title}>{props.name}</p>
              <div className={classes.price}>
                <p className={classes.new_price}>${props.new_price}</p>
                <p className={classes.old_price}>${props.old_price}</p>
              </div>
            </div>
          </div>
        </li>
      </Col>
    </>
  );
};

export default CartItems;
