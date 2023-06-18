import { useNextSanityImage } from "next-sanity-image";
import { PortableText } from "@portabletext/react";
import { sanityConfig } from "@/lib/client";
import { urlFor } from "@/lib/client";
import Image from "next/image";
import styles from "./Article.module.scss";

const SanityImage = ({ asset, caption, imageUrl }) => {
  const nextProps = useNextSanityImage(sanityConfig, asset);
  const imageProps = {
    loader: nextProps.loader,
    src: nextProps.src,
  };

  if (!imageProps) return null;

  if (nextProps.width > nextProps.height) {
    return (
      <div className={styles[`img-horizontal`]}>
        <Image
          {...imageProps}
          alt={caption}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    );
  } else {
    return (
      <div className={styles[`img-vertical`]}>
        <Image
          {...imageProps}
          alt={caption}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    );
  }
};

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />;
    },
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel} target="_blank">
          {children}
        </a>
      );
    },
  },
};

const Article = ({ image, title, description, body }) => {
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
      <div className={styles.content}>
        <PortableText value={body} components={myPortableTextComponents} />
      </div>
    </div>
  );
};

export default Article;
