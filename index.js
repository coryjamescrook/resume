import resume from '../content'

import Hero from './Hero'

function Home() {
  return (
    <div id="resume">
      <Hero heading={resume.hero.heading} subHeading={resume.hero.subHeading} />
    </div>
  )
}

export default Home