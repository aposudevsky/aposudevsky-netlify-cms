import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Contacts from '../components/Contacts'

export const IndexPageTemplate = ({
  title,
  subheading,
  intro,
}) => (

<>
  <section id="intro" class="wrapper style1 fullscreen fade-up">
    <div class="inner">
      <h1>{title}</h1>
      <p>{subheading}</p>
      <ul class="actions">
        <li><a href="#services" class="button scrolly">Learn more</a></li>
      </ul>
    </div>
  </section>

  <Features gridItems={intro.blurbs} heading={intro.heading} subheading={intro.description} />
  <Contacts />
</>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        description
        intro {
          blurbs {
            icon
            text
            title
          }
          heading
          description
        }
      }
    }
  }
`;
