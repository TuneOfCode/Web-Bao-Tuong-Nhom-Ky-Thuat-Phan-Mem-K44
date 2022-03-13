import logo from "../../img/logo.png";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import navbar from "../../data/nav";
import { Link } from "react-scroll";
import { useState } from "react";
import useDarkLightMode from "../../hook/useDarkLightMode";

export default function Navbar() {
  // process dark / light mode
  const [isDarkLightMode, toggleDarkLightMode] = useDarkLightMode();
  const handleChangeMode = () => {
    toggleDarkLightMode(!isDarkLightMode);
  };
  // process responsive
  const [show, setShow] = useState(false);
  const listHide = ["md:hidden", "sm:hidden", "mb:hidden"];
  const listShow = ["md:block", "sm:block", "mb:block"];
  const handleShowHide = () => {
    setShow(!show);
    const list_index = document.getElementById("list-index");
    if (!show) {
      listHide.map((item) => list_index.classList.remove(item));
      listShow.map((item) => list_index.classList.add(item));
    } else {
      listHide.map((item) => list_index.classList.add(item));
      listShow.map((item) => list_index.classList.remove(item));
    }
  };
  return (
    <div id="home" className="header" style={{ height: "90px" }}>
      <header
        className="flex z-40 fixed w-full items-center lg:px-5 
        mb:px-2 bg-gradient-to-r from-sky-500 to-indigo-500
        dark:from-sky-700 dark:to-indigo-700 py-2"
      >
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img
              className="lg:w-20 lg:h-20
                md:w-20 md:h-20
                sm:w-20 sm:h-20 
                mb:w-12 mb:h-12
                object-contain"
              src={logo}
              alt=""
            />
          </a>
        </div>
        {/* Sologan */}
        <div
          className="sologan animate-pulse ml-2 from-neutral-100 text-white uppercase text-center 
        lg:text-xl md:text-sm sm:text-xl
        mb:text-xs mb:pr-2"
        >
          <h2
            className="lg:text-xl md:text-sm sm:text-xl mb:text-xs
            lg:w-auto md:w-48 sm:w-auto mb:w-auto"
          >
            Kỷ niệm 65 năm thành lập
          </h2>
          <h2 className="lg:text-xl md:text-sm sm:text-xl mb:text-xs">
            Trường Đại học khoa học
          </h2>
          <h2>Đại học Huế</h2>
        </div>
        {/* List */}
        <nav
          className="lg:flex lg:flex-1 
        md:relative sm:relative mb:relative"
          style={{ width: "50%" }}
        >
          <ul
            id="list-index"
            className="lg:text-white lg:flex lg:m-auto 
          lg:relative lg:top-0 lg:bg-transparent
          md:hidden md:absolute md:-right-8 md:top-5 
          md:bg-indigo-400 md:text-white md:z-30 md:p-2 md:rounded
          sm:hidden sm:absolute sm:-right-8 sm:top-8 
          sm:bg-indigo-400 sm:text-white sm:z-30 sm:p-2 sm:rounded
          mb:hidden mb:absolute mb:-right-8 mb:top-8 
          mb:bg-indigo-400 mb:text-white mb:z-30 mb:p-2 mb:rounded"
          >
            {navbar.map((item, index) => (
              <li
                key={index}
                className="mr-5 text-xl lg:w-auto animate-pulse
              md:p-1 sm:p-1 mb:p-1 cursor-pointer 
              hover:text-slate-100 mb:w-36"
              >
                <Link to={item.link} smooth={true} duration={1000}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Light mode / Dark mode / show/Hide*/}
        <div className="tool flex items-center ml-auto">
          <div className="mode text-white cursor-pointer">
            {isDarkLightMode ? (
              <BsSunFill
                className="mb:mr-2 text-yellow-400"
                size={"24px"}
                onClick={handleChangeMode}
              />
            ) : (
              <BsMoonFill
                className="mb:mr-2 text-yellow-400"
                size={"24px"}
                onClick={handleChangeMode}
              />
            )}
          </div>
          <div
            className="lg:hidden md:flex md:mr-12 sm:mr-5 sm:flex mb:flex mb:ml-auto text-white cursor-pointer"
            onClick={handleShowHide}
          >
            {!show ? (
              <GiHamburgerMenu
                id="show"
                className="mb:mr-2 mb:block"
                size={"24px"}
              />
            ) : (
              <FaTimes id="hide" className="mb:mr-2 mb:block" size={"24px"} />
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
