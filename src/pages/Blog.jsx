/* eslint-disable react/prop-types */
import BlogCard from "../components/BlogCard";

export default function Blog({blogPosts}) {
  return (
    <div className="flex-1 bg-backgroundColor">
      <section className="flex w-full flex-wrap justify-evenly gap-6 p-4 md:gap-8 md:p-6 lg:gap-12 lg:p-8 xl:gap-16 xl:p-10 2xl:gap-20 2xl:p-12">
        {blogPosts?.map((blog, index) => {
          return (
            <BlogCard
              blog={blog}
              index={index}
              key={index}
              length={blogPosts?.length}
            />
          );
        })}
      </section>
    </div>
  );
}
