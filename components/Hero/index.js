import heroIcon from "@/assets/hero.svg";
import Image from "next/image";
import styles from "./Hero.module.scss";
import { Tooltip } from "@mui/material";
import Link from "next/link";

const Hero = () => {
  const handleClick = () => {
    console.log(`Handle Click`);
  };
  return (
    <div className={styles[`hero`]}>
      <div className={styles[`hero-text`]}>
        <p className={styles[`hero-title`]}>Hi, I'm Yusakman!</p>
        <p>Welcome to my library. </p>
        <p>
          I'm a <strong>blockchain</strong> and{" "}
          <strong>front-end developer.</strong>
        </p>
        <Link href={`/#porto`} scroll={false}>
          <button className={styles[`hero-button`]}>See My Porto</button>
        </Link>
      </div>
      <div className={styles[`hero-image`]}>
        <>
          <Tooltip title="Journey to the unknown">
            <Image
              src={heroIcon}
              alt="hero-icon"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </Tooltip>
        </>
      </div>

      <Link
        href={`/#porto`}
        scroll={false}
        onClick={handleClick}
        className={styles[`hero-button-mobile`]}
      >
        <p>See My Porto</p>
      </Link>
    </div>
  );
};

export default Hero;
