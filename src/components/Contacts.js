import React from 'react'
import ContactForm from './ContactForm';

const Contacts = class extends React.Component {
  render() {
    return (
			<section id="three" className="wrapper style1 fade-up">
				<div className="inner">
					<h2>Get in touch</h2>
					<p>Let's discuss how can I help your business grow</p>
					<div className="split style1">
						<section>
							<ContactForm />
						</section>
						<section>
							<ul className="contact">
								<li>
									<h3>Email</h3>
									<a href="mailto:aposudevsky@gmail.com">aposudevsky@gmail.com</a>
								</li>
								<li>
									<h3>Social</h3>
									<ul className="icons">
										<li><a href="https://twitter.com/APosudevsky" className="fa-twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><span className="label">Twitter</span></a></li>
										<li><a href="https://www.facebook.com/aposudevsky" className="fa-facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><span className="label">Facebook</span></a></li>
										<li><a href="https://github.com/aposudevsky" className="fa-github" target="_blank" rel="noopener noreferrer" aria-label="Github"><span className="label">GitHub</span></a></li>
										<li><a href="https://www.instagram.com/aposudevsky/" className="fa-instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span className="label">Instagram</span></a></li>
										<li><a href="https://www.linkedin.com/in/andrey-posudevsky/" className="fa-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><span className="label">LinkedIn</span></a></li>
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
