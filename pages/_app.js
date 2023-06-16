import "@/styles/reset.scss";
import "@/styles/global.scss";
import styles from "@/styles/Theme.module.scss";
import { useState } from "react";
import useStore from "@/store/store";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const theme = useStore((state) => state.theme);

  return (
    <div className={styles[theme]}>
      <Component {...pageProps} />
    </div>
  );
}
