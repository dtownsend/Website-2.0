import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
bootstrapUtils.addStyle('point');


const InfoPoints =({Glyph, Disc, Place})=>(
  <div>
    <style type="text/css">
    {`
      .point{
        text-align: left;
        color: gray;
        font-size: 13px;
        margin-bottom: 0px;
      }
      #pointPos{
        position: relative;
        left: 10px;
      }
      .pointf{
        color: black;
      }
    `}
    </style>
    <div>
      <p className="point"><Glyphicon glyph={Glyph}/>
      <span id="pointPos">{Disc}<span className="pointf">{Place}</span></span>
      </p>
    </div>
  </div>
);

export default InfoPoints;
