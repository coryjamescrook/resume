import resume from '../content'

import Hero from './Hero'
import Bio from './Bio'

function Home() {
  return (
    <div id="resume">
      <Hero heading={resume.hero.heading} subHeading={resume.hero.subHeading} />
      <Bio
        heading={resume.bio.heading}
        subHeading={resume.bio.subHeading}
        blurb={resume.bio.blurb}
      />
    </div>
  )
}

export default Home