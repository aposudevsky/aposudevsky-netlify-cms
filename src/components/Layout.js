import React from 'react'
import {Helmet} from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './assets/sass/main.scss'
import useSiteMetadata from './SiteMetadata'
import CookieWall from './layout/CookieWall';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet
        bodyAttributes={{
            class: ''
        }}>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Navbar />
      <div id="wrapper">{children}</div>
      <Footer />

      <CookieWall />
    </div>
  )
};

export default TemplateWrapper
