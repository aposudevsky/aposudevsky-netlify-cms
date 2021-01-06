import React from 'react'
import PropTypes from 'prop-types'
import {GrGatsbyjs} from '@react-icons/all-files/gr/GrGatsbyjs';
import {SiPhp} from '@react-icons/all-files/si/SiPhp';
import {FaReact} from '@react-icons/all-files/fa/FaReact';
import {FaDrupal} from '@react-icons/all-files/fa/FaDrupal';
import {FaMobileAlt} from '@react-icons/all-files/fa/FaMobileAlt';
import {FaFileCode} from '@react-icons/all-files/fa/FaFileCode';

const iconsComponents = {
  GrGatsbyjs : GrGatsbyjs,
  SiPhp: SiPhp,
  FaReact: FaReact,
  FaDrupal: FaDrupal,
  FaMobileAlt: FaMobileAlt,
  FaFileCode: FaFileCode
}

const FeatureGrid = ({ gridItems, heading, subheading }) => (

  <>
    <section id="technologies" className="wrapper style3-alt fade-up">
        <div className="inner">
            <h2>{ heading }</h2>
            <p>{ subheading }</p>
            <div className="features">

              {gridItems.map(item => {
                const ComponentName = iconsComponents[item.icon];
                return (
                  <section key={item.text}>
                    <ComponentName size={'2.5em'} className={'icon'} color={'#312450'} />
                    <h3>{ item.title }</h3>
                    <p>{item.text}</p>
                  </section>
                )
              })}

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
