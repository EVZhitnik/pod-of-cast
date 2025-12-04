import Benefits from "@/sections/Benefits"
import Hero from "@/sections/Hero"
import Intro from "@/sections/Intro"
import Listeners from "@/sections/Listeners"

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero label='home'/>
      <Intro />
      <Listeners />
      <Benefits />
    </>
  )
}
