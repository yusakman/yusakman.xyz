import heroIcon from "@/assets/hero.svg";
import Image from "next/image";
import styles from "./Hero.module.scss";
import { Tooltip } from "@mui/material";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <p className={styles.heroTitle}>Hi, I'm Yusakman!</p>
        <p>Welcome to my library. </p>
        <p>
          I'm a <strong>blockchain</strong> and{" "}
          <strong>front-end developer.</strong>
        </p>
        <button className={styles.heroButton}>See My Porto</button>
      </div>
      <div className={styles.heroImage}>
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
      <button className={styles.heroButtonMobile}>See My Porto</button>
    </div>
  );
};

export default Hero;
