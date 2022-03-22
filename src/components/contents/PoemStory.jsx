import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import poemStories from "../../data/poemStory";

export default function PoemStory() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <div
      id="PoemStory"
      className="lg:pt-32 mb:pt-16 pb-20 border-0 shadow-lg flex flex-col lg:w-full 
      md:w-full sm:w-full bg-gradient-to-r from-purple-600 to-blue-600
      dark:from-purple-800 dark:to-blue-800"
    >
      <div className="flex justify-center items-center pb-10">
        <h2
          className="lg:text-3xl md:text-2xl sm:text-2xl mb:text-xl
            p-2 text-white font-semibold uppercase border-b-2"
        >
          Thơ & Truyện
        </h2>
      </div>

      {poemStories.map((item) => {
        if (item.id % 2 !== 0) {
          return (
            <div
              key={item.id}
              className="max-w-md pt-5 mx-auto mb-20
                  rounded-xl shadow-md overflow-hidden 
                  md:max-w-2xl lg:w-full md:w-full sm:w-full mb:w-60"
              data-aos={`flip-right`}
            >
              <div
                className={`max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl`}
              >
                <div className={`md:flex flex-row justify-start`}>
                  <div className={`md:shrink-0`}>
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={item.img}
                      alt="Man looking at item at a store"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="block text-center mt-1 text-lg leading-tight font-medium text-black">
                      {item.title}
                    </h2>
                    <div
                      className={`mt-4 text-slate-500
                          lg:overflow-auto md:overflow-auto sm:overflow-auto
                          lg:h-48 md:h-48 sm:h-48 mb:h-32 mb:overflow-x-hidden 
                          overflow-y-auto 
                          lg:text-base md:text-base sm:text-base mb:text-sm scrollbar`}
                    >
                      {item.contents.map((content, index) => {
                        if (
                          item.category === "lục bát" ||
                          item.category === "thơ"
                        ) {
                          return (
                            <p
                              key={index}
                              className={
                                "lg:text-center md:text-center sm:text-center mb:text-left"
                              }
                            >
                              <i>{content}</i>
                            </p>
                          );
                        }
                        return (
                          <p key={index}>
                            <i>{content}</i>
                          </p>
                        );
                      })}
                    </div>
                    <div
                      className={`capitalize mt-8 tracking-wide 
                        lg:text-sm md:text-sm sm:text-sm mb:text-xs 
                        lg:text-right md:text-right sm:text-right mb:text-left
                        text-indigo-500 font-semibold`}
                    >
                      {item.author}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={item.id}
              className="max-w-md pt-5 mx-auto mb-20
                  rounded-xl shadow-md overflow-hidden 
                  md:max-w-2xl lg:w-full md:w-full sm:w-full mb:w-60"
              data-aos={`flip-left`}
            >
              <div
                className={`max-w-md mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl`}
              >
                <div className={`md:flex flex-row-reverse justify-start`}>
                  <div className={`md:shrink-0`}>
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={item.img}
                      alt="Man looking at item at a store"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="block text-center mt-1 text-lg leading-tight font-medium text-white">
                      {item.title}
                    </h2>
                    <div
                      className={`mt-4 text-slate-200
                          lg:overflow-auto md:overflow-auto sm:overflow-auto
                          lg:h-48 md:h-48 sm:h-48 mb:h-32 mb:overflow-x-hidden 
                          overflow-y-scroll 
                          lg:text-base md:text-base sm:text-base mb:text-sm scrollbar`}
                    >
                      {item.contents.map((content, index) => {
                        if (
                          item.category === "lục bát" ||
                          item.category === "thơ"
                        ) {
                          return (
                            <p
                              key={index}
                              className={
                                "lg:text-center md:text-center sm:text-center mb:text-left"
                              }
                            >
                              <i>{content}</i>
                            </p>
                          );
                        } else {
                          return (
                            <p key={index}>
                              <i>{content}</i>
                            </p>
                          );
                        }
                      })}
                    </div>
                    <div
                      className={`capitalize mt-8 tracking-wide 
                          lg:text-sm md:text-sm sm:text-sm mb:text-xs 
                          lg:text-right md:text-right sm:text-right mb:text-left
                          text-yellow-500 font-semibold`}
                    >
                      {item.author}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
