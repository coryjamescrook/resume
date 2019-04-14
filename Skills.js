const Skills = ({ skills }) => {
  return (
    <section id="skills">
      <h1 className="skills__heading u-upcase">{skills.heading}</h1>
      {skills.subHeading ? <h2 className="skills__sub-heading u-lowercase">{skills.subHeading}</h2> : null }
      <div className="skills__stack-list">
        { skills.stack.map((s, i) => (
          <div key={i} className="skills__stack-item skill-card">
            <h3>{s.skill}</h3>
            <h4>{`${s.level} / 5`}</h4>
          </div>
        )) }
      </div>
    </section>
  )
}

export default Skills