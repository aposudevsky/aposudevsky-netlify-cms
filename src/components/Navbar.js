import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Navbar extends React.Component {

  render() {
    return (
      <section id="sidebar">
        <div className="inner">
            <nav>
                <ul>
                    {
                        typeof window !== 'undefined' &&
                        window.location.pathname === '/' &&
                        <>
                            <li><AnchorLink href="#intro">Welcome</AnchorLink></li>
                            <li><AnchorLink href="#vision">Vision</AnchorLink></li>
                            <li><AnchorLink href="#technologies">Technologies</AnchorLink></li>
                            <li><AnchorLink href="#contact">Get in touch</AnchorLink></li>
                        </>
                    }
                    {
                        typeof window !== 'undefined' &&
                        window.location.pathname !== '/' &&
                        <>
                            <li><Link to="/#intro">Welcome</Link></li>
                            <li><Link to="/#vision">Vision</Link></li>
                            <li><Link to="/#technologies">Technologies</Link></li>
                            <li><Link to="/#contact">Get in touch</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </div>
      </section>
    )
  }
}

export default Navbar
