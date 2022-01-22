import React, { useEffect } from "react";
import BtnsCategories from "./btnsCategories";
import Currencies from "./Currencies";
import { Link } from "react-router-dom";
import { getCurrencyRates, getTypesCategories } from "../API/api";
import style from "./header.module.css";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrencyRates());
    dispatch(getTypesCategories());
  }, []);
  return (
    <div className={style.container}>
      <BtnsCategories />
      <Link to="/basket" className={style.basketLink}>
        <img src="https://img.icons8.com/fluency/48/000000/delete.png" alt="" />
      </Link>
      <Currencies />
      <a href=" " className={style.basket}>
        <img
          src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
          alt=""
          className={style.basketIcon}
        />
      </a>
    </div>
  );
};
export default Header;
