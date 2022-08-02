import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import clsx from "clsx";
import styles from "./index.module.scss";
import ScheduleForMobile from "../ScheduleForMobile/index.js";
function MenuForMobile() {
  const Setref = useRef();
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();
  const handleDisplay = () => {
    var value = localStorage.getItem("token");
    if (value === null) {
      navigate("/login");
    } else {
      setHide(!hide);
    }
  };

  return (
    <div className={clsx(styles.total)} style={{ cursor: "pointer" }}>
      <ScheduleForMobile hide={hide} handleDisplay={handleDisplay} />
      <div className={clsx(styles.container)} onClick={() => handleDisplay()}>
        <div>
          <img
            src="https://www.vinmec.com/static/build/cbe6a520989f0a627e43430e550f4895.svg"
            className={clsx(styles.askDoctorIcon)}
            alt="logo"
          />
          <div ref={Setref}>Tạo Lịch Hẹn</div>
        </div>
      </div>
    </div>
  );
}
export default MenuForMobile;
