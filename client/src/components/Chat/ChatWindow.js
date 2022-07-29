import { useState } from "react";
import { db } from "../../firebase/firebase";
import firebase from "firebase/compat/app";
import jwt_decode from "jwt-decode";
import clsx from "clsx";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ChatWindow.module.scss";
import Message from "./Message";
function ChatWindow() {
  function getCookie(name) {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [k, v] = el.split("=");
      cookie[k.trim()] = v;
    });
    return cookie[name];
  }
  const [msg, setMsg] = useState("");

  const cookie = getCookie("refreshToken");
  var decodedJwt = jwt_decode(cookie);
  console.log(decodedJwt);
  const sendMessage = async (e) => {
    e.preventDefault();
    if (decodedJwt) {
      if (msg) {
        await db.collection("messages").add({
          name: decodedJwt.id,
          text: msg,
          createAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMsg("");
      }
    }
  };
  return (
    <div className={clsx(styles.container)}>
      <div className={styles.header}>
        <div className={clsx(styles.headerItem)}>
          <img
            className={clsx(styles.avatar)}
            src="https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/xpckxpiu/2021_02_23/plo-1_qkis.jpg"
          />
          <span>Name</span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className={clsx(styles.iconHeader)}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={clsx(styles.iconHeader)}
          />
        </div>
      </div>
      <div>
        <Message />
      </div>
      <div className={styles.chatArea}>
        <form onSubmit={sendMessage}>
          <input
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
            type="text"
            className={styles.text}
            placeholder="Enter your messages..."
          />
          <Button variant="primary" className={styles.btnText} type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;
