import Image from "next/image";

import MainButton from "./MainButton/page";
import MainFormCard from "./MainFormCard/page";
import Nav from "../../components/Nav/page";

import homeImg1 from "../../../public/homeImg1.jpg";

const Main = () => {
  return (
    <div className="w-full relative h-full lg:min-h-screen">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1] bg-black/60" />
      <Image
        priority
        quality={100}
        src={homeImg1}
        alt=""
        fill
        className="absolute top-0 left-0 right-0 bottom-0 z-[-2] bg-center object-cover"
      />
      <div>
        <Nav />

        <div className="min-h-[450px] md:min-h-[550px] lg:max-w-[1300px] lg:mx-auto lg:my-0 w-full h-full flex justify-center lg:justify-between text-center px-4 py-[100px]">
          <div className="z-[2] flex flex-col items-center lg:items-start justify-center w-full max-w-[500px]">
            <p className="mb-5 text-xs text-white">NEW IN STOCK</p>
            <h1 className="my-2 text-4xl text-white lg:text-left">
              Upgrade Your Driving Experience
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full max-w-[400px]">
              <MainButton text="Discover More" link="/" tColor="text-dark" bColor="bg-white" />
              <MainButton
                text="Meet Horizon GT"
                link="/"
                tColor="text-white"
                bColor="bg-transparent"
              />
            </div>
          </div>
          <MainFormCard />
        </div>
      </div>
    </div>
  );
};

export default Main;
