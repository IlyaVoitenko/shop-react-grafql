import {
  UPDATE_RATES,
  UPDATE_LIST_TYPES_CATEGORIES,
  UPDATE_LIST_PRODUCTS,
  SELECT_CURRENCY,
  PRICE_PRODUCT,
} from "./actionTypes";

const initialState = {
  listProducts: [],
  listRates: [],
  listTypesCategories: [],
  selectedCurrency: "USD",
  priceProduct: { amount: 0, currency: { label: "", symbol: "" } },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RATES:
      return { ...state, listRates: [...action.payload] };
    case UPDATE_LIST_TYPES_CATEGORIES:
      return { ...state, listTypesCategories: [...action.payload] };
    case UPDATE_LIST_PRODUCTS:
      return { ...state, listProducts: [...action.payload] };
    case SELECT_CURRENCY:
      return { ...state, selectedCurrency: action.payload };
    case PRICE_PRODUCT:
      return { ...state, priceProduct: action.payload };
    default:
      return state;
  }
};
export default reducer;
