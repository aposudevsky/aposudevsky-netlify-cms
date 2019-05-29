import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <section id="main" className="wrapper">
      <div className="inner">
          <h1 className="major">Page not found</h1>
          <p>You have hit a route that doesn't exist. Try going to <Link to="/">Homepage</Link></p>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage
