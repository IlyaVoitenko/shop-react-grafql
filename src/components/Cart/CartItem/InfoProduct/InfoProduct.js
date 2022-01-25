import style from "./InfoProduct.module.css";
import SizeClothes from "./SizeClothes";

const InfoProduct = ({ amountProduct, cart, amount, symbol, size }) => {
  const { brand, name, category } = cart;
  return (
    <div className={style.container}>
      <hr />
      <p>{brand}</p>
      <p>{name}</p>
      <p>
        {symbol} {parseInt(amount * amountProduct)}
      </p>
      {category === "clothes" ? (
        <SizeClothes previousSizeClothes={size} />
      ) : null}
    </div>
  );
};
export default InfoProduct;
