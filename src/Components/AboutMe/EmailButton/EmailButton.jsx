import styles from "./EmailButton.module.scss";

export const EmailButton = () => {
  return (
    <div className={styles.button}>
      <a
        href="mailto:vitrikushihor0101@gmail.com"
        target="_blank"
        rel={"noreferrer"}
        title="vitrikushihor0101@gmail.com"
      >
        <span>
          <img
            src="https://img.icons8.com/color/344/filled-message.png"
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </span>
        <span>Email</span>
      </a>
    </div>
  );
};
