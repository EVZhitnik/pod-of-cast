import Hero from "@/sections/Hero"
import Intro from "@/sections/Intro"

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero label='home'/>
      <Intro />
    </>
  )
}
