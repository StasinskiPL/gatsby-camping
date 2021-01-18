import React from "react"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Services from "../components/Services"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home | Camping Forest"/>
      <Hero />
      <Services />
      <Contact />
    </Layout>
  )
}
