import { useSelector } from "react-redux";
import { getSelectedCurrency } from "../../Header/Currencies/selectors";
import style from "./CartItem.module.css";
import InfoProduct from "./InfoProduct";
import AmountProduct from "./AmountProduct";
import ImageProduct from "./ImageProduct";
import { useState } from "react";

const CartItem = ({ cart }) => {
  const selectedCurrency = useSelector(getSelectedCurrency);
  const [amountProduct, setAmountProduct] = useState(1);
  const { name, prices, gallery, size } = cart;
  console.log(cart);
  const priceProduct = prices.filter(
    (price) => price.currency.label === selectedCurrency
  );
  const { amount } = priceProduct[0];
  const { symbol } = priceProduct[0].currency;
  return (
    <div className={style.container}>
      <InfoProduct
        amountProduct={amountProduct}
        cart={cart}
        size={size}
        amount={amount}
        symbol={symbol}
      />
      <AmountProduct
        amountProduct={amountProduct}
        setAmountProduct={setAmountProduct}
      />
      <ImageProduct name={name} gallery={gallery} />
    </div>
  );
};
export default CartItem;
