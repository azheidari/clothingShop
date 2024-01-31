import React from "react";
import { Link } from "react-router-dom";
import classes from "../../pages/product/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import * as CartAction from "../../redux/action/cart-action";
import * as ProductAction from "../../redux/action/product-action";

function ProductItems({ items }) {
  const dispatch = useDispatch();
  let { theme } = useSelector((state) => state.product);

  const changetheme = () => {
    dispatch(ProductAction.changeThemee());
  };

  const cartItem = (item, amount = 1) => {
    item["amount"] = amount;
    dispatch(CartAction.addItemtoCart(item, amount));
  };

  const [value, setValue] = React.useState("");
  const [rate, setRate] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    const price = +event.target.value;
    dispatch(ProductAction.selectByPrice(price));
  };
  const handleChangeByRate = (event) => {
    setRate(event.target.value);
    const rate = +event.target.value;
    dispatch(ProductAction.selectByRate(rate));
  };
  const options = [
    { label: "Select By Price", value: -1 },

    { label: "pricy", value: 10 },

    { label: "Cost Effective", value: 100 },

    { label: "Expensive", value: 500 },
  ];

  const option = [
    { label: "Select By Rate", value: -1 },

    { label: "Rate bellow 3", value: 3 },

    { label: "Rate upper 3", value: 5 },
  ];
  return (
    <>
      <div style={{ display: "flex" }}>
        <div >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <select
              value={value}
              onChange={handleChange}
              style={{ width: "15rem", height: "2rem", borderRadius: "0.5rem" }}
            >
              {options.map((item, index) => {
                return <option value={item.value}>{item.label}</option>;
              })}
            </select>
          </div>
          <div>
            <select
              style={{
                width: "15rem",
                height: "2rem",
                borderRadius: "0.5rem",
                marginTop: "1rem",
              }}
              value={rate}
              onChange={handleChangeByRate}
            >
              {option.map((item, index) => {
                return <option value={item.value}>{item.label}</option>;
              })}
            </select>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
      </div>
    </>
  );
}

export default ProductItems;
