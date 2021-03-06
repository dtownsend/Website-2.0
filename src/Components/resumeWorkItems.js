import React from 'react';
import moment from 'moment';



    const WorkItem = props => {
        const getWorkDates = () => {
            const startdate = moment(props.workItemData.startDate).format('MMM, YYYY');
            let enddate = null;
            if (props.workItemData.endDate !== '') {
              enddate = moment(props.workItemData.endDate).format('MMM, YYYY');
            } else {
              enddate = 'Present';
            }

            return <span className='startdate'>{startdate} - {enddate}</span>
        }

        const getHighlights = props.workItemData.highlights.map(function(item, index) {
            return (<li key={index}>{item}</li>)
        });


    return (
        <div className="workItem">
          <h3>{this.props.workItemData.position}, <span>{this.props.workItemData.company}</span></h3>
          <p className="workDates">{this.getWorkDates()}</p>
          <p>{this.props.workItemData.summary}</p>
          <ul>{getHighlights}</ul>
        </div>
      )
    };



export default WorkItem;
