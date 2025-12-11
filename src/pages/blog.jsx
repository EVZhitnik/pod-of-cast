import Hero from "@/sections/Hero";
import LatestPosts from "@/sections/LatestPosts";
import Pod from "@/sections/Pod";

export const metadata = {
  title: 'Blog',
};

export default () => {
  return (
    <>
      <Hero mode="swirl" label="blog" />
      <LatestPosts />
      <Pod />
    </>
  )
};