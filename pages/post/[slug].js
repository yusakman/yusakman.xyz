import Image from "next/image";
import { client, urlFor } from "@/lib/client";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Article from "@/components/Article";

const Post = ({ post }) => {
  return (
    <div className={styles.dark}>
      <div className={styles.home}>
        <Header />
        <Article {...post} />
        <Footer />
      </div>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const query = `*[_type == "post"] {
        slug {
            current
        }
    }`;

  const posts = await client.fetch(query);
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;

  const post = await client.fetch(query);

  return {
    props: {
      post,
    },
  };
}
