import React, { useRef, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

import { useDispatch } from "react-redux";

import classes from "./EventForm.module.css";
import * as Action from "../../redux/action/product-action";

function EventForm({ item, method }) {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const categoryInputRef = useRef();
  const descriptionInputRef = useRef();

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const imageInputChangeHandler = (event) => {
    setImage(event.target.value);
  };
  const priceInputChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const categoryInputChangeHandler = (event) => {
    setCategory(event.target.value);
  };
  const descriptionInputChangeHandler = (event) => {
    setDescription(event.target.value);
  };
  function cancelHandler() {
    navigate("/");
  }

  const formSubmission = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    console.log("formSubmission");
    console.log(item.id);
    console.log(enteredTitle);
    console.log(enteredPrice);
    console.log(enteredImage);
    console.log(enteredCategory);
    console.log("formSubmission");

    const id = item.id;

    if (method === "put") {
      dispatch(
        Action.editProduct(
          id,
          enteredTitle,
          enteredPrice,
          enteredDescription,
          enteredImage,
          enteredCategory
        )
      );
      cancelHandler();
    }

    if (method === "post") {
      dispatch(
        Action.addProduct(
          enteredTitle,
          enteredPrice,
          enteredDescription,
          enteredImage,
          enteredCategory
        )
      );
      cancelHandler();
    }
  };

  const navigate = useNavigate();
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const isSubmitting = navigation.state === "submitting";

  //   const onsubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(Action.editProduct(item));
  //     cancelHandler();
  //   };

  return (
    <div className="form-box">
      <form onSubmit={formSubmission} className={classes.form}>
        <p>
          <label
            htmlFor="title"
            style={{
              color: "black",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Title
          </label>
          <input
            ref={titleInputRef}
            onChange={titleInputChangeHandler}
            value={title}
            id="title"
            type="text"
            name="title"
            required
            defaultValue={item ? item.title : ""}
          />
        </p>
        <p>
          <label
            htmlFor="image"
            style={{
              color: "black",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Image
          </label>
          <input
            id="image"
            ref={imageInputRef}
            value={image}
            onChange={imageInputChangeHandler}
            type="url"
            name="image"
            required
            defaultValue={item ? item.image : ""}
          />
        </p>
        <p>
          <label
            htmlFor="price"
            style={{
              color: "black",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Price
          </label>
          <input
            id="price"
            ref={priceInputRef}
            value={price}
            onChange={priceInputChangeHandler}
            type="number"
            name="price"
            required
            defaultValue={item ? item.price : ""}
          />
        </p>
        <p>
          <p>
            <label
              htmlFor="category"
              style={{
                color: "black",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              category
            </label>
            <input
              ref={categoryInputRef}
              onChange={categoryInputChangeHandler}
              value={category}
              id="category"
              type="text"
              name="category"
              required
              defaultValue={item ? item.category : ""}
            />
          </p>
          <label
            htmlFor="description"
            style={{
              color: "black",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Description
          </label>
          <textarea
            ref={descriptionInputRef}
            onChange={descriptionInputChangeHandler}
            value={description}
            id="description"
            type="text"
            name="description"
            required
            defaultValue={item ? item.description : ""}
          />
        </p>
        <div className={classes.actions}>
          <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
            Cancel
          </button>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
