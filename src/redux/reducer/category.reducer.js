import { ALLCATEGORIES, CATEGORY } from "../action/category-action";

const intialState = {
  categories: [],
  categoryItem: {},
};

const categoryReducer = (state = intialState, action) => {
  switch (action.type) {
    case ALLCATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case CATEGORY:
      return {
        ...state,
        categoryItem: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
