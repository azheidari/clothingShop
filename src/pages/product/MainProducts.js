import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Action from "../../redux/action/product-action";
import ProductCategory from "../ProductCategory";

function MainProducts() {
  const dispatch = useDispatch();

  let { products } = useSelector((state) => state.product);

  // const signUp = () => {
  //   dispatch(AuthAction.signUp());
  // };

  const getAllProductss = async () => {
    await dispatch(Action.getAllProducts());
  };

  useEffect(() => {
    getAllProductss();
  }, []);

  return (
    <>
      {Array.isArray(products) && products.length > 0 && (
        <ProductCategory items={products} />
      )}
    </>
  );
}

export default MainProducts;
