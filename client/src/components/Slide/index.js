import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
function Slide() {
  const [numberNext, setnumberNext] = useState(0);
  const data = [
    "https://vinmec-prod.s3.amazonaws.com/images/vicaread/20210602_120205_960094_ai-0.jpeg",
    "https://vinmec-prod.s3.amazonaws.com/images/vicaread/20210602_115921_943199_ICon.jpeg",
    "https://vinmec-prod.s3.amazonaws.com/images/vicaread/20210602_115652_716747_Bweb_Tim.ori.jpg",
  ];

  useEffect(() => {
    const timOutId = setTimeout(() => {
      if (numberNext < data.length - 1) {
        setnumberNext((prev) => prev + 1);
      } else {
        setnumberNext((prev) => (prev = 0));
      }
    }, 2000);
    return () => {
      clearTimeout(timOutId);
    };
  }, [numberNext, data.length]);
  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.container)}>
        <img alt="logo" className={styles.img} src={data[numberNext]} />
      </div>
    </div>
  );
}
export default Slide;
