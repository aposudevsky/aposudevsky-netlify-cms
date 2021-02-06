import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export const Reviews = () => (
  <section id={'reviews'} className={'style2-alt wrapper reviews'}>
    <div className={'inner'}>
      <h2>What people say about my work</h2>
      <div className={'features'}>
        <Carousel
          autoPlay={false}
          infiniteLoop={false}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          swipeable={true}
          interval={6100}
        >
          <div className={'review'}>
            <h3>Maarten Voermans</h3>
            <h5>Managing director @ We are you</h5>
            <i>January 26, 2021, Maarten was colleague of Andrey</i>
            
            <div>I have worked with Andrey for over 1.5 years. 
              During this time I got to know him as a very knowledgeable colleague with a lot of knowledge in the field of PHP and Drupal. 
              He is always looking for cooperation and tries to find the maximum added value from a customer perspective. 
              As an architect in the team, he prepares things carefully, so that he can inform the team properly. 
              Quality is central to the execution of his work.
            </div>
          </div>
          <div className={'review'}>
            <h3>Gábor Mészáros</h3>
            <h5>Sr. Drupal Backend Developer at We are you</h5>
            <i>January 29, 2021, Gábor was colleague of Andrey</i>
            
            <div>Andrey is an exceptional professional. 
              We worked together at We are you and as a Tech Lead he demonstrates an outstanding level of knowledge 
              and deep understanding of the applied technologies especially in Drupal. 
              His work ethics is immaculate and great to work together with.
            </div>
          </div>
          <div className={'review'}>
            <h3>Frederique Nagtegaal</h3>
            <h5>Advisor Online Communications @ Dutch Hospital Association</h5>
            <i>December 8, 2020, Frederique was a client of Andrey's</i>
            
            <div>Andrey and I have worked together in the same Scrum team for a few years. A very pleasant experience. 
              Andrey is not only good at the technical development of our NVZ websites, but he is also an excellent communicator. 
              He says what he does and does what he says. 
              He works quickly and thoroughly, and picks up the phone when he has questions that need to be answered to get the best possible result. 
              I've enjoyed working with him and hope to cross paths again in the future!
            </div>
          </div>
          <div className={'review'}>
            <h3>Debby Block</h3>
            <h5>Head of Marketing and Sales at Avans+</h5>
            <i>December 28, 2020, Debby was a client of Andrey's</i>
            <div>I worked with Andrey for about 5 years. He was our back-end developer for the website, 
              as well for support as for performance improvement. 
              He has a lot of knowledge and is an absolute specialist in his profession. 
              He always thinks solution-oriented and tries to be one step ahead. He shows a lot of patience when things not work out directly. 
              I have always experienced him as a very accessible and pleasant person to work with. We will miss him at Avans+ !
            </div>
          </div>
          <div className={'review'}>
            <h3>Carolien Eijkens</h3>
            <h5>Marketer at Avans+</h5>
            <i>January 4, 2021, Carolien was a client of Andrey's</i>
            <div>I worked with Andrey since the beginning of the new website of Avans+, about 4 years ago. 
              As our back-end developer he helped us very well with support and improvement of the website. 
              Andrey comes up with several solutions for adjustments on the site and clearly explains the pros and cons. 
              In my experience: a developer who thinks along and knows what he is talking about.
            </div>
          </div>
          <div className={'review'}>
            <h3>Yauhen Zenko</h3>
            <h5>CTO | Co-Owner @ Solvy</h5>
            <i>April 4, 2013, Yauhen managed Andrey directly</i>
            <div>Andrey is a very skilled and experienced software developer. 
              Enthusiastic, inventive, accurate, responsible, initiative. Good at problem solving and finding optimal solutions. 
              Always ready for challenging and nontrivial, exceptional tasks. 
              He is a good team player with advanced social skills and can be an informal leader.
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  </section>
)