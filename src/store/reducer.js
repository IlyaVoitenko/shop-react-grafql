import { UPDATE_RATES } from "./actionTypes";

const initialState = {
  listProducts: [],
  listRates: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RATES:
      return { ...state, listRates: [...action.payload] };
    default:
      return state;
  }
};
export default reducer;
