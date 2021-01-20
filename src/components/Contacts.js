import React from 'react'
import ContactForm from './ContactForm';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { FaGithubSquare } from '@react-icons/all-files/fa/FaGithubSquare';
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';

const Contacts = class extends React.Component {
  render() {
    return (
			<section id="contact" className="wrapper style1 fade-up">
				<div className="inner">
					<h2>Get in touch</h2>
					<p>Let's discuss how I can help your business grow</p>
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
										<li>
											<a href="https://twitter.com/APosudevsky" className="fa-twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
												<FaTwitterSquare size={'1.5em'} color={'#fff'} />
											</a>
										</li>
										<li>
											<a href="https://www.facebook.com/aposudevsky" className="fa-facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
												<FaFacebookSquare size={'1.5em'} color={'#fff'} />
											</a>
										</li>
										<li>
											<a href="https://github.com/aposudevsky" className="fa-github" target="_blank" rel="noopener noreferrer" aria-label="Github">
												<FaGithubSquare size={'1.5em'} color={'#fff'} />
											</a>
										</li>
										<li>
											<a href="https://www.instagram.com/aposudevsky/" className="fa-instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
												<FaInstagramSquare size={'1.5em'} color={'#fff'} />
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/in/andrey-posudevsky/" className="fa-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
												<FaLinkedin size={'1.5em'} color={'#fff'} />
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="https://calendly.com/aposudevsky/intro-call" target={'__blank'} className="button primary">Schedule a free call</a>
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
