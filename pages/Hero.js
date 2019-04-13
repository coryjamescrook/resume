const Hero = ({ heading, subHeading }) => {
  return (
    <div id="hero">
      <h1>{heading}</h1>
      { subHeading ? <h2>{subHeading}</h2> : null }
    </div>
  )
}

export default Hero