import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./index.module.css";
function NavMobile({
  changeLogin,
  changeLogout,
  removeHandle,
  hide,
  handleSchedule,
}) {
  return (
    <div className={clsx(styles.container, { [styles.hide]: hide })}>
      {changeLogin && (
        <Link
          to="login"
          style={{
            paddingTop: "4px",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            textDecoration: "none",
            color: "black",
          }}
        >
          ĐĂNG NHẬP
        </Link>
      )}

      {changeLogout && (
        <div
          style={{
            paddingTop: "4px",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            textDecoration: "none",
            color: "black",
            cursor: "pointer",
          }}
          onClick={removeHandle}
        >
          ĐĂNG XUẤT
        </div>
      )}
      <div
        style={{
          paddingTop: "4px",
          fontFamily: "Helvetica",
          fontWeight: "bold",
          textDecoration: "none",
          color: "black",
          cursor: "pointer",
        }}
        onClick={handleSchedule}
      >
        DANH SÁCH LỊCH HẸN
      </div>
    </div>
  );
}

export default NavMobile;
