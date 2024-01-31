import React, { useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../cart/CartIcon";
import { useSelector } from "react-redux";
// import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnHeighlighted, setbtnHeighlighted] = useState(false);
  //   const cartCtx = useContext(CartContext);


  const { items } = useSelector((state) => state.cart);

  const numberOfCartContext = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${btnHeighlighted ? classes.bump : ""}`;

  //   const { items } = cartCtx;

  //   useEffect(() => {
  //     if (items.length === 0) {
  //       return;
  //     }
  //     setbtnHeighlighted(true);

  //     const timer = setTimeout(() => {
  //       setbtnHeighlighted(false);
  //     }, 300);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartContext}</span>
    </button>
  );
};

export default HeaderCartButton;
