import React from 'react'
import { Link } from 'gatsby'
import ContactForm from './ContactForm';

const Contacts = class extends React.Component {
  render() {
    return (
			<section id="three" className="wrapper style1 fade-up">
				<div className="inner">
					<h2>Get in touch</h2>
					<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
					<div className="split style1">
						<section>
							<ContactForm />
						</section>
						<section>
							<ul className="contact">
								<li>
									<h3>Email</h3>
									<a href="mailto:hi@andrey.vision">hi@andrey.vision</a>
								</li>
								<li>
									<h3>Phone</h3>
									<span>(+31) 629-7-444-96</span>
								</li>
								<li>
									<h3>Social</h3>
									<ul className="icons">
										<li><Link to="https://twitter.com/APosudevsky" className="fa-twitter"><span className="label">Twitter</span></Link></li>
										<li><Link to="https://www.facebook.com/aposudevsky" className="fa-facebook"><span className="label">Facebook</span></Link></li>
										<li><Link to="https://github.com/aposudevsky" className="fa-github"><span className="label">GitHub</span></Link></li>
										<li><Link to="https://www.instagram.com/aposudevsky/" className="fa-instagram"><span className="label">Instagram</span></Link></li>
										<li><Link to="https://www.linkedin.com/in/andrey-posudevsky/" className="fa-linkedin"><span className="label">LinkedIn</span></Link></li>
									</ul>
								</li>
							</ul>
						</section>
					</div>
				</div>
			</section>
    )
  }
}

export default Contacts
