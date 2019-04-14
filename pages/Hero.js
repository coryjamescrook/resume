const Hero = ({ hero, subHeadingAction }) => {
  return (
    <section id="hero">
      <div className="hero__content">
        <h1 className="hero__heading u-upcase">{hero.heading}</h1>
        {
          hero.subHeading
            ? <h2 onClick={subHeadingAction} className="hero__sub-heading link u-lowercase">{`{ ${hero.subHeading} }`}</h2>
            : null
        }
      </div>
    </section>
  )
}

export default Hero