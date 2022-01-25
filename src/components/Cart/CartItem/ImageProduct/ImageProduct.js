import style from "./ImageProduct.module.css";

const ImageProduct = ({ name, gallery }) => {
  return (
    <div className={style.containerImageProduct}>
      <img src={gallery[0]} alt={name} className={style.imgProduct} />
    </div>
  );
};
export default ImageProduct;
