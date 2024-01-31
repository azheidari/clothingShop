import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as CategeAction from "../../redux/action/category-action";
import { useParams } from "react-router-dom";
import ProductItems from "../../components/productItems/ProductItems";

function Category() {
  const dispatch = useDispatch();

  const item = useParams();



  const {
    category: { categoryItem },
  } = useSelector((state) => state);

  const getCategory = async () => {
    await dispatch(CategeAction.getCategory(item.category));
  };


  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      {Array.isArray(categoryItem) && categoryItem.length > 0 && (
        <ProductItems items={categoryItem} />
      )}
    </>
  );
}

export default Category;
