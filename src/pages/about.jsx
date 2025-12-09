import Hero from "@/sections/Hero";
import History from "@/sections/History";
import Our from "@/sections/Our";
import Pod from "@/sections/Pod";
import Support from "@/sections/Support";

export const metadata = {
  title: 'About',
}

export default () => {
  return (
    <>
      <Hero mode="swirl" label="about" />
      <History />
      <Our />
      <Support />
      <Pod />
    </>
  )
}