import React from 'react';
import WorkItem from './resumeWorkItems.js';
import FaBuilding from 'react-icons/lib/fa/building';


    const Work = props => {
    const getWorkExperience = () => {
        const workItems = [];
        props.workData.forEach((val, index) => {
          workItems.push(<WorkItem key={index} workItemData={val}/>);
        })
        return workItems;
    }
    return(
      <section className="work">
        <h2 className="text-uppercase"><FaBuilding />Work Experience</h2>
        {this.getWorkExperience()}
      </section>
      );
    };



export default Work;
