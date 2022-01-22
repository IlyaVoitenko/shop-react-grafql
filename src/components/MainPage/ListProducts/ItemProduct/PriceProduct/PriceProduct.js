import { useEffect } from "react";
import { updatePriceProduct } from "../../../../../store/actionCreaters";
import { useDispatch, useSelector } from "react-redux";
import { getPriceProduct } from "./selectors";
import { getSelectedCurrency } from "../../../../Header/Currencies/selectors";
import style from "./PriceProduct.module.css";

const PriceProduct = ({ prices }) => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(getSelectedCurrency);
  const priceProduct = useSelector(getPriceProduct);
  const currentCarrencyProduct = prices.filter(
    (price) => price.currency.label === selectedCurrency
  );
  const { amount } = priceProduct;
  const { symbol } = priceProduct.currency;

  useEffect(() => {
    dispatch(updatePriceProduct(currentCarrencyProduct[0]));
  }, [dispatch, selectedCurrency]);

  return (
    <div className={style.price}>
      {symbol} {amount}
    </div>
  );
};
export default PriceProduct;
