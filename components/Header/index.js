import Image from "next/image";
import headerIcon from "../../assets/Swap.svg";
import switchThemeIcon from "../../assets/Switch.svg";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import styles from "../Header/Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.headerIcon}>
            <Image src={headerIcon} alt="header-icon" />
            <p>Yusakman.xyz</p>
          </div>
          <div className={styles.headerNav}>
            <p>About</p>
            <p>Projects</p>
            <p>Blog</p>
            <p>
              Github{" "}
              <span>
                <BsFillArrowUpRightSquareFill />
              </span>
            </p>
          </div>
        </div>
        <div className={styles.headerRight}>
          <Image src={switchThemeIcon} alt="switch-icon" />
        </div>
      </div>
    </>
  );
};

export default Header;
