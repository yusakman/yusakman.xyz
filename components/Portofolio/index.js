import styles from "./Portofolio.module.scss";

const Portofolio = ({ children }) => {
  return <div className={styles.portofolio}>{children}</div>;
};

export default Portofolio;
