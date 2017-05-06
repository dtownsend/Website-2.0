import React from 'react';
import {Panel, Image} from 'react-bootstrap';
import galaxy from '/Volumes/Main Drive/Test_WebSite_2/src/Assets/galaxy.jpg';
import David from '/Volumes/Main Drive/Test_WebSite_2/src/Assets/David.jpg';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
bootstrapUtils.addStyle(Panel,'main','backgroundImg');

const IntroPanel =()=>(
<div>
  <style type="text/css">
  {`
    .panel-backgroundImg{
        width: 300px;
        height: 150px;
        border: 1px solid gray;
        border-radius: 0px;
     }

     #background{
       position: relative;

     }

     .galaxy-background{
         width: 298px;
         height: 148px;
        }

      #galaxy-pos{
        position: relative;
        left: -15px;
        top: -15px;
      }

     .DavidProp{
       width: 80px;
       height: 80px;
       border-radius: 50%;
       border: 1px solid gray;
       box-shadow: 0 0 0 3px white, 0 0 0 4px gray;
     }

     #DavidPos{
       position: relative;
       left: 110px;
       top: -235px;
     }

     .panel-main {
         width: 300px;
         height: 150px;
         border-radius: 0px;
         border: 1px solid gray;
         padding-bottom: 0px !importnt;
         padding-top: 0px !importnt;
         right: 200px;
         }

     #mainPanel{
       position: relative;
       top: -20px;
       left: 0px;
    }

    .Name{
      font-weight: Bold;
    }

    #NamePos{
      position: relative;
      top: 25px;
      left: 81px;

    }

    .Intro{

    }

    #IntroPos{
      position: relative;
      top: 20px;
      left: 10.5px;
    }

    #IntroPosF{
      position: relative;
      top: -5px;
      left: 5px;
    }

    .sighting{
      font-style: oblique;
      font-size: 14px;
      font-weight: Bold;
    }

    #sightingPos{
      position: relative;
      left: 160px;
    }
  `}

  </style>
  <div>
    <Panel bsStyle="backgroundImg" id="background">
      <img src={galaxy} className="galaxy-background" id="galaxy-pos" alt="backgroundImg"/>
    </Panel>
    <Panel bsStyle="main" id="mainPanel">
      <p className="Name" id="NamePos">
        David Townsend
      </p>
      <p className="Intro" id="IntroPos">
        "I am a Leaf on the wind, Watch how I <span id="IntroPosF">soar"</span>
          <p id="sightingPos">-Wash, <span className="sighting">Serenity</span></p>
      </p>
    </Panel>
  </div>
    <div>
      <Image src={David} className="DavidProp" id="DavidPos" />
    </div>
  </div>
);

export default IntroPanel;
