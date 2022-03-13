import logo from "../../img/logo.png";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="flex flex-wrap justify-evenly items-center 
        lg:text-base md:text-base sm:text-base mb:text-sm
        text-white p-5 bg-gradient-to-r 
        from-indigo-600 to-sky-600 dark:from-indigo-800 dark:to-sky-800"
    >
      <div className="contact-refer text-center">
        <img
          className="block m-auto
                lg:w-20 lg:h-20
                md:w-20 md:h-20
                sm:w-20 sm:h-20 
                mb:w-12 mb:h-12
                object-contain"
          src={logo}
          alt=""
        />
        <b>
          <p>Trường Đại học Khoa Học - Đại học Huế</p>
          <p>Địa chỉ: 77 Nguyễn Huệ, Thành phố Huế, Thừa Thiên Huế, Việt Nam</p>
          <p className="pt-5">
            Nguồn tham khảo:
            <a
              className="block hover:underline"
              target="_blank"
              href="http://husc.hueuni.edu.vn/cocautochuc.php"
              rel="noreferrer"
            >
              Giới thiệu về trường Đại học Khoa Học - Đại học Huế
            </a>
            <a
              className="hover:underline"
              href="https://www.google.com/search?source=univ&tbm=isch&q=%E1%BA%A3nh+tr%C6%B0%E1%BB%9Dng+%C4%91%E1%BA%A1i+h%E1%BB%8Dc+khoa+h%E1%BB%8Dc+Hu%E1%BA%BF"
              target="_blank"
              rel="noreferrer"
            >
              Google hình ảnh về trường Đại học Khoa Học - Đại học Huế
            </a>
          </p>
        </b>
      </div>
      <div className="member text-center">
        <div className="flex flex-col items-start pt-5 pl-5">
          <p className="capitalize">
            <b>Bản quyền &copy; nhóm Kỹ thuật phần mềm K44</b>
          </p>
          <a
            className="flex hover:underline w-42 justify-items-start"
            href="https://www.facebook.com/3T.2208/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="mt-1 shadow-lg text-blue-800 dark:text-blue-400"></FaFacebook>
            <p className="ml-2">Trần Thanh Tú</p>
          </a>
          <a
            className="flex hover:underline w-42 justify-items-start"
            href="https://www.facebook.com/twilight.nxt"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="mt-1 shadow-lg text-blue-800 dark:text-blue-400"></FaFacebook>
            <p className="ml-2">Nguyễn Xuân Tân Lộc</p>
          </a>
          <a
            className="flex hover:underline w-42 justify-items-start"
            href="https://www.facebook.com/Thao03.uylinh"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="mt-1 shadow-lg text-blue-800 dark:text-blue-400"></FaFacebook>
            <p className="ml-2">Nguyễn Thị Thu Ni</p>
          </a>
          <a
            className="flex hover:underline w-42 justify-items-start"
            href="https://www.facebook.com/truongcao2012"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="mt-1 shadow-lg text-blue-800 dark:text-blue-400"></FaFacebook>
            <p className="ml-2">Cao Nguyên Trường</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
