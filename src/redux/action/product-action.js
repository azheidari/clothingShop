import { json } from "react-router-dom";
import url from "../../service/axios-config";

export const ALLPRODUCTS = "ALLPRODUCTS";
export const PRODUCT = "PRODUCT";
export const PRODUCTSEARCH = "PRODUCTSEARCH";
export const PRODUCTBYPRICE = "PRODUCTBYPRICE";
export const PRODUCTBYPRATE = "PRODUCTBYPRATE";
export const CHANGETHEME = "CHANGETHEME";
export const EDITPRODUCTS = "EDITPRODUCTS";
export const ADDPRODUCTS = "ADDPRODUCTS";
export const DELETEPRODUCTS = "DELETE";

export const getAllProducts = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      url
        .get("products/")
        .then((response) => {
          dispatch({ type: ALLPRODUCTS, payload: response.data });
          resolve();
        })
        .catch((error) => {
          console.log(error.message);
          throw json(
            { message: error },
            {
              status: 500,
            }
          );
        });
    });
  };
};

export const editProduct = (
  id,
  enteredTitle,
  enteredPrice,
  enteredDescription,
  enteredImage,
  enteredCategory
) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      url
        .put(`products/${id}`, {
          title: enteredTitle,
          price: enteredPrice,
          description: enteredDescription,
          image: enteredImage,
          category: enteredCategory,
        })
        .then((response) => {
          dispatch({ type: EDITPRODUCTS, payload: response.data });
          resolve();
        })
        .catch((error) => {
          console.log(error.message);
          throw json(
            { message: error },
            {
              status: 500,
            }
          );
        });
    });
  };
};

export const addProduct = (
  enteredTitle,
  enteredPrice,
  enteredDescription,
  enteredImage,
  enteredCategory
) => {
  //  const formData = new FormData();

  // for (let item in model) {
  //   formData.append(item, model[item]);
  // }
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      url
        .post("products", {
          title: enteredTitle,
          price: enteredPrice,
          description: enteredDescription,
          image: enteredImage,
          category: enteredCategory,
        })
        .then((response) => {
          console.log("response.data");
          console.log(response.data);
          console.log("response.data");
          dispatch({ type: ADDPRODUCTS, payload: response.data });
          resolve();
        })
        .catch((error) => {
          console.log(error.message);
          throw json(
            { message: error },
            {
              status: 500,
            }
          );
        });
    });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      url
        .delete(`products/${id}`)
        .then((response) => {
          dispatch({ type: DELETEPRODUCTS, payload: response.data });
          console.log("DELETEPRODUCTS");
          console.log(response.data);
          console.log("DELETEPRODUCTS");
          resolve();
        })
        .catch((error) => {
          console.log(error.message);
          throw json(
            { message: error },
            {
              status: 500,
            }
          );
        });
    });
  };
};

export const productSearch = (term) => {
  return { type: PRODUCTSEARCH, payload: term };
};

export const selectByPrice = (term) => {
  return { type: PRODUCTBYPRICE, payload: term };
};
export const selectByRate = (term) => {
  return { type: PRODUCTBYPRATE, payload: term };
};
export const changeThemee = () => {
  return { type: CHANGETHEME };
};

export const getProduct = (item) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      url
        .get(`products/${item}`)
        .then((response) => {
          dispatch({ type: PRODUCT, payload: response.data });
          resolve();
        })
        .catch((error) => {
          throw json(
            { message: error },
            {
              status: 500,
            }
          );
        });
    });
  };
};
