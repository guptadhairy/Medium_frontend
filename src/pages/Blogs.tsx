import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      <div>
        <Appbar />
      </div>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} 
          title={blog.title}
          content={blog.content}
          authorName={blog.authorName || "Anonymous" }
          publishedDate="9th April"
        />
      ))}
    </div>
  );
};

export default Blogs;
