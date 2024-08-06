import React from 'react'
import Layout from '../components/Layout'

const PrivacyPolicy = ({ data }) => (
  <Layout>
    <section id="main" className="wrapper">
      <div className="inner">
          <h1 className="major">Privacy Policy</h1>
          <p>
            Welcome to my website. I value your privacy and am committed to protecting your personal information. This Privacy Policy outlines what information I collect, how I use it, and your rights regarding your data.
          </p>
          <h3>Information I Collect</h3>
          <p>Contact Form: When you fill out the contact form, I collect your name and email address to respond to your inquiries.<br />
            Analytical Cookies: I use analytical cookies to understand how visitors interact with my website. These cookies help me improve my website by collecting anonymous data about page views and site usage.
          </p>
          <h3>How I Use Your Information</h3>
          <p>
            Responding to Inquiries: I use the information from the contact form to respond to your messages.<br />
            Website Improvement: Analytical cookies help me analyze website performance and improve user experience.
          </p>
          <h3>Data Sharing</h3>
          <p>
            I do not sell, trade, or share your personal information with third parties.
          </p>
          <h3>Your Rights</h3>
          <p>
            You have the right to:
            Access: Request access to the personal information I hold about you.<br />
            Delete: Request the deletion of your personal information.<br />
            To exercise these rights, please contact me using the details below.
          </p>
          <h3>Contact Me</h3>
          <p>If you have any questions about this Privacy Policy, please contact me at:
            Email: <a href="mailto:aposudevsky@gmail.com">aposudevsky@gmail.com</a> or fill out the <a href="/#contact">contact form</a> on this website.
            Thank you for visiting my website. Your privacy is important to me.
          </p>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;