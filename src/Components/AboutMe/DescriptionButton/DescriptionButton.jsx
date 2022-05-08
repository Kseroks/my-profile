import cn from "classnames";
import parse from "html-react-parser";
import { useOutside } from "../../../Assets/useOutside";
import styles from "./DescriptionButton.module.scss";

export const DescriptionButton = ({ description }) => {
  const { isShow, setIsShow, ref } = useOutside(false);

  return (
    <div className={styles.parent} ref={ref}>
      <button
        onClick={() => setIsShow(!isShow)}
        className={cn({
          [styles.active]: isShow,
        })}
      >
        <span>About Me</span>
      </button>
      {isShow && <article>{parse(description)}</article>}
    </div>
  );
};
