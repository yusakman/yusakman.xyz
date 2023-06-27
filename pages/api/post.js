import { client } from "../../lib/client";
import { IS_DEV } from "@/const";
import data from "@/const/data/data.json";
import dataProject from "@/const/data/dataProject.json";

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

export async function loadPost(start, end) {
  if (IS_DEV) {
    const posts = data;
    const totalPost = 2;

    return {
      posts,
      totalPost,
    };
  } else {
    const query = `{
      "posts": *[_type == "post"] | order(publishedDate desc) [${start}...${end}] 
      {_id, publishedDate, title, slug, description, image},
      "totalPost": count(*[_type == "post"])
     }`;

    const { posts, totalPost } = await client.fetch(query);

    return {
      posts,
      totalPost,
    };
  }
}

export async function loadProject(start, end) {
  if (IS_DEV) {
    const projects = dataProject;
    const totalProject = 2;

    return {
      projects,
      totalProject,
    };
  } else {
    const query = `{
      "projects": *[_type == "project"] | order(publishedDate asc) [${start}...${end}] 
      {_id, publishedDate, title, slug, description, image, webUrl, githubUrl},
      "totalProject": count(*[_type == "project"])
     }`;

    const { projects, totalProject } = await client.fetch(query);

    return {
      projects,
      totalProject,
    };
  }
}
