import clsx from "clsx";
import { Button } from "react-bootstrap";
import styles from "./ChatWindow.module.scss";
function ChatWindow() {
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
        <div>Hello</div>
      </div>
      <div className={styles.chatArea}>
        <input
          type="text"
          className={styles.text}
          placeholder="Enter your messages..."
        />
        <Button variant="primary" className={styles.btnText}>
          Send
        </Button>
      </div>
    </div>
  );
}

export default ChatWindow;
