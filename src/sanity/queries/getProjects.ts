import { client } from "../lib/client";

export const getProjects = async () => {
  const query = `*[_type == "project"] | order(name asc)`;

  try {
    const projects = await client.fetch(query);
    return projects || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
