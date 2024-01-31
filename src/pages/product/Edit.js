import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import EventForm from "./EventForm";
import { useDispatch, useSelector } from "react-redux";
import * as Action from "../../redux/action/product-action";

const Edit = () => {
  const param = useParams();

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);

  const ProductItems = async () => {
    await dispatch(Action.getProduct(param.id));
  };

  useEffect(() => {
    ProductItems();
  }, []);

  return (
    <div>
      <EventForm item={product} method="put" />
    </div>
  );
};

export default Edit;
