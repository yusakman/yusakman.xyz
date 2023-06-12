import Image from "next/image";
import img from "../../assets/project1.svg";
import styles from "./Projects.module.scss";
import iconGlobe from "../../assets/GlobeSimple.svg";
import iconGit from "../../assets/GithubLogo.svg";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { IconContext } from "react-icons";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <IconContext.Provider value={{ className: styles.arrow }}>
            <AiFillCaretLeft className={styles.arrow} />
          </IconContext.Provider>
          <div className={styles.imgContainer}>
            <Image
              src={img}
              alt="project-1"
              fill
              // sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <IconContext.Provider value={{ className: styles.arrow }}>
            <AiFillCaretRight />
          </IconContext.Provider>
        </div>

        <div className={styles.projectName}>
          <p>Knight Finace</p>
          <Image src={iconGlobe} alt="icon-globe" />
          <Image src={iconGit} alt="icon-git" />
        </div>
        <div className={styles.projectDesc}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a Read More.
          </p>
        </div>
      </div>
      <p className={styles.more}>More Projects...</p>
    </div>
  );
};

export default Projects;
