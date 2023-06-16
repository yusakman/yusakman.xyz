import Image from "next/image";
import { client, urlFor } from "@/lib/client";
import styles from "@/styles/Page.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Article from "@/components/Article";

const Project = ({ project }) => {
  return (
    <div className={styles.page}>
      <Header />
      <Article {...project} />
      <Footer />
    </div>
  );
};

export default Project;

export async function getStaticPaths() {
  const query = `*[_type == "project"] {
        slug {
            current
        }
    }`;

  const projects = await client.fetch(query);
  const paths = projects.map((project) => ({
    params: {
      slug: project.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "project" && slug.current == '${slug}'][0]`;

  const project = await client.fetch(query);

  return {
    props: {
      project,
    },
  };
}
