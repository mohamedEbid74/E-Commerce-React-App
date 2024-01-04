import React from "react";
import classes from "./ProductDetail.module.css";
import star_icon from "../../Assets/star_icon.png";
import star_icon_dull from "../../Assets/star_dull_icon.png";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store";
const ProductDetail = (props) => {
  const { product } = props;
  const {id , name , new_price , image} = product;
  const dispatch = useDispatch();
  const addToCartHandler = ()=>{
    dispatch(cartAction.addToCart({
      id,
      name,
      new_price,
      image
    }));
  }
  return (
    <>
      <section className={classes.product_detail}>
        <div className={classes.left_side}>
          <div className={classes.list_img}>
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
          </div>
          <div className={classes.main_img}>
            <img src={product.image} alt='' />
          </div>
        </div>
        <div className={classes.right_side}>
          <h1>{product.name}</h1>
          <div className={classes.star}>
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_icon} alt='' />
            <img src={star_icon_dull} alt='' />
            <p>(122)</p>
          </div>
          <div className={classes.price}>
            <p className={classes.old}>${product.old_price}</p>
            <p className={classes.new}>${product.new_price}</p>
          </div>
          <div className={classes.desc}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eget ipsum nec ipsum lobortis consectetur non eget
              mauris. Donec pharetra aliquet lacus, in mattis mauris blandit
              finibus.
            </p>
          </div>
          <div className={classes.size}>
            <h2>select size</h2>
            <div className={classes.select}>
              <p>s</p>
              <p>m</p>
              <p>l</p>
              <p>xl</p>
              <p>xxl</p>
            </div>
          </div>
          <div className={classes.cart_btn}>
            <button onClick={addToCartHandler}>add to cart</button>
          </div>
          <div className={classes.info}>
            <p>
              <span>category :</span> {product.category} ,t-shirt , crop top
            </p>
            <p>
              <span>tags :</span> modern , latest
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
