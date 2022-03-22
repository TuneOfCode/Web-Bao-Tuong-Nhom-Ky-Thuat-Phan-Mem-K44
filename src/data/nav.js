import { FaHome, FaBook } from "react-icons/fa";
import { BsNewspaper, BsFillImageFill } from "react-icons/bs";
import { GiTrophyCup, GiNotebook } from "react-icons/gi";
const navbar = [
  {
    link: "home",
    icon: <FaHome className="mx-1" />,
    title: "Trang chủ",
  },
  {
    link: "overview",
    icon: <BsNewspaper className="mx-1" />,
    title: "Tổng Quan",
  },
  {
    link: "achievement",
    icon: <GiTrophyCup className="mx-1" />,
    title: "Thành Tựu",
  },
  {
    link: "PoemStory",
    icon: <FaBook className="mx-1" />,
    title: "Thơ & Truyện",
  },

  {
    link: "folk",
    icon: <GiNotebook className="mx-1" />,
    title: "Danh ngôn",
  },
  {
    link: "album",
    icon: <BsFillImageFill className="mx-1" />,
    title: "Ảnh nổi bật",
  },
];

export default navbar;
