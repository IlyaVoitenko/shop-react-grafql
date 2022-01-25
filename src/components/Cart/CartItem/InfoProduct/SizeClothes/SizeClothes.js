import { useState } from "react";

const SizeClothes = ({ previousSizeClothes }) => {
  const sizeClothesArray = [{ size: "S" }, { size: "M" }];
  const [sizeClothes, setSizeClothes] = useState(previousSizeClothes);
  return sizeClothesArray.map((item, index) => {
    return (
      <button
        key={index}
        onClick={() => {
          setSizeClothes(item.size);
        }}
      >
        {item.size}
      </button>
    );
  });
};
export default SizeClothes;
