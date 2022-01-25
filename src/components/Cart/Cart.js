import { useSelector } from "react-redux";
import { getListCart } from "./selectors";
import style from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const listCart = useSelector(getListCart);
  console.log("listCart :", listCart);
  return (
    <div>
      <h1 id={style.title}>CART</h1>
      {listCart.map((cart) => {
        return (
          <CartItem
            key={cart.product.id}
            cart={cart.product}
            size={cart.sizeClothes}
          />
        );
      })}
    </div>
  );
};
export default Cart;
