import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default () => {
  return (
    <Layout>
      <SEO title="Page not Found | Camping Forest" />
      <section className="section error-section">
        <div>
          <h1>Page not Found</h1>
          <Link
            to="/"
            aria-label="link"
            className="link"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  )
}
