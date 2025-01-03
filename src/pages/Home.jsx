/* eslint-disable react/prop-types */
import { Link } from "react-router";
import BlogCard from "../components/BlogCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Loading from "../components/Loading";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Home({ homePage, blogPosts, loadingHome }) {
  const supportRef = useRef();
  const containerRef = useRef();
  useGSAP(
    () => {
      gsap.from(supportRef.current, {
        scrollTrigger: { trigger: supportRef.current },
        opacity: 0,
        duration: 3,
      });
    },
    { scope: containerRef, dependencies: [homePage] },
  );
  return loadingHome ? (
    <Loading />
  ) : (
    <div ref={containerRef} className="flex-1 bg-backgroundColor">
      <section className="flex flex-col items-center justify-center gap-6 bg-primaryColor p-12 sm:p-16 md:p-28 lg:flex-row lg:gap-24">
        <div className="flex w-full flex-col justify-center gap-3 self-end lg:w-1/3 lg:gap-8">
          <h2 className="text-lg font-bold text-secondaryColor md:text-2xl lg:text-3xl 2xl:text-4xl">
            {homePage?.hero?.title}
          </h2>
          <h3 className="text-base text-secondaryColor md:text-xl lg:text-2xl 2xl:text-3xl">
            {homePage?.hero?.body}
          </h3>
        </div>
        <div className="flex flex-col justify-center gap-4 lg:w-1/3">
          {homePage?.hero?.ctas?.map((cta, index) => {
            return (
              <Link
                to={cta.url}
                key={index}
                className="rounded-xl bg-secondaryColor px-4 py-2 text-center text-sm font-bold text-primaryColor shadow-md transition-all hover:bg-hoverColor hover:text-secondaryColor hover:shadow-lg focus:bg-hoverColor focus:text-secondaryColor focus:shadow-none md:py-3 md:text-base lg:rounded-3xl lg:px-5 xl:px-8 xl:py-4 xl:text-lg 2xl:px-10 2xl:py-5 2xl:text-xl"
              >
                {cta.text}
              </Link>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col items-center py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 2xl:py-40">
        <h2 className="mb-3 text-lg font-bold text-primaryColor md:mb-5 md:text-2xl lg:mb-8 lg:text-3xl xl:mb-10 2xl:mb-12 2xl:text-4xl">
          {homePage?.definition?.title}
        </h2>
        {homePage?.definition?.paragraphs?.map((paragraph, index) => {
          return (
            <p
              key={index}
              className="mb-2 w-5/6 text-sm md:mb-3 md:w-2/3 md:text-base lg:mb-5 lg:w-1/2 lg:text-lg xl:mb-7 2xl:mb-10 2xl:text-xl"
            >
              {paragraph.paragraph}
            </p>
          );
        })}
      </section>
      <section
        ref={supportRef}
        className="flex flex-col items-center bg-white py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 2xl:py-40"
      >
        <h2 className="mb-3 text-lg font-bold text-primaryColor md:mb-5 md:text-2xl lg:mb-8 lg:text-3xl xl:mb-10 2xl:mb-12 2xl:text-4xl">
          {homePage?.support?.title}
        </h2>
        {homePage?.support?.paragraphs?.map((paragraph, index) => {
          return (
            <p
              key={index}
              className="mb-2 w-5/6 text-sm md:mb-3 md:w-2/3 md:text-base lg:mb-5 lg:w-1/2 lg:text-lg xl:mb-7 2xl:mb-10 2xl:text-xl"
            >
              {paragraph.paragraph}
            </p>
          );
        })}
      </section>
      <section className="flex w-full flex-wrap justify-evenly gap-6 p-4 md:gap-8 md:p-6 lg:gap-12 lg:p-8 xl:gap-16 xl:p-10 2xl:gap-20 2xl:p-12">
        {blogPosts?.slice(-4).map((blog, index) => {
          return <BlogCard blog={blog} index={index} key={index} length={4} />;
        })}
      </section>
    </div>
  );
}
