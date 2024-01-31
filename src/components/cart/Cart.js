import React from "react";
import { useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import Modal from "../ui/Modal";
import * as CartActon from "../../redux/action/cart-action";
import { useDispatch } from "react-redux";
import cart from "../../models/cart";

function Cart(props) {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  const product = [];
  for (const key in items) {
    const item = new cart(items[key].id, items[key].amount);
    product.push(item);
  }

  const totalAmounts = `$${totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    dispatch(CartActon.removeItem(id));
  };
  const cartItemAddHandler = (item, amount = 1) => {
    item["amount"] = amount;
    dispatch(CartActon.addItemtoCart(item, amount));
  };

  // const order = () => {
  //   // let products = [];
  //   // items.forEach((prd) => {
  //   //   const entity = new cart(prd.id, prd.amount);
  //   //   products.push(entity);
  //   // });
  //   dispatch(CartActon.addToCart());
  // };

  const cartItems = (
    <>
      {items.map((item) => (
        <div className={classes["cart-item"]}>
          <img
            style={{
              width: "60px",
              height: "50px",
              borderRadius: "5px",
              borderWidth: "1px",
              border: "1px solid #eee",
              padding: "5px",
              marginRight: "15px",
            }}
            src={item.image}
            alt="imag"
          />
          <h2 style={{ color: "black", fontSize: "14px" }}>
            {item.title.substring(1, 40)}
          </h2>
          <span className={classes.price}>{item.price}</span>
          <span className={classes.amount}>x {item.amount}</span>
          <div className={classes.actions}>
            <button onClick={cartItemRemoveHandler.bind(null, item.id)}>
              −
            </button>
            <button onClick={() => cartItemAddHandler(item)}>+</button>
          </div>
        </div>
      ))}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmounts}</span>
      </div>
      <div className={classes["cart-item"]}>
        <div className={classes.actions}>
          <button>Order</button>
        </div>
      </div>
    </>
  );

  return <Modal onClose={props.onClose}>{cartItems}</Modal>;
}

export default Cart;
