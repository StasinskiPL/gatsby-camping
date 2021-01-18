import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title }) => {
  return (
    <Helmet title={title} htmlAttributes={{ lang: "en" }}>
      <meta
        name="description"
        content="Camping Forest, best place to spend leisure time, check out prices and facilities."
      ></meta>
    </Helmet>
  )
}

export default SEO
