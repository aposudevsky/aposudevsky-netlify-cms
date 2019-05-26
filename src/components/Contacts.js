import React from 'react'
import { Link } from 'gatsby'
import ContactForm from './ContactForm';

const Contacts = class extends React.Component {
  render() {
    return (
			<section id="three" class="wrapper style1 fade-up">
				<div class="inner">
					<h2>Get in touch</h2>
					<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
					<div class="split style1">
						<section>
							<ContactForm />
						</section>
						<section>
							<ul class="contact">
								<li>
									<h3>Address</h3>
									<span>12345 Somewhere Road #654<br />
									Nashville, TN 00000-0000<br />
									USA</span>
								</li>
								<li>
									<h3>Email</h3>
									<a href="mailto:hi@andrey.vision">hi@andrey.vision</a>
								</li>
								<li>
									<h3>Phone</h3>
									<span>(000) 000-0000</span>
								</li>
								<li>
									<h3>Social</h3>
									<ul class="icons">
										<li><Link to="https://twitter.com/APosudevsky" class="fa-twitter"><span class="label">Twitter</span></Link></li>
										<li><a href="#" class="fa-facebook"><span class="label">Facebook</span></a></li>
										<li><a href="#" class="fa-github"><span class="label">GitHub</span></a></li>
										<li><a href="#" class="fa-instagram"><span class="label">Instagram</span></a></li>
										<li><a href="#" class="fa-linkedin"><span class="label">LinkedIn</span></a></li>
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
