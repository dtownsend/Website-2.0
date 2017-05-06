import React from 'react';
import {Label} from 'react-bootstrap';
import FaCogs from 'react-icons/lib/fa/cogs';



    const Skills = props => {
      const getSkills = props.skillsData[0].keywords.map(function(item, index) {
        return (<li><Label bsStyle="success">{item}</Label></li>)
        });


    return(
      <section className="skills">
        <h2 className="text-uppercase"><FaCogs />Skills</h2>
        <ul className="skills-list">{getSkills}</ul>
      </section>
    )

  };



export default Skills;
