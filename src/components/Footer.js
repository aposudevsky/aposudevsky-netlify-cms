import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer id="footer" className="wrapper style1-alt">
				<div className="inner">
					<ul className="menu">
						<li>&copy; Andrey Posudevsky. All rights reserved.</li><li>Design: <Link to="http://html5up.net">HTML5 UP</Link></li>
					</ul>
				</div>
			</footer>
    )
  }
};

export default Footer
