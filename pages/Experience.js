const Experience = ({ experience }) => {
    const jobCards = experience.jobs.map((job, i) => (
      <div className="experience__job card u-rounded one-half column" key={i}>
        <h3 className="experience__job-company">{job.company}</h3>
        <h4 className="experience__job-title">{job.title}</h4>
        <h5 className="experience__job-dates">{job.dates}</h5>
        <ul className="experience__job-duties">
          { job.duties.map((d, i) => <li key={i} className="experience__job-duty">{d}</li>) }
        </ul>
      </div>
    ))

    return (
      <section id="experience">
        <h1 className="experience__heading u-upcase">{experience.heading}</h1>
        {experience.subHeading ? <h2 className="experience__sub-heading u-lowercase">{experience.subHeading}</h2> : null }
        <div className="experience__jobs row">
          { jobCards }
        </div>
      </section>
    )
}

export default Experience