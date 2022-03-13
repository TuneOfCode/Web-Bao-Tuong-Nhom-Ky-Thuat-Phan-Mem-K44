import slides from "../../data/slide";
import { useEffect, useState } from "react";

export default function Slideshow() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const getIndex = setTimeout(() => {
      let index = slide + 1;
      if (index > slides.length - 1) index = 0;
      setSlide(index);
    }, 5000);
    return () => clearTimeout(getIndex);
  }, [slide]);
  return (
    <div
      className="max-w-full block border-solid border-yellow-500 rounded-lg
        px-0 py-0 mt-14 mx-12 mb-14 p-5 lg:h-full md:h-96 sm:h-96 mb:h-52"
      style={{ borderWidth: "20px" }}
    >
      <img
        id={slides[slide].title}
        className="w-full lg:h-112 lg:object-fill
          shadow-3xl
          md:h-80 md:object-fill sm:h-full sm:object-fill
          mb:h-44 mb:object-cover"
        src={slides[slide].url}
        alt={slides[slide].title}
      />
    </div>
  );
}
