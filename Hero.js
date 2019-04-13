const Hero = ({ hero }) => {
  return (
    <div id="hero">
      <h1>{hero.heading}</h1>
      { hero.subHeading ? <h2>{hero.subHeading}</h2> : null }
    </div>
  )
}

export default Hero