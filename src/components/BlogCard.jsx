import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

/* eslint-disable react/prop-types */
export default function BlogCard({ blog, index, length }) {
  const blogCardRef = useRef();
  function setOffScreen(el) {
    var rect = el.getBoundingClientRect();
    return screen.width - rect.left + el.offsetWidth / 2;
  }
  useGSAP(() => {
    let mediaQuery = window.matchMedia("(max-width:767px)");
    if (mediaQuery.matches) {
      index % 2 === 0 &&
        gsap.from(blogCardRef.current, {
          x: (i, t) => {
            return setOffScreen(t);
          },
          duration: 2,
          scrollTrigger: {
            trigger: blogCardRef.current,
          },
        });
      index % 2 !== 0 &&
        index % 8 !== 0 &&
        gsap.from(blogCardRef.current, {
          x: (i, t) => {
            return -setOffScreen(t);
          },
          duration: 2,
          scrollTrigger: {
            trigger: blogCardRef.current,
          },
        });
    } else {
      index % 8 === 0 &&
        gsap.from(blogCardRef.current, {
          x: (i, t) => {
            return setOffScreen(t);
          },
          duration: 3,
          scrollTrigger: {
            trigger: blogCardRef.current,
          },
        });
      index % 4 === 0 &&
        index % 8 !== 0 &&
        gsap.from(blogCardRef.current, {
          x: (i, t) => {
            return -setOffScreen(t);
          },
          duration: 3,
          scrollTrigger: {
            trigger: blogCardRef.current,
          },
        });
      index % 4 !== 0 &&
        gsap.from(blogCardRef.current, {
          opacity: 0,
          y: 100,
          duration: 2,
          scrollTrigger: {
            trigger: blogCardRef.current,
          },
        });
    }
  });
  return (
    <div
      ref={blogCardRef}
      className={`flex w-full gap-4 py-4 md:gap-6 md:py-6 lg:gap-8 lg:py-8 xl:gap-10 xl:py-10 2xl:gap-12 2xl:py-12 ${index % 4 !== 0 ? "flex-col md:w-1/4" : index === 0 ? "md:border-b-4 md:border-cardColor" : index === length - 1 ? "md:border-t-4 md:border-cardColor" : "md:border-y-4 md:border-cardColor"}`}
    >
      {index % 4 === 0 && index % 8 !== 0 && (
        <p className="hidden w-2/3 text-xs md:block md:px-8 md:text-sm lg:px-12 lg:text-base xl:px-16 xl:text-lg 2xl:px-20 2xl:text-xl">
          {blog.paragraphs[0].paragraph}
        </p>
      )}
      <div
        className={`flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 ${index % 4 === 0 ? "md:w-1/3" : ""}`}
      >
        <p className="border-b-4 text-xs uppercase md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
          {blog.author}, {new Date(blog.posted).toLocaleDateString()}
        </p>
        <Link
          to={`/blog/${blog.id}`}
          className="gap-2 text-base font-bold text-primaryColor hover:text-hoverColor md:gap-3 md:text-xl lg:gap-4 lg:text-2xl xl:gap-5 2xl:gap-6 2xl:text-3xl"
        >
          <h3 className="inline">{blog.title}</h3>
          <FaExternalLinkAlt className="ml-2 inline md:ml-3 lg:ml-5 xl:ml-8" />
        </Link>
        <h4 className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          {blog.tagline}
        </h4>
      </div>
      {index % 8 === 0 && (
        <p className="hidden w-2/3 text-xs md:block md:px-8 md:text-sm lg:px-12 lg:text-base xl:px-16 xl:text-lg 2xl:px-20 2xl:text-xl">
          {blog.paragraphs[0].paragraph}
        </p>
      )}
    </div>
  );
}
