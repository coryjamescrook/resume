const Contact = ({ contact }) => {
  return (
    <section id="contact">
      <h1 className="contact__heading">{contact.heading}</h1>
      {contact.subHeading ? <h2 className="contact__sub-heading">{contact.subHeading}</h2> : null}
      <a href={`mailto:${contact.email}`} className="contact__email link">
        Email
      </a>
      <a href={contact.github} target="_blank" className="contact__github link">
        Github
      </a>
      <a href={contact.linkedIn} target="_blank" className="contact__linkedin link">
        LinkedIn
      </a>
    </section>
  )
}

export default Contact