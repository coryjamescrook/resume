const Hero = ({ hero }) => {
  return (
    <div id="hero">
      <h1 className="hero__heading">{hero.heading}</h1>
      { hero.subHeading ? <h2 className="hero__sub-heading">{hero.subHeading}</h2> : null }
    </div>
  )
}

export default Hero