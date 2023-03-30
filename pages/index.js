import Head from "next/head";
import Image from "next/image";
import {loadData} from "./api/post"

const LOAD_MORE_STEP = 4;

export default function Home({ initialPost, total }) {
  console.log("initialPost", initialPost)
  console.log("total", total)
  return (
    <>
      <Head>
        <title>Yusakman</title>
        <meta name="description" content="My personal blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>My Blog</h1>
    </>
  );
}

export async function getServerSideProps() {
  const { posts, total } = await loadData(0, LOAD_MORE_STEP);
  return {
    props: {
      initialPost: posts,
      total
    },
  };
}
