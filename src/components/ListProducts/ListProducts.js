import { getListProducts } from "../API/api";
import { useEffect } from "react";
import { getStateListProducts } from "./selectors";
import { useDispatch, useSelector } from "react-redux";
import ItemProduct from "./ItemProduct";

const ListProducts = () => {
  const dispatch = useDispatch();
  const listProducts = useSelector(getStateListProducts);
  useEffect(() => {
    dispatch(getListProducts());
  }, [dispatch]);
  return (
    <div>
      {listProducts.map((product) => {
        return <ItemProduct key={product.id} product={product} />;
      })}
    </div>
  );
};
export default ListProducts;
