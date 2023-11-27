import heroIcon from "@/assets/hero.svg";
import heroBanner from "@/assets/CurrencyEth.png";
import Image from "next/image";
import styles from "./Hero.module.scss";
import { Tooltip } from "@mui/material";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles[`hero`]}>
      <div className={styles[`hero-text`]}>
        <p className={styles[`hero-title`]}>Hi, I'm Yusakman!</p>
        <p>Welcome to my library. </p>
        <p>
          I'm a <strong>Full Stack Blockchain Developer.</strong>
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
              }}
              priority={true}
            />
          </Tooltip>
        </>
      </div>

      <Link
        href={`/#porto`}
        scroll={false}
        className={styles[`hero-button-mobile`]}
      >
        <p>See My Porto</p>
      </Link>
    </div>
  );
};

export default Hero;
