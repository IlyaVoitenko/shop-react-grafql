import React, { useEffect } from "react";
import axios from "axios";
import { getListRates } from "./selectors";
import { useDispatch, useSelector } from "react-redux";
import { updateListRates } from "../../store/actionCreaters";

const Header = () => {
  const urlBase = `http://localhost:4000/`;
  const dispatch = useDispatch();

  function getCurrencyRates() {
    axios({
      url: urlBase,
      method: "post",
      data: {
        query: `
              query data {
                currencies{
                  label,
                  symbol
                }
                }
                `,
      },
    }).then((result) => {
      return dispatch(updateListRates(result.data.data.currencies));
    });
  }
  useEffect(() => {
    getCurrencyRates();
  }, []);
  const listRates = useSelector(getListRates);
  const categories = ["MEN", "WOMEN", "KIDS"];
  console.log(listRates);
  return (
    <div>
      {categories.map((categorie, index) => {
        return <button key={index}>{categorie}</button>;
      })}
      <select>
        {listRates.map((rate, index) => {
          return (
            <option key={index} value={rate.label}>
              {rate.symbol} {rate.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Header;
