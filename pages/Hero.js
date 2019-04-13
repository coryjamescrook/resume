const Hero = ({ hero }) => {
  return (
    <section id="hero">
      <div className="hero__content">
        <h1 className="hero__heading">{hero.heading}</h1>
        { hero.subHeading ? <h2 className="hero__sub-heading">{hero.subHeading}</h2> : null }
      </div>
    </section>
  )
}

export default Hero