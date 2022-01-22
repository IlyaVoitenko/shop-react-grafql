import { Link } from "react-router-dom";
import style from "./btnsCategories.module.css";

const BtnsCategories = () => {
  const categories = ["MEN", "WOMEN", "KIDS"];
  return categories.map((categorie, index) => {
    return (
      <Link to="/" key={index}>
        <button className={style.btnCategories}>{categorie}</button>
      </Link>
    );
  });
};
export default BtnsCategories;
