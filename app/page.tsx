import SectionNewsLetter from "./components/SectionNewsLetter/page";
import SectionClassics from "./components/SectionOne/page";
import SectionWeRecommend from "./components/SectionTwo/page";
import Main from "./components/main/page";

export default function Home() {
  return (
    <>
      <Main />
      <SectionClassics />
      <SectionWeRecommend />
      <SectionNewsLetter />
    </>
  );
}
