import * as React from 'react'

class Code extends React.PureComponent {
  
  jobDutiesMap = (duties) => {
    return duties.map((d, i) => (
      <React.Fragment key={i}>
        <span className="ct indent-5">{`'${d}'${i < duties.length - 1 ? ',' : ''}`}</span><br />
      </React.Fragment>
    ))
  }

  get jobMap() {
    const { resume } = this.props

    return resume.experience.jobs.map(((job, i) => (
      <React.Fragment key={i}>
        <span className="indent-3">{`{`}</span><br />
          <span className="indent-4">{`company: '${job.company}',`}</span> <br />
          <span className="indent-4">{`title: '${job.title}',`}</span> <br />
          <span className="indent-4">{`dates: '${job.dates}',`}</span> <br />
          <span className="indent-4">duties: [</span> <br />
            { this.jobDutiesMap(job.duties) }
          <span className="indent-4">]</span> <br />
        <span className="indent-3">{`}${i < resume.experience.jobs.length - 1 ? ',' : ''}`}</span><br />
      </React.Fragment>
    )))
  }

  get skillsMap() {
    const { resume } = this.props

    return resume.skills.stack.map((skill, i) => (
      <React.Fragment key={i}>
        <span className="indent-3">{`{`}</span><br />
          <span className="indent-4">{`skill: '${skill.skill}',`}</span><br />
          <span className="indent-4">{`level: ${skill.level}`}</span><br />
        <span className="indent-3">{`}${i < resume.skills.stack.length - 1 ? ',' : ''}`}</span><br />
      </React.Fragment>
    ))
  }
  
  render() {
    const { resume, toggleCodeAction } = this.props
    
    return (
      <section id="code">
        <h3 className="code__goback" onClick={toggleCodeAction}>{`< back`}</h3>
        <pre>
          <code className="code__codeblock">
            <span className="ct">class</span><span className="ct">FullStackDev</span><span className="ct">extends</span><span className="ct">Developer</span><span className="ct">{`{`}</span><br />
            <span className="ct indent-1">constructor()</span><span className="ct">{`{`}</span><br />
              <span className="ct indent-2">super()</span><br />
              <br />
              <span className="indent-2">{`this.name = '${resume.hero.heading}'`}</span><br />
              <span className="indent-2">{`this.docType = '${resume.hero.subHeading}'`}</span><br />
              <span className="indent-2">{`this.bio = '${resume.bio.blurb}'`}</span><br />
              <span className="indent-2">this.jobs = [</span><br />
                { this.jobMap }
              <span className="indent-2">],</span><br />
              <span className="indent-2">{`this.skills = [`}</span><br />
                { this.skillsMap }
              <span className="indent-2">{`],`}</span><br/>
              <span className="ct indent-2">this.contact =</span><span>{`{`}</span><br />
                <span className="indent-3">{`email: ${resume.contact.email},`}</span><br/>
                <span className="indent-3">{`github: ${resume.contact.github},`}</span><br/>
                <span className="indent-3">{`linkedIn: ${resume.contact.linkedIn}`}</span><br/>
              <span className="indent-2">{`}`}</span><br />
            <span className="indent-1">{`}`}</span><br/>
            <span>{`}`}</span>
          </code>
        </pre>
        <p className="code__footnote">{`* I would never actually hardcode these values into a class, but this implementation was way more than anticpiated for a simple easter egg, so ¯\\_(ツ)_/¯`}</p>
      </section>
    )
  }
}

export default Code