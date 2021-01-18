import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const facilities = ({ data }) => {
  const {
    allAirtable: { nodes: facilities },
  } = data
  return (
    <Layout>
      <SEO title="Facilities | Camping Forest" />
      <section className="facilities">
        <div className="facilities-inner">
          <h1>Our Facilities:</h1>
          <ul>
            {facilities.map((item, index) => {
              return <li key={index}>{item.data.text}</li>
            })}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "facilities" } }) {
      nodes {
        data {
          text
        }
      }
    }
  }
`

export default facilities
