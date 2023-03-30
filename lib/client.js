import {createClient} from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "027xvjee",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-30",
  token: process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
