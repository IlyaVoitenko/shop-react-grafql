import {
  UPDATE_RATES,
  UPDATE_LIST_TYPES_CATEGORIES,
  UPDATE_LIST_PRODUCTS,
  SELECT_CURRENCY,
  PRICE_PRODUCT,
} from "./actionTypes";

export function updateListRates(payload) {
  return { type: UPDATE_RATES, payload };
}
export function updateListTypesCategories(payload) {
  return { type: UPDATE_LIST_TYPES_CATEGORIES, payload };
}
export function updateListProducts(payload) {
  return { type: UPDATE_LIST_PRODUCTS, payload };
}
export function updateCurrency(payload) {
  return { type: SELECT_CURRENCY, payload };
}
export function updatePriceProduct(payload) {
  return { type: PRICE_PRODUCT, payload };
}
