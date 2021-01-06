import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Contacts from '../components/Contacts'
import Img from 'gatsby-image'

export const IndexPageTemplate = ({
  title,
  subheading,
  image,
  intro,
}) => (

<>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: subheading}}></div>
      <ul className="actions">
        <li><a href="#services" className="button scrolly">Learn more</a></li>
      </ul>
    </div>
  </section>

  <section id="vision" className="wrapper style2 spotlights">
    <section>
      <a className="image"><Img fluid={image.childImageSharp.fluid} alt={'Andrey Posudevsky'} /></a>
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
    </section>
    <section>
      <a class="image"></a>
      <div class="content">
        <div class="inner">
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

  console.log(data);
  

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
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
