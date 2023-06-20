import Head from "next/head";
import Article from "@/components/Article";
import Post from "@/components/Post";
import Header from "@/components/Header";
import FeaturedPost from "@/components/FeaturedPost";
import Image from "next/image";
import { loadPost, loadProject } from "./api/post";
import { useState, useEffect } from "react";
import styles from "@/styles/Page.module.scss";
import Hero from "@/components/Hero";
import Portofolio from "@/components/Portofolio";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const LOAD_MORE_STEP = 2;

export default function Home({
  initialPost,
  initialProject,
  totalPost,
  totalProject,
}) {
  const [posts, setPosts] = useState(initialPost);
  const [projects, setProjects] = useState(initialProject);

  console.log(`posts isinya`, posts)

  return (
    <div className={styles.page}>
      <Head>
        <title>Yusakman</title>
        <meta name="description" content="My personal blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <FeaturedPost>
        {posts.map((post) => (
          <Post key={post._id} {...post}></Post>
        ))}
      </FeaturedPost>
      <Portofolio>
        {projects.map((project) => (
          <Projects key={project._id} {...project}></Projects>
        ))}
      </Portofolio>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const { posts, totalPost } = await loadPost(1, LOAD_MORE_STEP);
  const { projects, totalProject } = await loadProject(0, 2);

  return {
    props: {
      initialPost: posts,
      initialProject: projects,
      totalPost,
      totalProject,
    },
  };
}
