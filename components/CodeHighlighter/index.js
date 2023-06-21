import { Highlight, themes } from "prism-react-renderer";
import { AiFillCopy } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { IconContext } from "react-icons";
import useStore from "@/store/store";
import { useState } from "react";
import styles from "./Styles.module.scss";

const CodeHighlighter = ({ code, filename }) => {
  const theme = useStore((state) => state.theme);
  const [copied, setCopied] = useState(false);

  const copyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
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

export default CodeHighlighter;
