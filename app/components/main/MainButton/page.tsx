import Link from "next/link";

interface button {
  text: string;
  link: string;
  tColor: string;
  bColor: string;
}

const MainButton = ({ text, link, tColor, bColor }: button) => {
  return (
    // <Link href={`${link}`}>
    <div
      className={`flex w-full justify-center items-center border border-white/50 ${tColor} ${bColor}`}
    >
      <p className="px-6 py-3 text-base">{text}</p>
    </div>
    // </Link>
  );
};

export default MainButton;
