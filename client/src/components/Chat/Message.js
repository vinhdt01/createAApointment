import { useState, useEffect, useRef } from "react";
import { db } from "../../firebase/firebase";
import { formatRelative } from "date-fns";
import clsx from "clsx";
import jwt_decode from "jwt-decode";

import styles from "./Message.module.scss";
function Message({ handleChangeLastMsg, cookie }) {
  const [messages, setMessages] = useState([]);
  const myRef = useRef(null);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  useEffect(() => {
    const scroll_to_bottom = myRef.current;
    scroll_to_bottom.scrollTop = scroll_to_bottom.scrollHeight;
  });
  useEffect(() => {
    handleChangeLastMsg(messages);
  });
  function formatDate(seconds) {
    let formattedDate = "";

    if (seconds) {
      formattedDate = formatRelative(new Date(seconds * 1000), new Date());

      formattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }

    return formattedDate;
  }
  return (
    <div ref={myRef} className={styles.container}>
      {messages.map((value, index) => (
        <div
          className={
            value.name === jwt_decode(cookie).id
              ? clsx(styles.total)
              : clsx(styles.totals)
          }
          key={index}
        >
          <div className={clsx(styles.containerItem)}>
            <img
              className={clsx(styles.avatarMessage)}
              alt="avatar"
              src="https://media.viezone.vn/prod/2021/10/23/large_whynotchao_246342056_275337984474361_4703727801110834922_n_61bfb6a899.jpg"
            />
            <div className={clsx(styles.containerContent)}>
              <p>{value.name}</p>
              <p>{value.text}</p>
              <p>{formatDate(value.createAt?.seconds)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Message;
