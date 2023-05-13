import SectionTwoSlider from "./SectionTwoSlider/page";

const SectionWeRecommendOne = () => {
  return (
    <div className="relative h-full lg:min-h-screen w-full text-left py-[60px] px-4 max-w-[1200px] mx-auto my-0 flex flex-col justify-center">
      <p className="text-xs mb-5 uppercase text-dark">we recommend</p>
      <h3 className="text-3xl my-2 text-dark">Featured Vehicles</h3>
      <SectionTwoSlider />
      <div className="border-Cgray/50 border-l border-r border-t z-[-1] absolute top-[60%] bottom-0 left-0 right-0 xl:right-[-50px] xl:left-[-50px]" />
    </div>
  );
};

export default SectionWeRecommendOne;
