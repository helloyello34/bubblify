import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import '../styles/site.css';
import '../styles/site.less';

{/* <Route path="/home" component={home} />; */}
ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
