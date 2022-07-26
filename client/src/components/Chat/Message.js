import clsx from "clsx";
import styles from "./Message.module.scss";
function Message({ text, name, createAt }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerItem}>
        <img
          className={clsx(styles.avatarMessage)}
          src="https://media.viezone.vn/prod/2021/10/23/large_whynotchao_246342056_275337984474361_4703727801110834922_n_61bfb6a899.jpg"
          alt="avatar"
        />
        <div className={styles.contentContainer}>
          <p>Name</p>
          <p>Helllo</p>
          <p>0:30 p.m</p>
        </div>
      </div>
      <div className={styles.containerItem}>
        <img
          className={clsx(styles.avatarMessage)}
          src="https://media.viezone.vn/prod/2021/10/23/large_whynotchao_246342056_275337984474361_4703727801110834922_n_61bfb6a899.jpg"
          alt="avatar"
        />
        <div className={styles.contentContainer}>
          <p>Name</p>
          <p>Helllo</p>
          <p>12:30 p.m</p>
        </div>
      </div>
      <div className={styles.containerItem}>
        <img
          className={clsx(styles.avatarMessage)}
          src="https://media.viezone.vn/prod/2021/10/23/large_whynotchao_246342056_275337984474361_4703727801110834922_n_61bfb6a899.jpg"
          alt="avatar"
        />
        <div className={styles.contentContainer}>
          <p>Name</p>
          <p>Helllo</p>
          <p>12:30 p.m</p>
        </div>
      </div>{" "}
      <div className={styles.containerItem}>
        <img
          className={clsx(styles.avatarMessage)}
          src="https://media.viezone.vn/prod/2021/10/23/large_whynotchao_246342056_275337984474361_4703727801110834922_n_61bfb6a899.jpg"
          alt="avatar"
        />
        <div className={styles.contentContainer}>
          <p>Name</p>
          <p>Helllo</p>
          <p>12:30 p.m</p>
        </div>
      </div>{" "}
      <div className={styles.containerItem}>
        <img
          className={clsx(styles.avatarMessage)}
          src="https://media.viezone.vn/prod/2021/10/23/large_whynotchao_246342056_275337984474361_4703727801110834922_n_61bfb6a899.jpg"
          alt="avatar"
        />
        <div className={styles.contentContainer}>
          <p>Name</p>
          <p>Helllo</p>
          <p>12:30 p.m</p>
        </div>
      </div>{" "}
      <div className={styles.containerItem}>
        <img
          className={clsx(styles.avatarMessage)}
          src="https://media.viezone.vn/prod/2021/10/23/large_whynotchao_246342056_275337984474361_4703727801110834922_n_61bfb6a899.jpg"
          alt="avatar"
        />
        <div className={styles.contentContainer}>
          <p>Name</p>
          <p>Helllo</p>
          <p>12:30 p.m</p>
        </div>
      </div>
      <div className={styles.containerItem}>
        <img
          className={clsx(styles.avatarMessage)}
          src="https://media.viezone.vn/prod/2021/10/23/large_whynotchao_246342056_275337984474361_4703727801110834922_n_61bfb6a899.jpg"
          alt="avatar"
        />
        <div className={styles.contentContainer}>
          <p>Name</p>
          <p>Helllo</p>
          <p>12:30 p.m</p>
        </div>
      </div>{" "}
      <div className={styles.containerItem}>
        <img
          className={clsx(styles.avatarMessage)}
          src="https://media.viezone.vn/prod/2021/10/23/large_whynotchao_246342056_275337984474361_4703727801110834922_n_61bfb6a899.jpg"
          alt="avatar"
        />
        <div className={styles.contentContainer}>
          <p>Name</p>
          <p>Helllo</p>
          <p>12:30 p.m</p>
        </div>
      </div>{" "}
      <div className={styles.containerItem}>
        <img
          className={clsx(styles.avatarMessage)}
          src="https://media.viezone.vn/prod/2021/10/23/large_whynotchao_246342056_275337984474361_4703727801110834922_n_61bfb6a899.jpg"
          alt="avatar"
        />
        <div className={styles.contentContainer}>
          <p>Name</p>
          <p>Helllo</p>
          <p>12:30 p.m</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
