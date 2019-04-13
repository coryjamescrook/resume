function Bio({ heading, subHeading, image, blurb }) {
  return (
    <div id="bio">
      <h1>{heading}</h1>
      { subHeading ? <h2>{subHeading}</h2> : null }
      <img className="bio__img" src={image} alt="Cory Crook - Profile Photo" />
      <div className="bio__blurb" dangerouslySetInnerHTML={{ __html: blurb }} />
    </div>
  )
}

export default Bio