import styles from "./Portofolio.module.scss";
import Image from "next/image";
import { SiOnlyoffice } from "react-icons/si";
import { IconContext } from "react-icons";

const Portofolio = ({ children }) => {
  return (
    <div className={styles.portofolio} id="porto">
      <h1 className={styles.title}>Portofolio</h1>
      {children}
      <div className={styles.more}>
        <IconContext.Provider value={{ className: styles.moreIcon }}>
          <SiOnlyoffice />
        </IconContext.Provider>
        <p>More Projects...</p>
      </div>
    </div>
  );
};

export default Portofolio;
