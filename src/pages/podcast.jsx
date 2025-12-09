import Hero from "@/sections/Hero"
import LatestEpisode from "@/sections/LatestEpisode"

export const metadata = {
  title: 'Podcats',
}

export default () => {
  return (
    <>
      <Hero mode="swirl" label="podcast" />
      <LatestEpisode />
    </>
  )
}