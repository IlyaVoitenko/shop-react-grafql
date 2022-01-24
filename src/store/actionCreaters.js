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

export function updateListRates(payload) {
  return { type: UPDATE_RATES, payload };
}
export function updateListTypesCategories(payload) {
  return { type: UPDATE_LIST_TYPES_CATEGORIES, payload };
}
export function updateListProducts(payload) {
  return { type: UPDATE_LIST_PRODUCTS, payload };
}
export function updateListCart(payload) {
  return { type: UPDATE_LIST_CART, payload };
}
export function updateCurrency(payload) {
  return { type: SELECT_CURRENCY, payload };
}
export function updateDescriptionProduct(payload) {
  return { type: DESCRIPTION_PRODUCT, payload };
}
export function updateSizeClothes(payload) {
  return { type: UPDATE_SIZE_CLOTHES, payload };
}
export function updatePathMainImage(payload) {
  return { type: UPDATE_PATH_MAIN_IMAGE, payload };
}
