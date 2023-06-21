import Link from "next/link";
import { urlFor } from "@/lib/client";
import styles from "./Post.module.scss";
import Image from "next/image";
import samplePost1 from "@/assets/samplepost1.svg";
import samplePost2 from "@/assets/samplepost2.svg";
import { IS_DEV } from "@/const";

const Post = ({ image, title, description, slug, publishedDate }) => {
  return (
    <div className={styles.post}>
      <div className={styles.card}>
        <Link
          href={`/post/${encodeURI(slug.current)}`}
          className={styles[`link-container`]}
        >
          <div className={styles.imgContainer}>
            <Image
              src={IS_DEV ? samplePost1 : urlFor(image).url()}
              alt={image.caption}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
              }}
              priority={true}
            />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.postTitle}>{title}</p>
            <p className={styles.dates}>{publishedDate}</p>
            <p className={styles.desc}>{description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
