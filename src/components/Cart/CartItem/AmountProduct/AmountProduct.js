import style from "./AmountProduct.module.css";

const AmountProduct = ({ setAmountProduct, amountProduct }) => {
  return (
    <div className={style.container}>
      <button
        id={style.incrementBtb}
        onClick={() => {
          setAmountProduct(amountProduct + 1);
        }}
      >
        +
      </button>
      <p>{amountProduct}</p>
      <button
        onClick={() => {
          if (amountProduct > 1) {
            setAmountProduct(amountProduct - 1);
          }
          return;
        }}
      >
        -
      </button>
    </div>
  );
};
export default AmountProduct;
