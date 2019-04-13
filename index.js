import resume from '../content'

import Hero from './Hero'
import Bio from './Bio'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'

import '../styles/base.css'

function Home() {
  return (
    <div id="resume">
      <Hero hero={resume.hero} />
      <Bio bio={resume.bio} />
      <Experience experience={resume.experience} />
      <Skills skills={resume.skills} />
      <Contact contact={resume.contact} />
    </div>
  )
}

export default Home