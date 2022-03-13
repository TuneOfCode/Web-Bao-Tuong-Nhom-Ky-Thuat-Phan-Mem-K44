import Navbar from "./components/headers/Navbar";
import Slideshow from "./components/headers/Slideshow";
import Overview from "./components/contents/Overview";
import Achievement from "./components/contents/Achievement";
import PoemStory from "./components/contents/PoemStory";
import Folk from "./components/contents/Folk";
import Album from "./components/contents/Album";
import Footer from "./components/footers/Footer";
import ButtonScrollTop from "./components/footers/ButtonScrollTop";

export default function App() {
  return (
    <div
      className="App h-full mx-auto w-auto
      container bg-gradient-to-r relative
      overflow-x-hidden overflow-y-auto
       from-sky-300 to-indigo-300
      dark:from-sky-800 dark:to-indigo-800"
    >
      {/* Headers */}
      <Navbar />
      {/* Contents */}
      <Slideshow />
      <Overview />
      <Achievement />
      <PoemStory />
      <Folk />
      <Album />
      {/* Footers */}
      <Footer />
      <ButtonScrollTop />
    </div>
  );
}
