import React, { PropTypes } from 'react';
import './Resume.css';
import PageBar from '/Volumes/Main Drive/Test_WebSite_2/src/Components/Pagebar.js';
import Education from '/Volumes/Main Drive/Test_WebSite_2/src/Components/resumeEducation.js';
import Skills from '/Volumes/Main Drive/Test_WebSite_2/src/Components/resumeSkills.js';
import Work from '/Volumes/Main Drive/Test_WebSite_2/src/Components/resumeWork.js';
import Profile from '/Volumes/Main Drive/Test_WebSite_2/src/Components/resumeProfile.js';



    const Resume = props => {
      const profileData = props.jsonObj.basics;
      const workData = props.jsonObj.work;
      const skillsData = props.jsonObj.skills;
      const educationData = props.jsonObj.education;
      // console.log(profileData)
      return (
              <div>
                <div>
                  <PageBar />
                  <aside >
                    <div>
                      <Profile profileData={profileData} />
                    </div>
                  </aside>
                  <main>
                    <div >
                      <Education educationData={educationData} />
                      <Skills skillsData={skillsData} />
                      <Work workData={workData} />
                    </div>
                  </main>
                </div>
              </div>
            )
    };

Resume.propTypes = {jsonObj: PropTypes.object.isRequired}

export default Resume;
