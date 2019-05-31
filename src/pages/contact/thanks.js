import React from 'react'
import Layout from '../../components/Layout'
import Img from "gatsby-image";
import {graphql, StaticQuery} from "gatsby";

const ThankYouPage = ({ data }) => (
  <Layout>
    <section id="main" className="wrapper">
      <div className="inner">
          <h1 className="major">You are awesome!</h1>
          <span className="image fit">
              <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} alt="Page not found" />
          </span>
          <p>Thank you for your interest! I will get back to you shortly</p>
      </div>
    </section>
  </Layout>
);

export default () => (
    <StaticQuery
        query={graphql`
          query ThankYouPageQuery {
            allFile (filter:{
                relativePath: {eq: "thanks.jpg"}
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
        render={(data) => <ThankYouPage data={data} />}
    />
);
