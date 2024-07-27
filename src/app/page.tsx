
import Navbar from "../componets/mainpage/navbar";
import Header from "../componets/mainpage/header";
import Gallery from "../componets/mainpage/gallery";
import Hobby from "../componets/mainpage/Hobby";
import "./globals.css"
import Banner from "../componets/mainpage/banner";
import Tickets from "../componets/mainpage/Tickets";
import About from "../componets/mainpage/about";
import Offer from "../componets/mainpage/offer";
import CommentsTourist from "../componets/mainpage/Comments-tourist";
import Veblog from "../componets/mainpage/veblog";
import AddEmail from "../componets/mainpage/Add-email";
import Footer from "../footer/Footer";
// import HobbySPage from "../hobby's-page/hobby's-page
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

        <div className="pt-[369px]">
          <Banner />
        </div>
        <div className=" pr-[70px] pl-[70px] justify-center ">
          <Tickets />
          <About />
          <Offer />
        </div>
        <div>
          <CommentsTourist />
        </div>
        <div className=" pr-[70px] pl-[70px] justify-center">
          <Veblog />
          <AddEmail />
        </div>
        <div className="pt-[140px]">
          <Footer />
        </div>
      </div >

    </>
  );
}
