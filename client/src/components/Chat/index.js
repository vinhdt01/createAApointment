import { useState, useEffect } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import styles from "./Chat.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChatWindow from "./ChatWindow";
function Chat() {
  const [lastMsg, setLastMsg] = useState("");
  var navigate = useNavigate();
  function getCookie(name) {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [k, v] = el.split("=");
      cookie[k.trim()] = v;
    });
    return cookie[name];
  }
  const cookie = getCookie("refreshToken");
  useEffect(() => {
    if (!cookie) {
      navigate("/login");
    }
  }, []);
  const handleChangeLastMsg = (value) => {
    setLastMsg(value[value.length - 1]?.text);
    // console.log(value[value.length - 1].te);
  };
  console.log(lastMsg);
  return (
    <Container fluid className={clsx(styles.wrapper)}>
      <Row>
        <Col sm={3} className={clsx(styles.container1)}>
          <div className={clsx(styles.item1)}>
            <FontAwesomeIcon icon={faBars} className={clsx(styles.faBars)} />
            <input
              type="text"
              className={clsx(styles.searchContact)}
              placeholder="Search"
            />
          </div>
          <div className={clsx(styles.item2)}>
            <div className={clsx(styles.subItem2)}>
              <img
                src="https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/xpckxpiu/2021_02_23/plo-1_qkis.jpg"
                alt="logo"
                className={clsx(styles.avatar)}
              />
              <div className={clsx(styles.brief)}>
                <p className={clsx(styles.name)}>Bộ y tế</p>
                <p className={clsx(styles.briefMessage)}>{lastMsg}</p>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={9}>
          <ChatWindow
            cookie={cookie}
            handleChangeLastMsg={handleChangeLastMsg}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
