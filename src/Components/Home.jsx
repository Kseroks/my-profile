import { Circles } from "./Circles/Circles";
import { AboutMe } from "./AboutMe/AboutMe";
import { Link } from "./Links/Link";

// import { links } from "../api/links";
// import { me } from "../api/me";

import styles from "./Home.module.scss";

export const Home = ({ me, links }) => {
  // export const Home = () => {

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <AboutMe me={me} />
        <Link links={links} />
      </div>
      <Circles />
    </section>
  );
};
