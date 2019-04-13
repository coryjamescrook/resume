import resume from '../content'

import Hero from './Hero'
import Bio from './Bio'
import Experience from './Experience'
import Skills from './Skills'

function Home() {
  return (
    <div id="resume">
      <Hero hero={resume.hero} />
      <Bio bio={resume.bio} />
      <Experience experience={resume.experience} />
      <Skills skills={resume.skills} />
    </div>
  )
}

export default Home