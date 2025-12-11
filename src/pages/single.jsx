import Hero from "@/sections/Hero";
import Blog from "@/sections/Blog";
import Related from "@/sections/Related";

export const metadata = {
  title: 'Single Blog',
};

export default () => {
  return (
    <>
      <Hero label="single-blog" />
      <Blog />
      <Related />
    </>
  )
};