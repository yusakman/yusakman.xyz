import "@/styles/reset.scss";
import "@/styles/global.scss";
import styles from "@/styles/Theme.module.scss";
import useStore from "@/store/store";

export default function App({ Component, pageProps }) {
  const theme = useStore((state) => state.theme);

  return (
    <div className={styles[theme]}>
      <Component {...pageProps} />
    </div>
  );
}
