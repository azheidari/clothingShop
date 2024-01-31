import url from "../../service/axios-config";

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const CLEAR = "CLEAR";
export const ADDTOCART = "ADDTOCART";

export const addToCart = (product) => {
  const model = {
    userId: 5,
    date: "2020-02-03",
    products: product,
  };

  return (dispatch) => {
    return new Promise((resolve, reject) => {
      url
        .post("carts", model)
        .then((response) => {
          dispatch({ type: ADD, payload: response.data });
          resolve();
        })
        .catch((error) => {
          console.log("in the SIGNIN error ......");
        });
    });
  };
};

export const addItemtoCart = (item, amount) => {
  return { type: "ADDTOCART", payload: { item, amount } };
};

export const removeItem = (id) => {
  return { type: "REMOVE", payload: id };
};
