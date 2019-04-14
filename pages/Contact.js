const Contact = ({ contact }) => {
  return (
    <section id="contact">
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
      <h1 className="contact__heading u-upcase">{contact.heading}</h1>
      {contact.subHeading ? <h2 className="contact__sub-heading u-lowercase">{contact.subHeading}</h2> : null}
      <div className="contact__content">
        <a href={`mailto:${contact.email}`} className="contact__email u-db">
          <i class="fa fa-envelope-square" />
        </a>
        <a href={contact.github} target="_blank" className="contact__github u-db">
          <i class="fa fa-github-square" />
        </a>
        <a href={contact.linkedIn} target="_blank" className="contact__linkedin u-db">
          <i class="fa fa-linkedin-square" />
        </a>
      </div>
    </section>
  )
}

export default Contact