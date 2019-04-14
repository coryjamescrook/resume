const Experience = ({ experience }) => {
  const jobCards = () => {
    const numOfJobs = experience.jobs.length
    let c = []

    for (var i = 0; i < experience.jobs.length; i += 2) {
      let job = experience.jobs[i]
      let nextJob = experience.jobs[i + 1]
      if (i === numOfJobs - 1) {
        c.push(
          <div className="experience__jobs row">
            <div className="experience__job card u-rounded one-half column" key={i}>
              <h3 className="experience__job-company">{job.company}</h3>
              <h4 className="experience__job-title">{job.title}</h4>
              <h5 className="experience__job-dates">{job.dates}</h5>
              <ul className="experience__job-duties">
                {job.duties.map((d, i) => <li key={i} className="experience__job-duty">{d}</li>)}
              </ul>
            </div>
          </div>
        )
      } else if (i > numOfJobs) {
        // do nothing
      } else {
        c.push(
          <div className="experience__jobs row">
            <div className="experience__job card u-rounded one-half column" key={i}>
              <h3 className="experience__job-company">{job.company}</h3>
              <h4 className="experience__job-title">{job.title}</h4>
              <h5 className="experience__job-dates">{job.dates}</h5>
              <ul className="experience__job-duties">
                {job.duties.map((d, i) => <li key={i} className="experience__job-duty">{d}</li>)}
              </ul>
            </div>
            <div className="experience__job card u-rounded one-half column" key={i + 1}>
              <h3 className="experience__job-company">{nextJob.company}</h3>
              <h4 className="experience__job-title">{nextJob.title}</h4>
              <h5 className="experience__job-dates">{nextJob.dates}</h5>
              <ul className="experience__job-duties">
                { nextJob.duties.map((d, i) => <li key={i} className="experience__job-duty">{d}</li>)}
              </ul>
            </div>
          </div>
        )
      }
    }

    return c
  }
  // const jobCards = experience.jobs.map((job, i) => {
  //   return (
  //     <div className="experience__job card u-rounded one-half column" key={i}>
  //       <h3 className="experience__job-company">{job.company}</h3>
  //       <h4 className="experience__job-title">{job.title}</h4>
  //       <h5 className="experience__job-dates">{job.dates}</h5>
  //       <ul className="experience__job-duties">
  //         { job.duties.map((d, i) => <li key={i} className="experience__job-duty">{d}</li>) }
  //       </ul>
  //     </div>
  //   )
  // })

  return (
    <section id="experience">
      <h1 className="experience__heading u-upcase">{experience.heading}</h1>
      { experience.subHeading ? <h2 className="experience__sub-heading u-lowercase">{experience.subHeading}</h2> : null }
      <div className="experience__jobs">
        { jobCards().map(c => c) }
      </div>
    </section>
  )
}

export default Experience