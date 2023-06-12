import styles from "./Footer.module.scss";
import iconGit from "@/assets/GithubLogo.svg";
import twitterGit from "@/assets/TwitterLogo.svg";
import Link from "next/link";
import Image from "next/image";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.text}>
        You can contact me by email at{" "}
        <span className={styles.email}>yusakmanullang93</span> at{" "}
        <span className={styles.email}>gmail.com</span> to say hi! I’m open to
        any questions, collaborations, or else.
      </p>
      <div className={styles.icons}>
        <Link href={`https://twitter.com/yusak_man`} target="_blank">
          <IconContext.Provider value={{ className: styles.iconUrl }}>
            <AiFillTwitterCircle />
          </IconContext.Provider>
        </Link>
        <Link href={`https://github.com/yusakman`} target="_blank">
          <IconContext.Provider value={{ className: styles.iconUrl }}>
            <AiFillGithub />
          </IconContext.Provider>
        </Link>
      </div>
      <p className={styles.copyright}>Yusakman 2023</p>
    </div>
  );
};

export default Footer;
