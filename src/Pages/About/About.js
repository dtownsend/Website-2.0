import React, { Component } from 'react';
import './About.css';
import PageBar from '/Volumes/Main Drive/Test_WebSite_2/src/Components/Pagebar.js';

class About extends Component {
  render(){
    return(
      <div>
        <div>
          <PageBar/>
        </div>
        <div>
          <h1>About Page</h1>
        </div>
      </div>
    );
  }
}


export default About;
