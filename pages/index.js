import * as React from 'react'

import resume from '../content'

import Hero from './Hero'
import Bio from './Bio'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'
import Code from './Code'

import '../styles/base.css'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showCode: false
    }
  }

  toggleShowCode = () => {
    this.setState({
      showCode: !this.state.showCode
    })
  }
  
  render() {
    const { showCode } = this.state

    const contents = showCode
      ? <Code resume={resume} toggleCodeAction={this.toggleShowCode} />
      : <React.Fragment>
        <Hero hero={resume.hero} subHeadingAction={this.toggleShowCode} />
          <Bio bio={resume.bio} />
          <Experience experience={resume.experience} />
          <Skills skills={resume.skills} />
          <Contact contact={resume.contact} />
        </React.Fragment>
    
    return (
      <div id="resume" className="container">
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,400,400i,500,5001,700,700i,900,900i" rel="stylesheet" />
        { contents }
      </div>
    )
  }
}

export default Home