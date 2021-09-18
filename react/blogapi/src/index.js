import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import VideosPage from './Pages/VideosPage';
import {Header} from './components/Header';
import Footer from './components/Footer';
import {HomePage} from "./Pages/HomePage";

const routing = (
    <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/videos" component={VideosPage}/>
            </Switch>
            <Footer/>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
