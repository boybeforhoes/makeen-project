
import Navbar from "./mainpage/navbar";
import Header from "./mainpage/header";
import Gallery from "./mainpage/gallery";
import Hobby from "./mainpage/Hobby";
import "./globals.css"
import Banner from "./mainpage/banner";
import Tickets from "./mainpage/Tickets";
import About from "./mainpage/about";
export default function Home() {
  return (
    <>
      <div className="flex flex-col pr-[70px] pl-[70px] justify-center">
        <Navbar />
        <div className="flex flex-col">
          <div className="flex h-screen items-center  ">
            <Header />
            <Gallery />
          </div>
          <div className="h-[200px] ">
            <Hobby />
          </div>
        </div>
      </div>
      <div className="pt-[369px]">
        <Banner />  
      </div>
      <div className=" pr-[70px] pl-[70px] justify-center ">
        <Tickets />
        <About />
      </div>
    </>
  );
}
