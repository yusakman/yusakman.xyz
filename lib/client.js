import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID_SANITY,
  dataset: "production",
  useCdn: true,
};

export const client = createClient({
  ...sanityConfig,
  apiVersion: "2023-06-07",
  token: process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  const result = builder.image(source);
  return result;
};
