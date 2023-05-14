import __SliderTestimontials from "./__SliderTestimontials/page";

const SectionTestimontials = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center">
      <div className="h-full w-full max-w-[1000px] mx-auto py-[60px] md:py-[100px] px-4 relative">
        <div className="text-dark pb-[50px]">
          <p className="text-xs uppercase mb-5">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-5xl mx-2">What Our Clients Say</h2>
        </div>
        <__SliderTestimontials />
        <div className="border-Cgray/50 border-l border-r border-t z-[-1] absolute top-[60%] bottom-0 left-0 right-0 xl:right-[-50px] xl:left-[-50px]" />
      </div>
    </div>
  );
};

export default SectionTestimontials;
