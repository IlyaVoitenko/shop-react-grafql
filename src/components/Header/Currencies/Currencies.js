import React from "react";
import { getListRates } from "./selectors";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrency } from "../../../store/actionCreaters";
import style from "./Currencies.module.css";

const Currencies = () => {
  const listRates = useSelector(getListRates);
  const dispatch = useDispatch();
  function getCurrency({ target }) {
    dispatch(updateCurrency(target.value));
  }
  return (
    <select
      className={style.listRates}
      onChange={({ target }) => getCurrency({ target })}
    >
      {listRates.map((rate, index) => {
        return (
          <option key={index} value={rate.label}>
            {rate.symbol} {rate.label}
          </option>
        );
      })}
    </select>
  );
};
export default Currencies;
