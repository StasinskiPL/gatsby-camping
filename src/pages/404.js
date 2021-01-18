import React from 'react'
import {Link} from "gatsby"
import Layout from '../components/Layout'

export default () => {
    return (
        <Layout>
        <section className="section error-section">
            <div>
            <h1>Page not Found</h1>
            <Link to="/" className="link">Back to Home</Link>
            </div>
        </section>
        </Layout>
    )
}

