import { client } from "../../lib/client";
import { groq } from 'next-sanity'

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

export async function loadData(start, end) {
  const query = groq`{
    "posts": *[_type == "post"],
    "total": count(*[_type == "post"])
   }`;

  const { posts, total } = await client.fetch(query);

  return {
    posts,
    total,
  };
};
