import Link from "next/link";
import Image from "next/image";

import homeImg1 from "../../../../public/homeImg1.jpg";

const SectionTwoSlider = () => {
  return (
    <div className="border border-Cgray/50 flex flex-col lg:flex-row max-w-[1000px] z-10 bg-white">
      <div className="h-[320px] lg:h-[500px] w-full">
        <Image src={homeImg1} alt="Img" className="h-full w-full object-cover bg-center" />
      </div>
      <div className="text-base p-5">
        <div className="text-Cgray flex flex-wrap gap-5 mb-8 justify-between">
          <div className="flex gap-4 ">
            <p>2019</p>
            <p>Sedan</p>
          </div>
          <div className="flex gap-4 ">
            <p>Mileage:</p>
            <p>18031</p>
          </div>
        </div>
        <h3 className="text-3xl text-dark mb-2">Nexaro Proxima 4X</h3>
        <p className="text-Cgray my-2">
          With its aerodynamic curves and bold lines, this car is a standout on the road, turning
          heads and making a statement wherever it goes.
        </p>
        <div className="text-2xl text-dark flex flex-wrap gap-4 mt-5">
          <p>$ 37,800.00 USD</p>
          <p>MSRP: $35,600</p>
        </div>
        <Link href={"/"}>
          <p className="border border-Cgray/50 text-Cgray px-3 py-4 text-center mt-8 sm:max-w-[150px] sm:items-start">
            Explore
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SectionTwoSlider;
