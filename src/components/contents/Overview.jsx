import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import Aos from "aos";
import histories from "../../data/overview";

export default function Overview() {
  const [history, setHistory] = useState(0);

  const handleBtnPrev = () => {
    const item = document.getElementById(`${histories[history].id}`);
    const index = history - 1;
    if (index < 0) setHistory(histories.length - 1);
    else setHistory(index);
    item.classList.add("animate-left");
    setTimeout(() => {
      item.classList.remove("animate-left");
    }, 500);
    item.classList.remove("animate-right");
  };

  const handleBtnNext = () => {
    const item = document.getElementById(`${histories[history].id}`);
    const index = history + 1;
    if (index > histories.length - 1) setHistory(0);
    else setHistory(index);
    item.classList.add("animate-right");
    setTimeout(() => {
      item.classList.remove("animate-right");
    }, 500);
    item.classList.remove("animate-left");
  };

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });

  /* Auto move Slide */
  useEffect(() => {
    const autoChangeHistory = setTimeout(() => {
      const item = document.getElementById(`${histories[history].id}`);
      const index = history + 1;
      if (index > histories.length - 1) {
        setHistory(0);
      } else if (index < 0) {
        setHistory(histories.length - 1);
      } else {
        setHistory(index);
      }

      item.classList.add("animate-right");
      setTimeout(() => {
        item.classList.remove("animate-right");
      }, 500);
      item.classList.remove("animate-left");
    }, 20000);

    /* avoid memory leak */
    return () => clearTimeout(autoChangeHistory);
  }, [history]);
  return (
    <div
      id="overview"
      className="History lg:pt-16 md:lg:pt-16 sm:pt-0 mb:pt-0 "
    >
      <div className="flex justify-center">
        <div
          className="shadow-lg flex flex-col lg:w-full md:w-full sm:w-full mb:w-full
          bg-gradient-to-r from-purple-500 to-blue-600
          dark:from-purple-800 dark:to-blue-800"
        >
          <div className="flex pt-24 pb-10 items-center justify-center p-2 rounded-t">
            <h3
              className="lg:text-3xl md:text-2xl sm:text-2xl mb:text-xl
              pt-10 text-white font-semibold uppercase border-b-2 border-b-stone-100"
            >
              Tổng quan
            </h3>
          </div>

          <div className="pb-80 flex items-center flex-auto">
            {/* Button Previous */}
            <div className="previous m-auto  mb:w-8">
              <BiChevronLeftCircle
                className="text-white cursor-pointer m-auto hover:text-blue-300"
                size={"30px"}
                onClick={handleBtnPrev}
              >
                Quay lại
              </BiChevronLeftCircle>
            </div>
            {/* Slide */}
            <div
              id={histories[history].id}
              className="max-w-md p-2 mx-auto py-5
              lg:h-auto md:h-auto sm:h-105 mb:h-105
              bg-white rounded-xl shadow-md overflow-hidden 
              md:max-w-2xl lg:w-full md:w-full sm:w-full mb:w-60"
              data-aos="zoom-in-up"
            >
              <div className="md:flex">
                <div className="flex justify-center items-center md:shrink-0">
                  <img
                    className="max-w-sm hover:max-w-lg object-contain w-full lg:h-44 md:h-44 md:w-48 sm:h-32 mb:h-20"
                    src={histories[history].img}
                    alt="Man looking at item at a store"
                  />
                </div>
                <div className="p-5 mb:h-42">
                  <h4
                    className="block text-center capitalize mt-1 
                  lg:text-lg md:text-lg sm:text-base mb:text-base 
                  leading-tight font-medium text-black"
                  >
                    {histories[history].title}
                  </h4>
                  <p
                    className="scrollbar mt-2 text-slate-500 
                    lg:h-36 md:h-36 sm:h-36 mb:h-40 overflow-y-auto"
                  >
                    {histories[history].content}
                  </p>
                </div>
              </div>
            </div>
            {/* Button Next */}
            <div className="next m-auto  mb:w-8">
              <BiChevronRightCircle
                className="text-white cursor-pointer m-auto hover:text-blue-300"
                size={"30px"}
                onClick={handleBtnNext}
              >
                Tiếp tục
              </BiChevronRightCircle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
