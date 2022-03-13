import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { BsArrowUp } from "react-icons/bs";

export default function ButtonScrollTop() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const scrollTop = () => {
      setActive(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", scrollTop);
    return () => {
      window.removeEventListener("scroll", scrollTop);
    };
  }, []);
  return (
    <div className="relative">
      {active && (
        <Link
          className="btn-scroll-top flex justify-center items-center
            bg-blue-800 dark:bg-blue-400 p-5 w-5 h-5 rounded-lg 
            opacity-40 hover:opacity-100 fixed right-5
            bottom-5 cursor-pointer"
          to="home"
          smooth={true}
          duration={1000}
        >
          <div className="icon">
            <BsArrowUp size={"20px"} color={"white"}></BsArrowUp>
          </div>
        </Link>
      )}
    </div>
  );
}
