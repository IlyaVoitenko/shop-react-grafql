import { useSelector } from "react-redux";
import { getPathMainImage } from "./selector";
import style from "./MainImage.module.css";

const MainImage = ({ starterPath }) => {
  const pathMainImage = useSelector(getPathMainImage);
  return (
    <div className={style.containerMainImg}>
      <img
        src={starterPath === "" ? pathMainImage : starterPath}
        alt=""
        className={style.mainImg}
      />
    </div>
  );
};
export default MainImage;
