import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, IndexRoute } from "react-router";
import './index.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

import Root from './Root.js'
import App from './App.js'
import About from './Pages/About/About.js'
import Ideas from './Pages/Ideas/Ideas.js'
import Resume from './Pages/Resume/Resume.js'
import PageNotFound from './Pages/PageNotFound/PageNotFound.js'

const json = require('/Volumes/Main Drive/Test_WebSite_2/src/Pages/Resume/resume.json');


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={App}/>
      <Route path="/About.js" component={About} />
      <Route path="/Ideas.js" component={Ideas} />
      <Route path="/Resume.js" component={Resume} />
      <Route path="/App.js" component={App} />
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>,

document.getElementById('root')
);

ReactDOM.render(
    <Resume jsonObj={json}/>,
document.getElementById('Resume')
);
