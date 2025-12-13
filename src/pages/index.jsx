import Pod from "@/sections/Pod";
import Benefits from "@/sections/Benefits";
import RecentEpisodes from "@/sections/RecentEpisodes";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Listeners from "@/sections/Listeners";
import News from "@/sections/News";
import Sponsor from "@/sections/Sponsor";

export const metadata = {
  title: 'Home',
};

export default () => {
  return (
    <>
      <Hero label='home'/>
      <Intro />
      <Listeners />
      <Benefits />
      <RecentEpisodes />
      <Sponsor />
      <News />
      <Pod />
    </>
  )
};