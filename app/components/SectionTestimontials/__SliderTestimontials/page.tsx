import __TestimontialsCard from "./__TestimontialsCard/page";
import TestimontialsImg1 from "../../../../public/TestimontialsImg1.webp";
import TestimontialsImg2 from "../../../../public/TestimontialsImg2.webp";

const __SliderTestimontials = () => {
  const testimontials = [
    {
      name: "Eduard Franz",
      img: TestimontialsImg1,
      text: "I was impressed by the selection of vehicles at this dealership, and the sales team was incredibly helpful in helping me find the right one for my budget. They worked with me to find a financing plan that fit my needs, I never felt pressured to make a decision. I'm so happy with my new car.",
    },
    {
      name: "Rene Wells",
      img: TestimontialsImg2,
      text: "I was impressed by the selection of vehicles at this dealership, and the sales team was incredibly helpful in helping me find the right one for my budget. They worked with me to find a financing plan that fit my needs, I never felt pressured to make a decision. I'm so happy with my new car.",
    },
  ];
  return (
    <div className="h-auto flex gap-5 justify-between bg-white">
      {testimontials.map(({ name, img, text }, index) => {
        return <__TestimontialsCard name={name} img={img} text={text} key={index} />;
      })}
    </div>
  );
};

export default __SliderTestimontials;
