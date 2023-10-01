import { ImageDisplayProps } from "@component/types/ImageDisplay";
import style from "./ImageDisplay.module.scss";

const ImageDisplay: React.FC<ImageDisplayProps> = ({ link }) => {
  return (
    <img className={style.product__image} src={link} alt="Product image" />
  );
};

export default ImageDisplay;
