import profilePhoto from '../img/cory-greece.jpeg'

const Bio = ({ bio }) => {
  return (
    <div id="bio">
      <h1>{bio.heading}</h1>
      { bio.subHeading ? <h2>{bio.subHeading}</h2> : null }
      <img className="bio__img" src={profilePhoto} alt="Cory Crook - Profile Photo" />
      <div className="bio__blurb" dangerouslySetInnerHTML={{ __html: bio.blurb }} />
    </div>
  )
}

export default Bio