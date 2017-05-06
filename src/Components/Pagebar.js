// (this is confusing and a tad bad) THe PageBar is the MenuBar filled out
import React, { Component } from 'react';
import MenuBar from './MenuBar.js'



class PageBar extends Component{
  render (){
    return(
      <div>
        <MenuBar Name="Inside David Townsend's Brain"
          LinkName1="Thoughts" Link1="/App.js"
          LinkName2="About" Link2="/About.js"
          LinkName3="Ideas" Link3="/Ideas.js"
          LinkName4="Resume" Link4="/Resume.js"/>
      </div>
    );
  }
}

export default PageBar;
