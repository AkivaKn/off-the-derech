/* eslint-disable react/prop-types */
export default function BlogCard({ blog, index }) {
  return (
    <div className="w-full rounded-3xl bg-cardColor p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-24">
      <div className="flex w-full flex-col items-center justify-center gap-4 md:gap-5 lg:flex-row lg:gap-8 xl:gap-10 2xl:gap-16">
        <div className={`lg:w-1/3 ${index % 2 !== 0 && "lg:hidden"}`}>
          <h3 className="text-base font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
            {blog.title}
          </h3>
          <h4 className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {blog.tagline}
          </h4>
        </div>
        <p className="rounded-3xl bg-white p-4 text-xs md:p-6 md:text-sm lg:w-2/3 lg:p-8 lg:text-base xl:p-10 xl:text-lg 2xl:p-12 2xl:text-xl">
          {blog.bodyParagraphs[0]}
        </p>
        <div className={`hidden w-1/3 ${index % 2 !== 0 && "lg:block"}`}>
          <h3 className="text-center text-base font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
            {blog.title}
          </h3>
          <h4 className="p-4 text-sm md:p-6 md:text-base lg:p-8 lg:text-lg xl:p-10 xl:text-xl 2xl:p-12 2xl:text-2xl">
            {blog.tagline}
          </h4>
        </div>
      </div>
      <p className="mt-3 text-center text-xs md:mt-5 md:text-sm lg:mt-8 lg:text-base xl:mt-10 xl:text-lg 2xl:mt-12 2xl:text-xl">
        Posted by {blog.author}, {new Date(blog.postedAt).toLocaleDateString()}
      </p>
    </div>
  );
}
