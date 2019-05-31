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
                        window.location.pathname === '/' &&
                        <>
                            <li><AnchorLink href="#intro">Welcome</AnchorLink></li>
                            <li><AnchorLink href="#services">What I do</AnchorLink></li>
                            <li><AnchorLink href="#three">Get in touch</AnchorLink></li>
                        </>
                    }
                    {
                        window.location.pathname !== '/' &&
                        <>
                            <li><Link to="/#intro">Welcome</Link></li>
                            <li><Link to="/#services">What I do</Link></li>
                            <li><Link to="/#three">Get in touch</Link></li>
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
