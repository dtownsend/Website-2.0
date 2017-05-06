import React from 'react';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';
import moment from 'moment';



    const Education = props => {
        const getEducation = props.educationData.map(function(item, index) {
      		const startdate = moment(item.startDate).format('MMM, YYYY');
      		const enddate = moment(item.endDate).format('MMM, YYYY');
      		return (
              <div key={index}>
                <h3>{item.studyType} {item.area}</h3>
      				  <h4>{item.institution}</h4>
      				  <p>Studied: {startdate} - {enddate}</p>
      				</div>
            )
      	});


    return(
      <section className="education">
        <h2 className="text-uppercase"><FaGraduationCap />Education</h2>
        {getEducation}
      </section>
      )
    };



export default Education;
