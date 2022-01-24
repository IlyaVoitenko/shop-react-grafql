import { useDispatch } from "react-redux";
import { updateSizeClothes } from "../../../../store/actionCreaters";

const ListSizeClothes = ({ sizeClothes }) => {
  const dispatch = useDispatch();
  return sizeClothes.map((size, index) => {
    return (
      <button
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
