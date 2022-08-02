import images from "../../../src/assets/images/index";
import clsx from "clsx";
import styles from "./NotFound.module.scss";
function NotFound() {
  return (
    <img src={images.notfound} alt="not found" className={clsx(styles.img)} />
  );
}

export default NotFound;
