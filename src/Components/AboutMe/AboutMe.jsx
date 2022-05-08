import styles from "./AboutMe.module.scss";
import { DescriptionButton } from "./DescriptionButton/DescriptionButton";
import { EmailButton } from "./EmailButton/EmailButton";

export const AboutMe = ({ me }) => {
  // debugger;
  return (
    <div className={styles.me}>
      <div className={styles.imageWrapper}>
        <img
          src={me.avatar}
          width={190}
          height={190}
          className={styles.image}
          alt=""
        />
      </div>
      <div className={styles.heading}>
        <span>Vitrikush Ihor</span>
      </div>
      <EmailButton />
      <DescriptionButton description={me.description} />
    </div>
  );
};
