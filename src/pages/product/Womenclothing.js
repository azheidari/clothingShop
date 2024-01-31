import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as Action from "../../redux/action/product-action";
import ProductItems from "../../components/productItems/ProductItems";


const Womenclothing = () => {
  const dispatch = useDispatch();

  // const item = useParams();

  const womensclothing = "women's clothing";
  let { products } = useSelector((state) => state.product);

  const productsItem = products.filter((item) => item.category === womensclothing);

  const getAllProductss = async () => {
    await dispatch(Action.getAllProducts());
  };

  useEffect(() => {
    getAllProductss();
  }, []);

  return (
    <>
      {Array.isArray(productsItem) && productsItem.length > 0 && (
        <ProductItems items={productsItem} />
      )}
    </>
  );
};

export default Womenclothing;
