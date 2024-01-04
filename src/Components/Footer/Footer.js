import React from "react";
import footer_img from "../../Assets/logo_big.png";
import ig_pic from "../../Assets/instagram_icon.png";
import pin_pic from "../../Assets/pintester_icon.png";
import whatsapp_pic from "../../Assets/whatsapp_icon.png";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <section className={classes.footer}>
        <div className={classes.logo}>
          <img src={footer_img} alt='' />
          <h1>Shopper</h1>
        </div>
        <div className={classes.links}>
          <ul>
            <li>company</li>
            <li>products</li>
            <li>offices</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
        <div className={classes.icons}>
          <div className={classes.icons_img}>
            <img src={ig_pic} alt='' />
          </div>
          <div className={classes.icons_img}>
            <img src={pin_pic} alt='' />
          </div>
          <div className={classes.icons_img}>
            <img src={whatsapp_pic} alt='' />
          </div>
        </div>
        <div className={classes.copyright}>
          <hr />
          <p>Copyright @ 2023-all right reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
