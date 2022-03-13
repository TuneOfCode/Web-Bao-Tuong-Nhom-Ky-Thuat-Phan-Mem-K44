import albums from "../../data/album";
import Aos from "aos";
import { useEffect } from "react";

export default function Album() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });
  return (
    <div
      id="album"
      className="pt-32 pb-20 shadow-lg bg-gradient-to-r from-purple-600 to-blue-600
      dark:from-purple-700 dark:to-blue-700"
    >
      <div className="flex justify-center items-center pb-10">
        <h2
          className="lg:text-3xl md:text-2xl sm:text-2xl mb:text-xl
            p-2 text-white font-semibold uppercase border-b-2"
        >
          Ảnh nổi bật
        </h2>
      </div>
      <div className="cards flex justify-center items-center flex-wrap">
        {albums.map((album, index) => {
          return (
            <div
              key={index}
              data-aos="flip-down"
              className="card-item m-2 h-auto
                bg-blue-400 rounded-2xl"
              style={{ width: "300px" }}
            >
              <div className="image block m-auto h-auto rounded-t-lg ">
                <img
                  className="block m-auto p-5 object-fill shadow-md"
                  style={{
                    borderRadius: "5%",
                    width: "auto",
                    height: "auto",
                  }}
                  src={album.img}
                  alt={album.description}
                />
              </div>
              <p className="p-5 text-center text-white">
                <i>“{album.description}”</i>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
