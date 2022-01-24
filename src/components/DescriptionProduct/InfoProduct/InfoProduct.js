import { useDispatch, useSelector } from "react-redux";
import style from "./InfoProduct.module.css";
import { updateListCart } from "../../../store/actionCreaters";
import { getSizeClothes } from "../selectors";
import ListSizeClothes from "./ListSizeClothes";

const InfoProduct = ({ symbol, amount, sizeClothes, product }) => {
  const { brand, category, description } = product;
  const dispatch = useDispatch();
  const selecterSizeClothes = useSelector(getSizeClothes);
  return (
    <div className={style.infoProduuct}>
      <h2>{brand}</h2>
      <h2>{category}</h2>
      <ListSizeClothes sizeClothes={sizeClothes} />
      <p>
        PRICE:
        <p>
          {symbol} {amount}
        </p>
      </p>
      <button
        onClick={() => {
          dispatch(
            updateListCart({
              sizeClothes: selecterSizeClothes,
              product: product,
            })
          );
        }}
        className={style.btnAddProductCart}
      >
        ADD TO CART
      </button>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
};
export default InfoProduct;