import styles from "./Link.module.scss";
import { LinkItem } from "./LinkItem";

export const Link = ({ links }) => {
  return (
    <div className={styles.grid}>
      {links.map((link) => (
        <LinkItem key={link._id} item={link} />
      ))}
    </div>
  );
};
