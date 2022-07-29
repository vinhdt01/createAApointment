import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import { formatRelative } from "date-fns";
import clsx from "clsx";
import jwt_decode from "jwt-decode";

import styles from "./Message.module.scss";
function Message({ handleChangeLastMsg, cookie }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  console.log(messages);
  handleChangeLastMsg(messages);
  function formatDate(seconds) {
    let formattedDate = "";

    if (seconds) {
      formattedDate = formatRelative(new Date(seconds * 1000), new Date());

      formattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }

    return formattedDate;
  }
  console.log(jwt_decode(cookie));
  return (
    <div className={styles.container}>
      {messages.map((value) => (
        <div
          className={clsx(styles.containerItem, {
            [styles.containerItemMe]: value.name === jwt_decode(cookie).id,
          })}
        >
          <img
            className={clsx(styles.avatarMessage)}
            src="https://media.viezone.vn/prod/2021/10/23/large_whynotchao_246342056_275337984474361_4703727801110834922_n_61bfb6a899.jpg"
            alt="avatar"
          />

          <div className={styles.contentContainer} key={value.text}>
            <p>{value.name}</p>
            <p>{value.text}</p>

            <p>{formatDate(value.createAt?.seconds)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Message;
