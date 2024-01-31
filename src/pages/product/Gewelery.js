import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as Action from "../../redux/action/product-action";
import ProductItems from "../../components/productItems/ProductItems";
import { json } from "react-router-dom";

const Gewelery = () => {
  const dispatch = useDispatch();

  const jewelery = "jewelery";
  let { products } = useSelector((state) => state.product);

  const productsItem = products.filter((item) => item.category === jewelery);

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

export default Gewelery;

// export async function productLoader() {
//   const response = await fetch("https://fakestoreapi.com/products");
//   console.log("response");
//   console.log(response);
//   console.log("response");

//   if (!response.ok) {
//     throw json(
//       { message: "Could not fetch details for selected product." },
//       {
//         status: 500,
//       }
//     );
//   } else {
//     const resData = await response.json();
//     return resData;
//   }
// }
