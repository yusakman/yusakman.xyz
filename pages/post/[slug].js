import Image from "next/image";
import { client, urlFor } from "@/lib/client";

const Post = ({ post }) => {
  console.log("Post", post);
  return (
    <div className="blog-post">
      <Image
        src={urlFor(post.image).url()}
        alt={post.image.caption}
        width={300}
        height={100}
      />
      <p>{post.title}</p>
      <p>{post.description}</p>
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
