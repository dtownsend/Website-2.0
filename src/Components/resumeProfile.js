import React from 'react';
import FaLocationArrow from 'react-icons/lib/fa/location-arrow';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaFilePdfO from 'react-icons/lib/fa/file-pdf-o';
import FaLinkedinSquare from 'react-icons/lib/fa/file-pdf-o';



const Profile = props => {
    const profileObj = props.profileData;
    return
      <div>
        <div className="profileImg"><img className="img-circle center-block" src={profileObj.picture} width="200" /></div>
        <h1 className="text-center">{profileObj.name}</h1>
        <h2 className="text-center">{profileObj.label}</h2>
        <div className="divider"></div>
        <ul className="list-unstyled contact-links text-center">
          <li><FaLocationArrow />{profileObj.location.city}, {profileObj.location.region}, {profileObj.location.countryCode}</li>
          <li><FaEnvelope /><a href="mailto:{profileObj.email}">{profileObj.email}</a></li>
          <li><FaFilePdfO /><a href="src/Pages/Resume/TownsendDavidResume_current_2O17.pdf"></a><FaLinkedinSquare /><a href="https://www.linkedin.com/in/david-townsend-0999242/"></a></li>
        </ul>
      </div>
};

export default Profile;
