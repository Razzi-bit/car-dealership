import Link from "next/link";
import Image from "next/image";

import Section2Img from "../../../public/Section2Img.webp";
import SectionOneCard from "../SectionOne/SectionOneCard/page";

const SectionClassics = () => {
  return (
    <div className="flex flex-col h-full lg:min-h-screen md:max-w-[1200px] md:mx-auto md:my-0 px-4 justify-center min-h-[100%]">
      <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center pb-[60px] pt-[60px] md:pt-12">
        <SectionOneCard
          index="01"
          titel="Variety of Cars"
          text="At our car shop, we are committed to providing our customers with exceptional service and competitive pricing."
        />
        <SectionOneCard
          index="02"
          titel="Competitive Pricing"
          text="At our car shop, we are committed to providing our customers with exceptional service and competitive pricing."
        />
        <SectionOneCard
          index="03"
          titel="24/7 support"
          text="At our car shop, we are committed to providing our customers with exceptional service and competitive pricing."
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-[50px] justify-center lg:justify-between items-center lg:pb-12">
        <div className="text-center lg:text-left max-w-[535px] ">
          <p className="mb-5 text-xs uppercase">classics</p>
          <h2 className="my-2 text-3xl lg:text-4xl text-dark">Discover A New Level Of Comfort</h2>
          <p className="my-2 text-base text-Cgray mb-[50px] mt-[40px]">
            We're here to make the car-buying process as easy and stress-free as possible. Contact
            us today to schedule a test drive or to learn more about our financing and service
            options.
          </p>
          <Link href={"/"}>
            <p className="text-center text-base px-3 py-4 text-dark border border-Cgray/50 w-full sm:max-w-[200px] mx-auto lg:mx-0 my-0">
              Discover More
            </p>
          </Link>
        </div>
        <div className="w-full max-w-[535px] lg:max-w-[100%] h-full lg:h-[336px]">
          <Image src={Section2Img} alt="img" className="w-full h-full object-cover bg-center" />
        </div>
      </div>
    </div>
  );
};

export default SectionClassics;
