import { useEffect } from "react";
import { updatePriceProduct } from "../../../../../store/actionCreaters";
import { useDispatch, useSelector } from "react-redux";
import { getPriceProduct } from "./selectors";
import { getSelectedCurrency } from "../../../../Header/Currencies/selectors";
import style from "./PriceProduct.module.css";

const PriceProduct = ({ prices }) => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(getSelectedCurrency);
  const currentCarrencyProduct = prices.filter(
    (price) => price.currency.label === selectedCurrency
  );
  const { amount } = currentCarrencyProduct[0];
  const { symbol } = currentCarrencyProduct[0].currency;

  return (
    <div className={style.price}>
      {symbol} {amount}
    </div>
  );
};
export default PriceProduct;
