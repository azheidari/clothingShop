import {
  ALLPRODUCTS,
  PRODUCT,
  PRODUCTSEARCH,
  PRODUCTBYPRATE,
  PRODUCTBYPRICE,
  CHANGETHEME,
  EDITPRODUCTS,
  ADDPRODUCTS,
  DELETEPRODUCTS,
} from "../action/product-action";

const intialState = {
  theme: false,
  products: [],
  product: {},
  originalProducts: [],
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case ALLPRODUCTS:
      return {
        ...state,
        products: action.payload,
        originalProducts: action.payload,
      };
    case PRODUCTSEARCH:
      const filtered = state.originalProducts.filter((item) =>
        item.title.includes(action.payload)
      );

      return {
        ...state,
        products: filtered,
      };
    case PRODUCTBYPRICE:
      const filter = state.originalProducts.filter((item) => {
        if (action.payload === 10) {
          return item.price >= 0 && item.price <= action.payload;
        }
        if (action.payload === 100) {
          return item.price > 10 && item.price <= action.payload;
        }
        if (action.payload === 500) {
          return item.price > 100;
        }
      });
      return {
        ...state,
        products: filter,
      };
    case PRODUCTBYPRATE:
      const rate = state.originalProducts.filter((item) => {
        if (action.payload === 3) {
          return item.rating.rate >= 0 && item.rating.rate <= action.payload;
        }
        if (action.payload === 5) {
          return item.rating.rate > 3 && item.rating.rate <= action.payload;
        }
      });
      return {
        ...state,
        products: rate,
      };
    case PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case CHANGETHEME:
      return {
        ...state,
        theme: !state.theme,
      };
    case EDITPRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    case ADDPRODUCTS:
      console.log("action.payload");
      console.log(action.payload);
      console.log("action.payload");
      return {
        ...state,
        // product: action.payload,
      };
    case DELETEPRODUCTS:
      return {
        ...state,
        // product: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
