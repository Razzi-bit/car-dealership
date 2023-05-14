import Image from "next/image";

interface testimontials {
  name: string;
  img: any;
  text: string;
}

const __TestimontialsCard = ({ name, img, text }: testimontials) => {
  return (
    <div className="h-auto w-full text-left px-5 py-7 md:py-9 md:px-10 flex flex-col gap-5 text-dark border border-Cgray/50">
      <p className="text-lg">{text}</p>
      <div className="flex gap-5 items-center">
        <Image src={img} alt="testimontials" width={60} height={60} className="rounded-full" />
        <h3 className="text-xl">{name}</h3>
      </div>
    </div>
  );
};

export default __TestimontialsCard;
