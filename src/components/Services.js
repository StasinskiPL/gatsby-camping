import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Service from "./Service"

const Services = () => {
  const {allAirtable: { nodes: services}} = useStaticQuery(query)
  return (
    <section className="services-section">
      <div className="services">
        {services.map((service, index) => (
          <Service key={index} {...service.data} />
        ))}
      </div>
    </section>
  )
}

const query = graphql`
  {
    allAirtable(filter: {table: {eq: "services"}}) {
      nodes {
        data {
          name
          description
          image {
            localFiles {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Services
