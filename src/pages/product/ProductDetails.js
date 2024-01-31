import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import classes from "./home.module.css";

import * as Action from "../../redux/action/product-action";

function ProductDetails() {
  const param = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);

  const ProductItems = async () => {
    await dispatch(Action.getProduct(param.id));
  };

  function cancelHandler() {
    navigate("..");
  }
  const deleteHandler = async () => {
    const proceed = window.confirm("Are You Sure");

    if (proceed) {
      await dispatch(Action.deleteProduct(param.id));
      cancelHandler();
    }
  };
  useEffect(() => {
    ProductItems();
  }, []);

  return (
    <div className={classes.cardDetail}>
      <article className={classes.cta}>
        <img
          style={{ with: "200px", height: "200px" }}
          src={product.image}
          alt="imag"
        />
        <div className={classes.cta__textcolumn}>
          <h3>{product.title}</h3>
          <h4>{product.price}</h4>
          <p>{product.description}</p>
          <button
            style={{
              width: "20%",
              padding: "7px",
              background: "white",
              borderRadius: "5px",
            }}
          >
            ADD
          </button>
          <Link to="edit">Edit</Link>
          <button onClick={deleteHandler}>Delete</button>
          <Link to="new">ADD</Link>
        </div>
      </article>
    </div>
  );
}

export default ProductDetails;
