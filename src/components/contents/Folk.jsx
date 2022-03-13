import folks from "../../data/folk";
import Aos from "aos";
import { useEffect } from "react";

export default function Folk() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });
  return (
    <div
      id="folk"
      className="pt-28 pb-28 border-0 shadow-lg flex flex-col lg:w-full 
      md:w-full sm:w-full mb:w-72 mb:m-auto"
    >
      <div className="flex justify-center items-center pb-10">
        <h2
          className="lg:text-3xl md:text-2xl sm:text-2xl mb:text-xl
            p-2 text-blue-800 dark:text-white font-semibold uppercase border-b-2 
            border-blue-800 dark:border-white"
        >
          Danh ngôn
        </h2>
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {folks.map((folk, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-purple-600 to-indigo-700
            dark:from-purple-600 dark:to-indigo-600
            flex flex-col justify-center shadow-lg
            items-center w-96 h-48 m-2 p-2 rounded-lg"
            data-aos="flip-up"
          >
            <div className="author text-white text-left capitalize text-lg">
              <h3>{folk.author}</h3>
            </div>
            <div className="content text-center text-slate-300 p-2 text-base">
              <p>
                <i>"{folk.content}"</i>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
