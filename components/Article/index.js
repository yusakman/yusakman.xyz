import { useNextSanityImage } from "next-sanity-image";
import { PortableText } from "@portabletext/react";
import { sanityConfig } from "@/lib/client";
import { urlFor } from "@/lib/client";
import Image from "next/image";
import styles from "./Article.module.scss";
import { Highlight, themes } from "prism-react-renderer";
import { AiFillCopy } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { IconContext } from "react-icons";
import useStore from "@/store/store";
import { useState } from "react";

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

const CodeHighlighter = ({ code, filename }) => {
  const theme = useStore((state) => state.theme);
  const [copied, setCopied] = useState(false);

  const copyCode = (text) => {
    console.log(`copy code`, text);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Highlight code={code} language={`js`}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <div className={styles[`code-highlight`]}>
          <pre className={styles[`pre-highlight`]}>
            <div>
              <p className={styles[theme]}>
                // {filename}
                <span onClick={() => copyCode(code)}>
                  {copied ? (
                    <IconContext.Provider
                      value={{ className: styles[`icon-url`] }}
                    >
                      <BsCheckLg />
                    </IconContext.Provider>
                  ) : (
                    <IconContext.Provider
                      value={{ className: styles[`icon-url`] }}
                    >
                      <AiFillCopy />
                    </IconContext.Provider>
                  )}
                </span>
              </p>
            </div>

            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />;
    },
    code: ({ value }) => {
      return <CodeHighlighter {...value} />;
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
