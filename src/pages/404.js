import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';

const NotFoundPage = ({ data }) => (
  <Layout>
    <section id="main" className="wrapper">
      <div className="inner">
          <h1 className="major">Page not found</h1>
          <span className="image fit">
              <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} alt="Page not found" />
          </span>
          <p>You have hit a route that doesn't exist. Try going to <Link to="/">Homepage</Link></p>
      </div>
    </section>
  </Layout>
);

export default () => (
    <StaticQuery
        query={graphql`
          query NotFoundQuery {
            allFile (filter:{
                relativePath: {eq: "404.jpg"}
              }){
              edges {
                node {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data) => <NotFoundPage data={data} />}
    />
);
