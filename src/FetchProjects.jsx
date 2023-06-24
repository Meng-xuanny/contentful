import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "soosdmrgk41w",
  environment: "master", // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});

const FetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await client.getEntries({ content_type: "projects" });

      const projects = res.items.map((item) => {
        const { title, url, image } = item.fields;
        const { id } = item.sys;
        const img = image?.fields?.file?.url;

        return { title, url, id, img };
      });
      setIsLoading(false);
      setProjects(projects);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { projects, isLoading };
};

export default FetchProjects;
