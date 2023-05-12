import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { RiMenu3Fill, RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import LogoImg from "../../../public/download.svg";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="sm:min-h-[66px] lg:min-h-[80px] h-full w-full flex justify-between items-center p-4 xl:px-[50px] bg-transparent border-b border-white/50 z-10 text-base text-white">
      <Image src={LogoImg} alt="Logo" quality={100} width={180} height={30} />
      <ul className="hidden lg:flex ">
        <li className="px-4">Who We Are</li>
        <li className="px-4">Shop</li>
        <li className="px-4">Blog</li>
        <li className="px-4">All Pages</li>
      </ul>
      <div className="text-white flex items-center ml-5 gap-4">
        <FaSearch size={20} className="hidden sm:flex" />
        <FaShoppingCart size={20} />
        <RiMenu3Fill className="flex md:hidden" size={20} />
        <Link href={"/"}>
          <p className="hidden lg:flex py-4 px-5 border border-white/50">Explore Vegicles</p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
