const TestimontialsBar = () => {
  return (
    <div className="bg-dark p-[40px] md:p-[60px]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 text-white text-base text-center lg:text-left">
        <div className="w-full flex flex-col lg:flex-row gap-5 border-b-2 md:border-r-2 md:border-b-0 border-Cgray pb-7 md:pb-0 md:pr-7 justify-center items-center">
          <p className="text-5xl">15+</p>
          <p>
            Having been in the car dealership industry for 15 years, we're proud to say that we've
            seen it all.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-5 pt-7 md:pt-0 md:pl-7 justify-center items-center">
          <p className="text-5xl">10k</p>
          <p>
            Selling 10,000 cars is no small feat, and we're incredibly proud that we have achieved
            this milestone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimontialsBar;
