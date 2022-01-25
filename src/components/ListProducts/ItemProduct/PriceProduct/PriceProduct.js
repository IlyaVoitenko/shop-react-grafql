import { useSelector } from "react-redux";
import { getSelectedCurrency } from "../../../Header/Currencies/selectors";
import style from "./PriceProduct.module.css";

const PriceProduct = ({ prices }) => {
  const selectedCurrency = useSelector(getSelectedCurrency);
  const currentCarrencyProduct = prices.filter(
    (price) => price.currency.label === selectedCurrency
  );
  const { amount } = currentCarrencyProduct[0];
  const { symbol } = currentCarrencyProduct[0].currency;

  return (
    <div className={style.price}>
      {symbol} {parseInt(amount)}
    </div>
  );
};
export default PriceProduct;
