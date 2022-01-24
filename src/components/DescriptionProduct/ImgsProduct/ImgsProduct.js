import style from "./ImgsProduct.module.css";
import { useState } from "react";
import Gallery from "./Gallery";
import MainImage from "./MainImage";

const ImgsProduct = ({ gallery }) => {
  const [starterPath, setStarterPath] = useState(gallery[0]);
  return (
    <div className={style.containerImgs}>
      <Gallery gallery={gallery} setStarterPath={setStarterPath} />
      <MainImage starterPath={starterPath} />
    </div>
  );
};
export default ImgsProduct;
