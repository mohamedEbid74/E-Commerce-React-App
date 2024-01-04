import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../Assets/logo.png";
import cart_logo from "../../Assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useSelector } from "react-redux";
function Navbaar() {
  const activeClass = ({ isActive }) => (isActive ? classes.active : "");
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <>
      <Navbar expand='lg' className={`bg-body-tertiary ${classes.navbar}`}>
        <Container fluid style={{width: '80%'}}>
          <div className={classes.navbar_logo}>
            <img src={logo} alt='' />
            <p>shopper</p>
          </div>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className={`me-auto my-2 my-lg-0 ${classes.navbar_menu}`}
            >
              <NavLink className={activeClass} to='/'>
                Shop
              </NavLink>

              <NavLink className={activeClass} to='/mens'>
                Men
              </NavLink>

              <NavLink className={activeClass} to='/womans'>
                Woman
              </NavLink>

              <NavLink className={activeClass} to='/kids'>
                Kids
              </NavLink>
            </Nav>
            <div className={classes.navbar_cart}>
              <Link to='/login'>
                <button>Log In</button>
              </Link>
              <Link to='/cart'>
                <img src={cart_logo} alt='' />
              </Link>
              <div className={classes.cart_counter}>{totalQuantity}</div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbaar;
