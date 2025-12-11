import Hero from "@/sections/Hero";
import Blog from "@/sections/Blog";

export const metadata = {
  title: 'Single Blog',
};

export default () => {
  return (
    <>
      <Hero label="single-blog" />
      <Blog />
    </>
  )
};