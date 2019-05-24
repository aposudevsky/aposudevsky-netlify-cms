import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

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
							<li><a href="#intro">Welcome</a></li>
							<li><a href="#one">Who we are</a></li>
							<li><a href="#two">What we do</a></li>
							<li><a href="#three">Get in touch</a></li>
						</ul>
					</nav>
				</div>
			</section>
    )
  }
}

export default Navbar
