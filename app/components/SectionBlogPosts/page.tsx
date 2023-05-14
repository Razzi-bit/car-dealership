import blogImg1 from "../../../public/blogs/blogImg1.jpg";
import blogImg2 from "../../../public/blogs/blogImg2.jpg";
import blogImg3 from "../../../public/blogs/blogImg3.jpg";

import __Posts from "./__Posts/page";

const SectionBlogPosts = () => {
  const posts = [
    {
      name: "5 Fun and Affordable Cars for First-Time Buyers",
      text: "Having been in the car dealership industry for 15 years, we're proud to say that we've seen it all.",
      date: "Mar 1, 2023",
      category: "News",
      link: "/",
      img: blogImg1,
    },
    {
      name: "10 Things You Need to Know Before Buying a Used Car",
      text: "Having been in the car dealership industry for 15 years, we're proud to say that we've seen it all.",
      date: "Feb 28, 2023",
      category: "Automotive",
      link: "/",
      img: blogImg2,
    },
    {
      name: "The Top 10 Most Popular Cars of 2023",
      text: "Having been in the car dealership industry for 15 years, we're proud to say that we've seen it all.",
      date: "Mar 1, 2023",
      category: "News",
      link: "/",
      img: blogImg3,
    },
  ];
  return (
    <div className="flex flex-col px-4 py-[60px] lg:py-[80px] max-w-[1200px] w-full h-full mx-auto relative">
      <div className="text-center pb-10 py-4 text-dark">
        <p className="mb-5 md:mb-8 text-xs uppercase">latest blog posts</p>
        <h3 className="my-2 text-3xl md:text-5xl">Auto World Blog</h3>
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {posts.map(({ name, text, date, category, link, img }, index) => {
          return (
            <__Posts
              key={index}
              name={name}
              text={text}
              date={date}
              category={category}
              link={link}
              img={img}
            />
          );
        })}
      </div>
      <div className="border-Cgray/50 border-l border-r border-b z-[-1] absolute bottom-[60%] top-0 left-0 right-0 xl:right-[-50px] xl:left-[-50px]" />
    </div>
  );
};

export default SectionBlogPosts;
