import { useDispatch } from "react-redux";
import { updateSizeClothes } from "../../../../store/actionCreaters";
import style from "./ListSizeClothes.module.css";
const ListSizeClothes = () => {
  const dispatch = useDispatch();
  const sizeClothes = [
    { size: "XS" },
    { size: "S" },
    { size: "W" },
    { size: "L" },
  ];
  return sizeClothes.map((size, index) => {
    return (
      <button
        className={style.btnSizeClothes}
        key={index}
        onClick={() => {
          dispatch(updateSizeClothes(size.size));
        }}
      >
        {size.size}
      </button>
    );
  });
};
export default ListSizeClothes;
