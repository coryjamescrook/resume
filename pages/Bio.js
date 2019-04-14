import profilePhoto from '../img/cory-greece.jpeg'

const Bio = ({ bio }) => {
  return (
    <section id="bio">
      <h1 className="bio__heading u-upcase">{bio.heading}</h1>
      {bio.subHeading ? <h2 className="bio__sub-heading u-lowercase">{bio.subHeading}</h2> : null }
      <img className="bio__img u-round" src={profilePhoto} alt="Cory Crook - Profile Photo" />
      <div className="bio__blurb" dangerouslySetInnerHTML={{ __html: bio.blurb }} />
    </section>
  )
}

export default Bio