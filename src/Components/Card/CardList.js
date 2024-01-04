import React from "react";
import classes from "./CardList.module.css";
import CartItems from "./CartItems";
import data_product from "../../Assets/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardList = (props) => {
  return (
    <>
      <section className={classes.card}>
        <div className={classes.card_items}>
          <h1>{props.title}</h1>
          <Container style={{maxWidth: '100%'}}>
            <ul>
              <Row>
                {data_product.map((item) => {
                  return (
                    <CartItems
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      new_price={item.new_price}
                      old_price={item.old_price}
                    />
                  );
                })}
              </Row>
            </ul>
          </Container>
        </div>
      </section>
    </>
  );
};

export default CardList;
