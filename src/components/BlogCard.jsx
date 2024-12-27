/* eslint-disable react/prop-types */
export default function BlogCard({ blog, index }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-3xl bg-cardColor p-6 md:gap-5 md:p-8 lg:flex-row lg:gap-8 lg:p-12 xl:gap-10 xl:p-16 2xl:gap-16 2xl:p-24">
      <div className={`lg:w-1/3 ${index % 2 !== 0 && "lg:hidden"}`}>
        <h3 className="text-center text-base font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
          {blog.title}
        </h3>
        <h4 className="rounded-3xl p-4 text-sm md:p-6 md:text-base lg:p-8 lg:text-lg xl:p-10 xl:text-xl 2xl:p-12 2xl:text-2xl">
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
        <h4 className="rounded-3xl p-4 text-sm md:p-6 md:text-base lg:p-8 lg:text-lg xl:p-10 xl:text-xl 2xl:p-12 2xl:text-2xl">
          {blog.tagline}
        </h4>
      </div>
    </div>
  );
}
