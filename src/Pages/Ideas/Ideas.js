import React, { Component } from 'react';
import './Ideas.css';
import PageBar from '/Volumes/Main Drive/Test_WebSite_2/src/Components/Pagebar.js';

class Ideas extends Component {
  render(){
    return(
      <div>
        <div>
          <PageBar/>
        </div>
        <div>
          <h1>Ideas Page</h1>
        </div>
      </div>
    );
  }
}

export default Ideas;
