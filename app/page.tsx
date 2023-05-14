import SectionBlogPosts from "./components/SectionBlogPosts/page";
import SectionGetStarted from "./components/SectionGetStarted/page";
import SectionNewsLetter from "./components/SectionNewsLetter/page";
import SectionClassics from "./components/SectionOne/page";
import SectionTestimontials from "./components/SectionTestimontials/page";
import SectionWeRecommendOne from "./components/SectionTwo/page";
import SectionWeRecommendTwo from "./components/SectionWeRecommendTwo/page";
import TestimontialsBar from "./components/TestimontialsBar/page";

import Main from "./components/main/page";

export default function Home() {
  return (
    <>
      <Main />
      <SectionClassics />
      <SectionWeRecommendOne />
      <SectionNewsLetter />
      <SectionWeRecommendTwo />
      <SectionTestimontials />
      <TestimontialsBar />
      <SectionBlogPosts />
      <SectionGetStarted />
    </>
  );
}
