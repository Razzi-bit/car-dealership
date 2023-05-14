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
    <div className="flex flex-col w-full h-full relative border border-Cgray/50">
      <Image src={img} alt="Img" height={240} className="object-cover w-full" />
      <div className="flex flex-col text-dark pb-[50px] p-5">
        <div className="flex justify-between mb-8 md:mb-10 text-base">
          <p>{category}</p>
          <p>{date}</p>
        </div>
        <h3 className="text-2xl mb-2">{name}</h3>
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
