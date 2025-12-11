import Hero from "@/sections/Hero";
import LatestPosts from "@/sections/LatestPosts";


export const metadata = {
  title: 'Blog',
};

export default () => {
  return (
    <>
      <Hero mode="swirl" label="blog" />
      <LatestPosts />
    </>
  )
};