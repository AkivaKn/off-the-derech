/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function BlogPost({blogPosts}) {
  const { blogId } = useParams();
  const [currentBlog, setCurrentBlog] = useState({});
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    const filteredBlogs = blogPosts.filter((blog) => blog.id == blogId);
    if (filteredBlogs.length === 0) {
      setNotFound(true);
    } else {
      setCurrentBlog(filteredBlogs[0]);
    }
  }, []);
  return (
    <>
      {notFound ? (
        <div className="flex flex-1 items-center justify-center bg-backgroundColor">
          <p className="text-center text-base md:text-xl lg:text-2xl 2xl:text-3xl">Blog not found</p>
        </div>
      ) : (
        <div className="flex-1 space-y-3 bg-backgroundColor p-6 md:space-y-4 md:p-8 lg:space-y-6 lg:p-12 xl:space-y-8 xl:p-16 2xl:p-20">
          <h2 className="text-center text-lg font-bold text-primaryColor md:text-2xl lg:text-3xl 2xl:text-4xl">
            {currentBlog?.title}
          </h2>
          <h3 className="text-center text-base md:text-xl lg:text-2xl 2xl:text-3xl">
            {currentBlog?.tagline}
          </h3>
          <p className="border-b-4 text-xs uppercase md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            {currentBlog?.author},{" "}
            {new Date(currentBlog?.posted).toLocaleDateString()}
          </p>
          {currentBlog?.paragraphs?.map((paragraph, index) => {
            return <p key={index} className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">{paragraph.paragraph}</p>;
          })}
        </div>
      )}
    </>
  );
}
