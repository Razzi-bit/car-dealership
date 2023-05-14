import Image from "next/image";
import Link from "next/link";

import SectionGetStartedImg from "../../../public/SectionGetStartedImg.webp";

const SectionGetStarted = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center py-[60px] md:py-[80px] lg:py-[130px] text-left relative">
      <div className="text-white max-w-[1200px] mx-auto w-full px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="w-full md:w-[70%]">
          <h2 className="my-2 text-3xl md:text-5xl">
            Get A Fair Price For Your Car: Sell To Us Today
          </h2>
          <p className="mt-5 text-base mb-5 md:mb-0">
            We are committed to providing our customers with exceptional service, competitive
            pricing, and a wide range of vehicles to choose from.
          </p>
        </div>
        <Link
          href={"/"}
          className="bg-Cred text-white text-base px-6 py-4 text-center w-full sm:max-w-[150px]"
        >
          Get Started
        </Link>
      </div>

      <Image src={SectionGetStartedImg} alt="img" fill className="object-cover bg-center z-[-1]" />
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1] bg-black/50" />
    </div>
  );
};

export default SectionGetStarted;
