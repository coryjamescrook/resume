import profilePhoto from '../img/cory-greece.jpeg'

function Bio({ heading, subHeading, blurb }) {
  return (
    <div id="bio">
      <h1>{heading}</h1>
      { subHeading ? <h2>{subHeading}</h2> : null }
      <img className="bio__img" src={profilePhoto} alt="Cory Crook - Profile Photo" />
      <div className="bio__blurb" dangerouslySetInnerHTML={{ __html: blurb }} />
    </div>
  )
}

export default Bio