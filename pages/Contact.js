const Contact = ({ contact }) => {
  return (
    <div id="contact">
      <h1>{contact.heading}</h1>
      {contact.subHeading ? <h2>{contact.subHeading}</h2> : null}
      <a href={`mailto:${contact.email}`}>
        Email
      </a>
      <a href={contact.github} target="_blank">
        Github
      </a>
      <a href={contact.linkedIn} target="_blank">
        LinkedIn
      </a>
    </div>
  )
}

export default Contact