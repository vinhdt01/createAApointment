import { useRef } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Container.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../menu/index";
import Slide from "../Slide/index";
import Schedule from "../Schedule/index";
import Content from "../Content/index";
import Footer from "../Footer/index";
import Specialization from "../Specializations/index";
function Container() {
  const myRef = useRef(null);
  const moveToSchedule = () => {
    myRef.current.scrollIntoView();
  };
  return (
    <div className={clsx(styles.wrapper)}>
      <Menu />
      <Slide />
      <Content />
      <div ref={myRef}>
        <Schedule />
      </div>
      <Link to="/chat">
        <FontAwesomeIcon
          icon={faCircleQuestion}
          className={clsx(styles.questionIcon)}
        />
      </Link>
      <FontAwesomeIcon
        icon={faCalendarCheck}
        className={clsx(styles.scheduleIcon)}
        onClick={moveToSchedule}
      />
      <Specialization />
      <Footer />
    </div>
  );
}

export default Container;
