const Experience = ({ experience }) => {
    const jobCards = experience.jobs.map((job, i) => (
      <Job
        key={i}
        company={job.company}
        title={job.title}
        dates={job.dates}
        duties={job.duties}
      />
    ))

    return (
      <div id="experience">
        <h1>{experience.heading}</h1>
        { experience.subHeading ? <h2>{experience.subHeading}</h2> : null }
        <div className="experience__jobs">
          { jobCards }
        </div>
      </div>
    )
}

const Job = ({ key, company, title, dates, duties }) => {
  return (
    <div className="experience__job card" key={key}>
      <h3 className="experience__job-company">{company}</h3>
      <h4 className="experience__job-title">{title}</h4>
      <h5 className="experience__job-dates">{dates}</h5>
      <ul className="experience__job-duties">
        { duties.map((d, i) => <li key={i} className="experience__job-duty">{d}</li> )}
      </ul>
    </div>
  )
}

export default Experience