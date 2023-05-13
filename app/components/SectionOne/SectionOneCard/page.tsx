interface card {
  index: string;
  titel: string;
  text: string;
}

const SectionOneCard = ({ index, titel, text }: card) => {
  return (
    <div className="md:py-5 md:px-4 w-full max-w-[420px] justify-center text-center">
      <div className="flex justify-center items-center gap-4 text-sm text-dark pb-5">
        <p>{index}</p>
        <hr className="h-px bg-Cgray border-0 w-full text-dark"></hr>
      </div>
      <div className="flex justify-center items-center flex-col w-full p-4 border-2 border-Cgray/50">
        <h3 className="my-2 text-2xl text-dark">{titel}</h3>
        <p className="mt-3 mb-2 text-base text-Cgray">{text}</p>
      </div>
    </div>
  );
};

export default SectionOneCard;
