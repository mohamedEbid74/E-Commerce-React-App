import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartData.module.css";
import Table from "react-bootstrap/Table";
import remove_icon from "../../Assets/cart_cross_icon.png";
import { Link } from "react-router-dom";
import { cartAction } from "../../Store";
const CartData = () => {
  const items = useSelector((state) => state.cart.items);
  const isEmpty = useSelector((state) => state.cart.isEmpy);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const removeFromCartHandler = (id) => {
    dispatch(cartAction.removeFromCart(id));
  };
  return (
    <>
      <section className={classes.cart}>
        {isEmpty && (
          <div className={classes.empty}>
            <h2>your cart is empty</h2>
            <p>visite our products to see what is new....</p>
          </div>
        )}
        {!isEmpty && (
          <>
            <div className={classes.cart_detail}>
              <Table responsive className={classes.cart_list}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>title</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                    <th>remove</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((i) => {
                    return (
                      <tr key={i.id}>
                        <td>
                          <Link to={`/products/${i.id}`}>
                            <img src={i.image} alt='' />
                          </Link>
                        </td>
                        <td className={classes.name}>{i.name}</td>
                        <td className={classes.price}>${i.price}</td>
                        <td>
                          <span className={classes.quantity}>
                            x{i.quantity}
                          </span>
                        </td>
                        <td className={classes.price}>${i.totalPrice}</td>
                        <td>
                          <img
                            src={remove_icon}
                            alt=''
                            className={classes.icon}
                            onClick={() => removeFromCartHandler(i.id)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            <div className={classes.ordering}>
              <div className={classes.order_action}>
                <h3>cart totals</h3>
                <div className={classes.listTotal}>
                  <div>
                    <p>subtotal</p>
                    <p>${total}</p>
                  </div>
                  <div>
                    <p>shipping free</p>
                    <p>free</p>
                  </div>
                  <div className={classes.total}>
                    <p>total</p>
                    <p>${total}</p>
                  </div>
                  <button>proceed to checkout</button>
                </div>
              </div>
              <div className={classes.promo_code}>
                <p>if you have a promo code, enter it here</p>
                <div className={classes.form}>
                  <input type='text' placeholder='prom code' />
                  <button>submit</button>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default CartData;
