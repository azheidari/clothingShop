import { combineReducers, applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";

import category from "../../src/redux/reducer/category.reducer";
import product from "../../src/redux/reducer/product.reducer";
import auth from "../../src/redux/reducer/auth.reducer";
import cart from "../../src/redux/reducer/cart.reducer";

const reducer = combineReducers({
  category,
  product,
  auth,
  cart
});

const store = createStore(reducer, applyMiddleware(ReduxThunk));
export default store;
