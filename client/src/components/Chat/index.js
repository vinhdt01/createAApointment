import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./Chat.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChatWindow from "./ChatWindow";
function Chat() {
  const [lastMsg, setLastMsg] = useState("");
  const navigate = useNavigate();
  function getCookie(name) {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [k, v] = el.split("=");
      cookie[k.trim()] = v;
    });
    return cookie[name];
  }

  var refreshToken = getCookie("refreshToken");
  useEffect(() => {
    if (!refreshToken) {
      navigate("/login");
    }
  }, []);

  const handleChangeLastMsg = (value) => {
    setLastMsg(value[value.length - 1]?.text);
  };

  return (
    <Container fluid className={clsx(styles.wrapper)}>
      <Row>
        <Col xl={3} className={clsx(styles.container1)}>
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
                <div className={clsx(styles.briefMessage)}>{lastMsg}</div>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={9}>
          <ChatWindow
            handleChangeLastMsg={handleChangeLastMsg}
            cookie={refreshToken}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
