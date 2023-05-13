import Image from "next/image";
import SubscribeFrom from "./SubscribeFrom/page";

import Section3Img from "../../../public/Section3Img.webp";

const SectionNewsLetter = () => {
  return (
    <div className="relative h-full min-h-[640px] w-full py-[60px] px-4 text-center sm:text-left text-white flex items-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1] bg-black/30" />
      <Image src={Section3Img} alt="Img" fill className="absolute object-cover bg-center z-[-2]" />
      <div className="h-full w-full lg:max-w-[1200px] lg:mx-auto lg:my-0">
        <div className="w-full sm:max-w-[80%] md:max-w-[500px]">
          <p className="text-xs mb-5 uppercase">newsletter</p>
          <h2 className="text-3xl mb-8">Sign Up And Never Miss A Deal Again</h2>
          <p className="text-base mb-12">
            We are committed to providing our customers with exceptional service, competitive
            pricing, and a wide range of vehicles to choose from.
          </p>
          <SubscribeFrom />
        </div>
      </div>
    </div>
  );
};

export default SectionNewsLetter;
