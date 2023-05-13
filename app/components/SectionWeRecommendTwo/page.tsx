import Image from "next/image";

import __Header from "./__Header/page";
import productImg from "../../../public/products/productImg.png";
import Link from "next/link";

const SectionWeRecommendTwo = () => {
  const products = [
    {
      index: 1,
      name: "Ampera Axia",
      price: "37,800.00",
      msrp: "$35,600",
      productImg: productImg,
    },
    {
      index: 2,
      name: "Velocevo Stellaris",
      price: "$37,800.00",
      msrp: "$35,600",
      productImg: productImg,
    },
    {
      index: 2,
      name: "Ampera Axia",
      price: "37,800.00",
      msrp: "$35,600",
      productImg: productImg,
    },
    {
      index: 3,
      name: "Velocevo Stellaris",
      price: "$37,800.00",
      msrp: "$35,600",
      productImg: productImg,
    },
  ];
  return (
    <div className="flex flex-col py-[60px] px-4 w-full h-full lg:min-h-screen justify-center max-w-[1200px] mx-auto">
      <div className="mb-10 text-left text-dark">
        <p className="text-xs mb-5 uppercase">we recommend</p>
        <h2 className="text-3xl my-2 md:text-5xl">Latest Vehices</h2>
      </div>
      <__Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(({ name, price, msrp, productImg }) => {
          return (
            <div className="flex flex-col gap-2">
              <Image
                src={productImg}
                alt="Product Img"
                className="cursor-pointer hover:scale-110 duration-200 ease-in"
              />
              <div className="text-left text-dark">
                <h3 className="text-xl">{name}</h3>
                <p className="text-base mt-2">{price} USD</p>
                <p className="text-base">MSRP: {msrp}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Link href={"/"}>
        <p className="text-dark text-center border border-Cgray/50 text-base py-4 px-5 mt-[50px] cursor-pointer sm:max-w-[200px] sm:mx-auto rounded">
          Discover More
        </p>
      </Link>
    </div>
  );
};

export default SectionWeRecommendTwo;
