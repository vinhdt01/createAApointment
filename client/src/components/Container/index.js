import clsx from "clsx";
import { useRef } from "react";
import styles from "./Container.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import Menu from "../menu/index";
import Slide from "../Slide/index";
import Schedule from "../Schedule/index";
import Content from "../Content/index";
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
      <FontAwesomeIcon
        icon={faCalendarCheck}
        className={clsx(styles.scheduleIcon)}
        onClick={moveToSchedule}
      />
    </div>
  );
}

export default Container;
