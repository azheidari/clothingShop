import React from "react";

import classes from "../pages/product/home.module.css";
import { Link } from "react-router-dom";
import * as CartAction from "../redux/action/cart-action";
import { useDispatch } from "react-redux";

const ProductCategory = ({ items }) => {
  const dispatch = useDispatch();

  const cartItem = (item, amount = 1) => {
    item["amount"] = amount;
    dispatch(CartAction.addItemtoCart(item, amount));
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {items.map((item, index) => {
          return (
            <div className={classes.card} key={index.toString()}>
              <Link key={index.toString()} to={item.id.toString()}>
                <img
                  style={{ with: "200px", height: "200px" }}
                  src={item.image}
                  alt="imag"
                />
              </Link>
              <p style={{ alignSelf: "center", color: "black" }}>
                {item.title.substr(1, 20)}
              </p>
              <p style={{ alignSelf: "center", color: "black" }}>
                {item.price}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ alignSelf: "center", color: "black" }}>
                  rate : {item.rating.rate}
                </p>
                <p style={{ alignSelf: "center", color: "black" }}>
                  count : {item.rating.count}
                </p>
              </div>
              <button
                onClick={() => cartItem(item)}
                style={{
                  width: "100%",
                  padding: "7px",
                  background: "white",
                  borderRadius: "5px",
                }}
              >
                ADD
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCategory;
