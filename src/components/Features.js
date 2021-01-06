import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ gridItems, heading, subheading }) => (

  <>
    <section id="technologies" className="wrapper style3 fade-up">
        <div className="inner">
            <h2>{ heading }</h2>
            <p>{ subheading }</p>
            <div className="features">

              {gridItems.map(item => (
                <section key={item.text}>
                  <span className={ "icon major " + item.icon } />
                  <h3>{ item.title }</h3>
                  <p>{item.text}</p>
                </section>
              ))}

            </div>
            {/*
            <ul className="actions">
                <li><a href="generic.html" className="button">Learn more</a></li>
            </ul>
            */}
        </div>
    </section>


  </>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

export default FeatureGrid;
