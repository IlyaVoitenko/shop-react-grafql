import {
  UPDATE_RATES,
  UPDATE_LIST_TYPES_CATEGORIES,
  UPDATE_LIST_PRODUCTS,
  SELECT_CURRENCY,
  DESCRIPTION_PRODUCT,
  UPDATE_SIZE_CLOTHES,
  UPDATE_PATH_MAIN_IMAGE,
  UPDATE_LIST_CART,
} from "./actionTypes";

const initialState = {
  listProducts: [],
  listRates: [],
  listTypesCategories: [],
  listCart: [],
  selectedCurrency: "USD",
  sizeClothes: "XL",
  descriptionProduct: { gallery: [""] },
  srcMainImg: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RATES:
      return { ...state, listRates: [...action.payload] };
    case UPDATE_LIST_TYPES_CATEGORIES:
      return { ...state, listTypesCategories: [...action.payload] };
    case UPDATE_LIST_PRODUCTS:
      return { ...state, listProducts: [...action.payload] };
    case UPDATE_LIST_CART:
      return {
        ...state,
        listCart: [...state.listCart, action.payload],
      };
    case SELECT_CURRENCY:
      return { ...state, selectedCurrency: action.payload };
    case DESCRIPTION_PRODUCT:
      return { ...state, descriptionProduct: { ...action.payload } };
    case UPDATE_SIZE_CLOTHES:
      return { ...state, sizeClothes: action.payload };
    case UPDATE_PATH_MAIN_IMAGE:
      return { ...state, srcMainImg: action.payload };

    default:
      return state;
  }
};
export default reducer;
