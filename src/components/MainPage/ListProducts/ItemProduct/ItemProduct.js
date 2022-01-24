import React from "react";
import style from "./ItemProduct.module.css";
import PriceProduct from "./PriceProduct";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDescriptionProduct } from "../../../../store/actionCreaters";

const ItemProduct = ({ product }) => {
  const dispatch = useDispatch();
  const { name, gallery, prices } = product;
  return (
    <Link
      to="/description-product"
      onClick={() => dispatch(updateDescriptionProduct(product))}
    >
      <div className={style.container}>
        <img src={gallery[0]} alt="" className={style.imgProduct} />
        <div className={style.btnBasketContainer}>
          <button className={style.btnBasket}>
            <img
              src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
              alt=""
              className={style.imgBasket}
            />
          </button>
        </div>
        <div className={style.nameProduct}>{name}</div>
        <PriceProduct prices={prices} />
      </div>
    </Link>
  );
};
export default ItemProduct;
