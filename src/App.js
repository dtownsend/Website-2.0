import React, { Component } from 'react';
import './App.css';
import IntroPanel from './Components/IntroPanel.js'
import AboutPanel from './Components/AboutPanel.js'
import PageBar from './Components/Pagebar.js'





class App extends Component {
  render() {

    return (
          //The App page is sub for Thoughts
      <div>
        <div >
          <PageBar/>
        </div>
        <div className="move-intro">
          <IntroPanel/>
        </div>
        <div className="move-about" id="move-pos">
          <AboutPanel/>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
