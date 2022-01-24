import { useSelector } from "react-redux";
import { getDescriptionProduct } from "./selectors";
import { getSelectedCurrency } from "../Header/Currencies/selectors";
import InfoProduct from "./InfoProduct";
import ImgsProduct from "./ImgsProduct";
import style from "./DescriptionProduct.module.css";

const DescriptionProduct = () => {
  const product = useSelector(getDescriptionProduct);
  const selectedCurrency = useSelector(getSelectedCurrency);
  const sizeClothes = [
    { size: "XS" },
    { size: "S" },
    { size: "W" },
    { size: "L" },
  ];
  const { prices, gallery } = product;
  const priceProduct = prices.filter(
    (price) => price.currency.label === selectedCurrency
  );
  const { amount } = priceProduct[0];
  const { symbol } = priceProduct[0].currency;
  return (
    <div className={style.container}>
      <ImgsProduct gallery={gallery} />
      <InfoProduct
        product={product}
        symbol={symbol}
        amount={amount}
        sizeClothes={sizeClothes}
      />
    </div>
  );
};
export default DescriptionProduct;
