import style from "./Gallery.module.css";
import { useDispatch } from "react-redux";
import { updatePathMainImage } from "../../../../store/actionCreaters";

const Gallery = ({ gallery, setStarterPath }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.listLinksImg}>
      {gallery.map((img, index) => {
        return (
          <img
            key={index}
            src={img}
            alt=""
            className={style.imgs}
            onClick={() => {
              setStarterPath("");
              dispatch(updatePathMainImage(img));
            }}
          />
        );
      })}
    </div>
  );
};
export default Gallery;
