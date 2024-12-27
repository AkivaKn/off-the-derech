import { useState } from "react";
import { resources } from "../lib/resources";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Resources() {
  const [currentResource, setCurrentResource] = useState(0);
  return (
    <div className="flex-1 bg-backgroundColor">
      <section className="my-6 flex w-full justify-center px-10 sm:px-14 md:my-8 md:px-20 lg:my-10 lg:px-24 xl:my-14 xl:px-28 2xl:my-16">
        <div className="flex flex-col gap-4 md:gap-6 lg:w-3/4 lg:gap-8 lg:pr-32 xl:pr-44">
          <h2 className="text-lg font-bold text-primaryColor md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            {resources.title}
          </h2>
          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            {resources.subtitle}
          </h3>
        </div>
      </section>
      <section className="mb-6 flex w-full justify-center px-10 sm:px-14 md:mb-8 md:px-20 lg:mb-10 lg:px-24 xl:mb-14 xl:px-28 2xl:mb-16">
        <div className="flex flex-wrap gap-4 md:gap-6 lg:w-3/4 lg:gap-8 lg:pr-16">
          {resources.content.map((resource, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentResource(index)}
                disabled={currentResource === index}
                className={`rounded-xl ${index === currentResource ? "bg-primaryColor text-secondaryColor" : "bg-cardColor text-white"} px-4 py-2 text-center text-sm font-bold shadow-md transition-all hover:bg-hoverColor hover:text-secondaryColor hover:shadow-lg focus:bg-hoverColor focus:text-secondaryColor focus:shadow-none md:py-3 md:text-base lg:rounded-3xl lg:px-5 xl:px-8 xl:py-4 xl:text-lg 2xl:px-10 2xl:py-5 2xl:text-xl`}
              >
                {resource.title}
              </button>
            );
          })}
        </div>
      </section>
      <section className="mb-6 flex w-full justify-center px-10 sm:px-14 md:mb-8 md:px-20 lg:mb-10 lg:px-24 xl:mb-14 xl:px-28 2xl:mb-16">
        <div className="w-full rounded-3xl bg-cardColor p-10 lg:w-3/4 lg:p-12 xl:p-16 2xl:p-20">
          <h3 className="text-center text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            {resources?.content[currentResource]?.title}
          </h3>
          <ul className="space-y-5 md:space-y-7 lg:space-y-10 xl:space-y-12 2xl:space-y-16">
            {resources?.content[currentResource]?.subContent.map(
              (subContent, index) => {
                return (
                  <li key={index} className="list-none">
                    <h4 className="text-base font-bold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                      {subContent.title}
                    </h4>
                    <ul className="space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-8 2xl:space-y-10">
                      {subContent.resources.map((resource, index) => {
                        return (
                          <li key={index}>
                            {resource.link ? (
                              <a
                                href={resource.link.url}
                                target="_blank"
                                className="flex items-center gap-2 text-sm font-bold hover:text-primaryColor md:gap-3 md:text-base lg:gap-4 lg:text-lg xl:gap-5 xl:text-xl 2xl:gap-6 2xl:text-2xl"
                              >
                                <p>{resource.link.text}</p>{" "}
                                <FaExternalLinkAlt />
                              </a>
                            ) : (
                              <h4 className="text-sm font-bold md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                                {resource.title}
                              </h4>
                            )}
                            <p className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                              {resource.body}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              },
            )}
          </ul>
        </div>
      </section>
    </div>
  );
}
