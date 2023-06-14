import Image from "next/image";
import { urlFor } from "@/lib/client";
import styles from "./Article.module.scss";

const Article = ({ image, title, description }) => {
  return (
    <div className={styles.article}>
      <p className={styles.title}>{title}</p>
      <div className={styles[`image-container`]}>
        <Image
          src={urlFor(image).url()}
          alt={image.caption}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Article;
