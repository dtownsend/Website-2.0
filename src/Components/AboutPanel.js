import React, { Component } from 'react';
import {Panel, Glyphicon} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import InfoPoints from './InfoPoints.js'

bootstrapUtils.addStyle(Panel,'About');

class AboutPanel extends Component {
  render() {
    return(
      <div>
        <style type="text/css">
        {`
          .panel-About{
              width: 300px;
              height: 170px;
              border: 1px solid gray;
              border-radius: 0px;
            }

            #AboutPos{

              left: 0px;
              top: 450px;
            }
          .abouttitle{
            text-align: left;
            font-weight: Bold;
            font-size: 14px;
          }
          `}
        </style>
        <div>
          <Panel bsStyle="About" id="AboutPos">
            <p className="abouttitle" id="abouttitlePos">about</p>
              <InfoPoints Glyph="education" Disc="Went to " Place="The Academy of Art San Francisco"/>
              <InfoPoints Glyph="education" Disc="Graduated from " Place="Syreacuse University"/>
              <InfoPoints Glyph="briefcase" Disc="Worked at " Place="Oculus"/>
              <InfoPoints Glyph="home" Disc="Live in " Place="San Francisco, CA"/>
              <InfoPoints Glyph="globe" Disc="Raised in " Place="Richmond, VA"/>
              <InfoPoints Glyph="globe" Disc="Born in " Place="Buffalo, NY"/>
          </Panel>
        </div>
      </div>
    );
  }
}



export default AboutPanel;
