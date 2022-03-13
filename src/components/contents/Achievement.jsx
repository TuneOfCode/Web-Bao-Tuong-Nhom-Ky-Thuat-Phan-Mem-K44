import datas from "../../data/achievement";
import Aos from "aos";
import { useEffect } from "react";

export default function Achievement() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div id="achievement" className="achievement h-auto pt-32">
      <div className="title flex justify-center items-center">
        <h2
          className="lg:text-3xl text-center md:text-2xl sm:text-2xl mb:text-xl
            pt-5 pb-2 text-blue-800 dark:text-white
             font-semibold uppercase border-b-2 
             border-b-blue-800 dark:border-b-white"
        >
          Thành tựu
        </h2>
      </div>
      <div
        className="achievement-content py-5 
        flex justify-center items-start relative"
      >
        {/* axis */}
        <span
          className="spearead 
            border-l-4 relative 
          border-l-slate-600 dark:border-l-slate-300 
            rounded-sm"
          style={{ left: "auto", height: "900px" }}
        ></span>
        {/* node */}
        {datas.nodes.map((node) => (
          <span
            key={node}
            className="rounded-full border-4 w-5 h-5 
                    lg:block md:block sm:block mb:hidden
                    absolute left-auto border-stone-600
                    dark:border-stone-300  
                    bg-white cursor-pointer
                    hover:bg-stone-200"
            style={{ top: `${node * 100}px` }}
          ></span>
        ))}

        {/* block left/right content */}

        {datas.blocks.map((block) => {
          if (block.id % 2 === 0) {
            return (
              <div
                key={block.id}
                id={`achie-block-${block.id}`}
                data-aos={`fade-right`}
                className={` 
                        hover:scale-110 duration-300
                        z-10 absolute lg:right-1/4 
                        md:right-1/20 
                        sm:right-auto sm:left-auto 
                        mb:right-auto mb:left-auto 
                        text-white w-72 text-center bg-gradient-to-r 
                        from-purple-800 to-blue-800
                        dark:from-purple-600 dark:to-blue-600
                        shadow-lg p-5 rounded-md`}
                style={{ top: `${block.top}px` }}
              >
                <h3 className="text-yellow-400 text-xl uppercase">
                  {block.title}
                </h3>
                <p>
                  <i>{block.content}</i>
                </p>
                <span
                  className={`absolute right-full
                        lg:block md:block sm:hidden mb:hidden
                        border-solid border-l-8 border-l-transparent border-r-8 
                        border-r-purple-800 dark:border-r-purple-600`}
                  style={{
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    top: "50px",
                  }}
                ></span>
              </div>
            );
          } else {
            return (
              <div
                key={block.id}
                id={`achie-block-${block.id}`}
                data-aos={`fade-left`}
                className={` 
                        hover:scale-110 duration-300
                        z-10 absolute lg:left-1/4 
                        md:left-1/20 
                        sm:right-auto sm:left-auto  
                        mb:right-auto mb:left-auto 
                        text-white w-72 text-center bg-gradient-to-r 
                        from-purple-800 to-blue-800 
                        dark:from-purple-600 dark:to-blue-600
                        shadow-lg p-5 rounded-md`}
                style={{ top: `${block.top}px` }}
              >
                <h3 className="text-yellow-400 text-xl uppercase">
                  {block.title}
                </h3>
                <p>
                  <i>{block.content}</i>
                </p>
                <span
                  className={`absolute left-full
                        lg:block md:block sm:hidden mb:hidden
                        border-solid border-r-8 border-r-transparent border-l-8 
                        border-l-blue-800 dark:border-l-blue-600`}
                  style={{
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    top: "50px",
                  }}
                ></span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
