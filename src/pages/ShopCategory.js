import React from "react";
import allProducts from "../Assets/all_product.js";
import sort_icon from '../Assets/dropdown_icon.png';
import CartItems from "../Components/Card/CartItems.js";
import classes from './css/ShopCategory.module.css';
const ShopCategory = (props) => {
  return (
    <>
      <div className={classes.banner}>
        <img src={props.banner} alt='' />
      </div>
      <div>
        <div className={classes.sort}>
          <p>Showing 1-12 <span>out 36 products</span></p>
          <button>sort by <img src={sort_icon} alt=""/></button>
        </div>
        <div className={classes.products}>
          {allProducts.map((item) => {
            if (props.category === item.category) {
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
            } else {
              return null;
            }
          })}
        </div>
        <div className={classes.seeMore}>
          <button>see more</button>
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
