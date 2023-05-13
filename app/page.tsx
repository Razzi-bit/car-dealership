import SectionNewsLetter from "./components/SectionNewsLetter/page";
import SectionClassics from "./components/SectionOne/page";
import SectionWeRecommendOne from "./components/SectionTwo/page";
import SectionWeRecommendTwo from "./components/SectionWeRecommendTwo/page";
import Main from "./components/main/page";

export default function Home() {
  return (
    <>
      <Main />
      <SectionClassics />
      <SectionWeRecommendOne />
      <SectionNewsLetter />
      <SectionWeRecommendTwo />
    </>
  );
}
