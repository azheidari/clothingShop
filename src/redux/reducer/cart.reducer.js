import { ADD, REMOVE, CLEAR, ADDTOCART } from "./../action/cart-action";

const intialState = {
  items: [],
  item: {},
  totalAmount: 0,
  cartItems: [],
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        items: action.payload,
      };

    case ADDTOCART:
      const updatedTotalAmount =
        state.totalAmount + action.payload.item.price * action.payload.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };

        updatedItems = [...state.items];

        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload.item);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case REMOVE:
      const existingCartItemm = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingCartItemm];
      const updatedTotalAmountt = state.totalAmount - existingItem.price;
      let updatedItemss;
      if (existingItem.amount === 1) {
        updatedItemss = state.items.filter(
          (item) => item.id !== action.payload
        );
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItemss = [...state.items];
        updatedItemss[existingCartItemm] = updatedItem;
      }

      return {
        items: updatedItemss,
        totalAmount: updatedTotalAmountt,
      };

    case CLEAR:
      return intialState;

    default:
      return state;
  }
};

export default productReducer;
