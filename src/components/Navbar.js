import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <section id="sidebar">
				<div class="inner">
					<nav>
						<ul>
							<li><AnchorLink href="#intro">Welcome</AnchorLink></li>
							<li><AnchorLink href="#services">What I do</AnchorLink></li>
							<li><AnchorLink href="#three">Get in touch</AnchorLink></li>
						</ul>
					</nav>
				</div>
			</section>
    )
  }
}

export default Navbar
