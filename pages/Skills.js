const Skills = ({ skills }) => {
  return (
    <div id="skills">
      <h1>{skills.heading}</h1>
      { skills.subHeading ? <h2>{skills.subHeading}</h2> : null }
      <div className="skills__stack-list">
        { skills.stack.map((s, i) => <Skill key={i} item={s} /> ) }
      </div>
    </div>
  )
}

const Skill = ({ key, item }) => {
  return (
    <div key={key} className="skills__stack-item card">
      <h3>{item.skill}</h3>
      <h4>{`${item.level} / 5`}</h4>
    </div>
  )
}

export default Skills