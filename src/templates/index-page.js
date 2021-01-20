import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Contacts from '../components/Contacts'
import Img from 'gatsby-image'
import { Reviews } from '../components/Reviews'

export const IndexPageTemplate = ({
  title,
  subheading,
  image,
  image2,
  intro,
}) => (

<>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: subheading}}></div>
      <ul className="actions">
        <li>
          <a href="#vision" className="button scrolly">Learn more</a>
        </li>
        <li>
          <a href="https://calendly.com/aposudevsky/intro-call" target={'__blank'} className="button primary">Schedule a free call</a>
        </li>
      </ul>
    </div>
  </section>

  <section id="vision" className="wrapper style2 spotlights">
    <section>
      
      <div className="content">
        <div className="inner">
          <h2>Vision</h2>
          <p>Recently I made a switch from employee with role of Technical lead / Architect to contract jobs. 
            Following transparency principle, I would like to offer my clients flexibility, 
            that not every web agency can offer.
          </p>
          <p>
            I put value in honest and trustful relationships with my clients even on short-term projects. 
            Keeping pace with latest technogies, I provide services as Technical lead / Full Stack Architect 
            and take care of both building websites from scratch and supporting existing websites.
          </p>
          
        </div>
      </div>
      <a className="image"><Img fluid={image.childImageSharp.fluid} alt={'Andrey Posudevsky'} /></a>
    </section>
    <section>
      <a className="image"><Img fluid={image2.childImageSharp.fluid} alt={'Andrey Posudevsky'} /></a>
      <div className="content">
        <div className="inner">
          <h2>Approach</h2>
          <p>During development and communication I follow these key principles:</p>
          <ul className="alt pl">
            <li>Transparency</li>
            <li>Effective communication</li>
            <li>Innovation</li>
            <li>Proactive approach</li>
            <li>Quality</li>
            <li>Flexibility</li>
          </ul>
        </div>
      </div>
    </section>
  </section>

  <Features gridItems={intro.blurbs} heading={intro.heading} subheading={intro.description} />

  <Reviews />
  <Contacts />
</>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
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
        image2={frontmatter.image2}
        title={frontmatter.title}
        subheading={data.markdownRemark.html}
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
      html
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 501, quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 501, quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
