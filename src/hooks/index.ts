import axios from "axios";
import { useEffect, useState } from "react";

interface Blog {
  title: string;
  content: string;
  id: string;
  authorName: string;
}
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8787/api/v1/blog/bulk`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setBlogs(response.data.blogs);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return {
    loading,
    blogs,
  };
};
