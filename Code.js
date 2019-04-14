const Code = ({ resume, toggleCodeAction }) => {
  return (
    <section id="code">
      <h1 className="code__heading">{`class ${resume.hero.heading.replace(' ', '')} extends FullStackDev {`}</h1>

      <h1 className="code__heading">{`}`}</h1>
    </section>
  )
}

export default Code