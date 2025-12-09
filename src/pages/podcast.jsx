import Hero from "@/sections/Hero"
import LatestEpisode from "@/sections/LatestEpisode"
import Pod from "@/sections/Pod"

export const metadata = {
  title: 'Podcats',
}

export default () => {
  return (
    <>
      <Hero mode="swirl" label="podcast" />
      <LatestEpisode />
      <Pod />
    </>
  )
}