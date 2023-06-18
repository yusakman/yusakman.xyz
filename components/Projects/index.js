import Image from "next/image";
import img from "../../assets/project1.svg";
import styles from "./Projects.module.scss";
import iconGlobe from "../../assets/GlobeSimple.svg";
import iconGit from "../../assets/GithubLogo.svg";
import Link from "next/link";
import { IS_DEV } from "@/const";
import { urlFor } from "@/lib/client";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import {TbWorld} from "react-icons/tb"
import { IconContext } from "react-icons";

const Projects = ({ image, title, description, slug, webUrl, githubUrl }) => {
  return (
    <div className={styles.projects}>
      <div className={styles.card}>
        <Link
          href={`/project/${encodeURI(slug.current)}`}
          className={styles.top}
        >
          <div className={styles.imgContainer}>
            <Image
              src={IS_DEV ? img : urlFor(image).url()}
              alt={image.caption}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </Link>
        <div className={styles.bottom}>
          <div className={styles[`project-title`]}>
            <Link href={`/project/${encodeURI(slug.current)}`}>
              <p>{title}</p>
            </Link>
            {/* <Link href={webUrl} target="_blank" className={styles.iconUrl}>
              <Image src={iconGlobe} alt="icon-globe" />
            </Link> */}
            <Link href={webUrl} target="_blank">
              <IconContext.Provider value={{ className: styles.iconUrl }}>
                <TbWorld />
              </IconContext.Provider>
            </Link>
            {/* <Link href={githubUrl} target="_blank" className={styles.iconUrl}>
              <Image src={iconGit} alt="icon-git" />
            </Link> */}
            <Link href={githubUrl} target="_blank">
              <IconContext.Provider value={{ className: styles.iconUrl }}>
                <AiFillGithub />
              </IconContext.Provider>
            </Link>
          </div>
          <div className={styles[`project-desc`]}>
            <Link href={`/project/${encodeURI(slug.current)}`}>
              <p>{description}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
