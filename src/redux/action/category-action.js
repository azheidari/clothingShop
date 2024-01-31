import url from "../../service/axios-config";

export const ALLCATEGORIES = "ALLCATEGORIES";
export const CATEGORY = "CATEGORY";

export const getAllCategories = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      url
        .get("products/categories")
        .then((response) => {
          dispatch({ type: ALLCATEGORIES, payload: response.data });
          resolve();
        })
        .catch((error) => console.log(error));
    });
  };
};

export const getCategory = (item) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      url
        .get(`products/category/${item}`)
        .then((response) => {
          dispatch({ type: CATEGORY, payload: response.data });
          resolve();
        })
        .catch((error) => console.log(error));
    });
  };
};
