import Hero from "@/sections/Hero";
import History from "@/sections/History";

export const metadata = {
  title: 'About',
}

export default () => {
  return (
    <>
      <Hero mode="swirl" label='about'/>
      <History />
    </>
  )
}