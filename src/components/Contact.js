import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Contact = () => {
  const {
    allAirtable: { nodes: contactItem },
  } = useStaticQuery(query)
  return (
    <section className="section contact">
      <div className="contact-inner">
        <div className="contact__info">
          {contactItem.map(({ data }) => {
            return (
              <article className="contact-item" key={data.id}>
                <h2>
                  {data.name} : <span>{data.value} </span>
                </h2>
              </article>
            )
          })}
        </div>
        <iframe
          className="contact-map"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d853025.8806064668!2d74.50875409275217!3d33.36185345933536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1dce0d4027b07%3A0xd8ebf3a6cd09cffa!2sSunset%20Peak!5e0!3m2!1sen!2spl!4v1610964867417!5m2!1sen!2spl"
          title="camping maps"
          aria-hidden="false"
        ></iframe>
      </div>
    </section>
  )
}

const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "contact" } }
      sort: { fields: id, order: ASC }
    ) {
      nodes {
        data {
          value
          name
          id
        }
      }
    }
  }
`

export default Contact
