import { useNextSanityImage } from "next-sanity-image";
import { PortableText } from "@portabletext/react";
import { sanityConfig } from "@/lib/client";
import { urlFor } from "@/lib/client";
import Image from "next/image";
import styles from "./ProjectDetail.module.scss";
import { AiFillGithub } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { IconContext } from "react-icons";
import Link from "next/link";

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

const ProjectDetail = ({ image, title, description, body, webUrl, githubUrl }) => {
  return (
    <div className={styles[`project-detail`]}>
      <p className={styles.title}>{title}</p>
      <div className={styles[`image-container`]}>
        <Image
          src={urlFor(image).url()}
          alt={image.caption}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
          quality={80}
        />
      </div>
      <div className={styles[`icon-container`]}>
        <Link href={webUrl} target="_blank">
          <IconContext.Provider value={{ className: styles.iconUrl }}>
            <TbWorld />
          </IconContext.Provider>
        </Link>
        <Link href={githubUrl} target="_blank">
          <IconContext.Provider value={{ className: styles.iconUrl }}>
            <AiFillGithub />
          </IconContext.Provider>
        </Link>
      </div>

      <p className={styles.description}>{description}</p>
      <div className={styles.content}>
        <PortableText value={body} components={myPortableTextComponents} />
      </div>
    </div>
  );
};

export default ProjectDetail;
