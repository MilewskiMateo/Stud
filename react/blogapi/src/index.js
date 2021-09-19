import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {VideoListPage} from './Pages/VideoListPage';
import {Header} from './components/Header';
import Footer from './components/Footer';
import {HomePage} from "./Pages/HomePage";
import {HowPage} from "./Pages/HowPage";
import {VideoPage} from "./Pages/VideoPage";

const routing = (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/videos" component={VideoListPage}/>
            <Route exact path="/how" component={HowPage}/>
            <Route exact path="/video" component={VideoPage}/>
        </Switch>
        <Footer/>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
