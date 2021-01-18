import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const rates = ({ data }) => {
  const {
    allAirtable: { nodes: items },
    ratesInfo: { nodes: info },
  } = data

  const s1 = info.find(i => i.data.name === "Season_I")
  const s2 = info.find(i => i.data.name === "Season_II")
  const pricesInfo = info.find(i => i.data.name === "currency")
  return (
    <Layout>
      <SEO title="Rates | Camping Forest" />
      <section className="rates section">
        <div className="rates-inner">
          <table>
            <thead>
              <tr className="table-header">
                <th>{""}</th>
                <th>{s1.data.info}</th>
                <th>{s2.data.info}</th>
              </tr>
            </thead>

            <tbody>
              {items
                .sort((a, b) => a.data.id - b.data.id)
                .map(({ data }) => {
                  return (
                    <tr key={data.id}>
                      <td>{data.name}</td>
                      <td>{data.Season_I}</td>
                      <td>{data.Season_II}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
          <p>{pricesInfo.data.info || null}</p>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "prices" } }
      sort: { fields: data___id, order: ASC }
    ) {
      nodes {
        data {
          id
          name
          Season_I
          Season_II
        }
      }
    }
    ratesInfo: allAirtable(filter: { table: { eq: "ratesInfo" } }) {
      nodes {
        data {
          info
          name
        }
      }
    }
  }
`

export default rates
