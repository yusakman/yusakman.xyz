import styles from "./FeaturedPost.module.scss";
import Image from "next/image";
import samplePost1 from "../../assets/samplepost1.svg";
import samplePost2 from "../../assets/samplepost2.svg";
import { GiSecretBook } from "react-icons/gi";
import { IconContext } from "react-icons";

const FeaturedPost = ({ children }) => {
  return (
    <div className={styles.featuredPost}>
      <h1 className={styles.title}>Featured Posts</h1>
      {children}
      <div className={styles.more}>
        <IconContext.Provider value={{ className: styles.moreIcon }}>
          <GiSecretBook />
        </IconContext.Provider>
        <p>More Posts...</p>
      </div>
    </div>
  );
};

export default FeaturedPost;
