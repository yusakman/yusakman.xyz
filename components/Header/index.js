import Image from "next/image";
import headerIcon from "../../assets/Swap.svg";
import switchThemeIcon from "../../assets/Switch.svg";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import styles from "../Header/Header.module.scss";
import Link from "next/link";
import useStore from "@/store/store";
import { useEffect } from "react";
import { useState } from "react";
import themeColor from "@/styles/Theme.module.scss";

const nav = [
  {
    name: "Porto",
    url: "/#Porto",
  },
  {
    name: "Blog",
    url: "/#Blog",
  },
];

const Header = () => {
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);

  const handleTheme = () => {
    if (theme === `dark`) {
      console.log(`set theme to light`);
      setTheme(`light`);
    }

    if (theme === `light`) {
      console.log(`set theme to dark`);
      setTheme(`dark`);
    }
  };

  return (
    <div className={`${styles[`header`]} ${styles[theme]}`}>
      <div className={styles[`header-left`]}>
        <Link href={`/`} className={styles[`header-icon`]}>
          <Image src={headerIcon} alt="header-icon" />
          <p>Yusakman.xyz</p>
        </Link>

        <div className={styles[`header-nav`]}>
          {nav.map((nav) => (
            <Link href={nav.url} className={styles[`header-link`]}>
              {nav.name}
            </Link>
          ))}
          <Link href={`https://github.com/yusakman`} target="_blank">
            Github{" "}
            <span>
              <BsFillArrowUpRightSquareFill />
            </span>
          </Link>
        </div>
      </div>

      <div className={styles[`header-right`]} onClick={() => handleTheme()}>
        <Image src={switchThemeIcon} alt="switch-icon" />
      </div>
    </div>
  );
};

export default Header;
