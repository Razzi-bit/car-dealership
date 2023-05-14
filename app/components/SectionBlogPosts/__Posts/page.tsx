import Image from "next/image";
import Link from "next/link";

import { MdOutlineArrowRightAlt } from "react-icons/md";

interface post {
  name: string;
  text: string;
  date: string;
  category: string;
  link: string;
  img: any;
}

const __Posts = ({ name, text, date, category, link, img }: post) => {
  return (
    <div className="flex flex-col w-full h-full relative border border-Cgray/50 md:w-[47%] lg:w-[30%] bg-white">
      <Image src={img} alt="Img" className="object-cover w-full h-[240px] cursor-pointer" />
      <div className="flex flex-col text-dark pb-[50px] p-5 h-full">
        <div className="flex justify-between mb-8 md:mb-10 text-base">
          <p>{category}</p>
          <p>{date}</p>
        </div>
        <h3 className="text-2xl mb-2 min-h-[90px] text-dark cursor-pointer hover:text-Cred duration-200 ease-in">
          {name}
        </h3>
        <p className="my-2">{text}</p>
      </div>
      <Link href={link}>
        <div className="border-t border-l border-Cgray/50 absolute bottom-0 right-0 text-dark bg-white cursor-pointer hover:bg-Cred hover:text-white duration-200 ease-in">
          <MdOutlineArrowRightAlt size={40} className="p-2" />
        </div>
      </Link>
    </div>
  );
};

export default __Posts;
