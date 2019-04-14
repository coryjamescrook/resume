const Skills = ({ skills }) => {
  const createStarRatingClassName = (rating) => {
    const mapping = {
      1: 'one-star',
      2: 'two-stars',
      3: 'three-stars',
      4: 'four-stars',
      5: 'five-stars'
    }

    return mapping[rating] || ''
  }
  
  return (
    <section id="skills">
      <h1 className="skills__heading u-upcase">{skills.heading}</h1>
      {skills.subHeading ? <h2 className="skills__sub-heading u-lowercase">{skills.subHeading}</h2> : null }
      <div className="skills__stack-list">
        { skills.stack.map((s, i) => (
          <div key={i} className="skills__stack-item skill-card u-margin-top-4">
            <h3>{s.skill}</h3>
            <div className={`${createStarRatingClassName(s.level)} rating`}/>
          </div>
        )) }
      </div>
    </section>
  )
}

export default Skills