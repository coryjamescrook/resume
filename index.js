import resume from '../content'

import Hero from './Hero'
import Bio from './Bio'
import Experience from './Experience'
import Skills from './Skills'

function Home() {
  return (
    <div id="resume">
      <Hero heading={resume.hero.heading} subHeading={resume.hero.subHeading} />
      <Bio
        heading={resume.bio.heading}
        subHeading={resume.bio.subHeading}
        blurb={resume.bio.blurb}
      />
      <Experience
        heading={resume.experience.heading}
        subHeading={resume.experience.subHeading}
        jobs={resume.experience.jobs}
      />
      <Skills skills={resume.skills} />
    </div>
  )
}

export default Home