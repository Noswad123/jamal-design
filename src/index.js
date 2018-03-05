import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import Navbar from './js/components/navbar';
import styled from "styled-components";
import App from './App';
import Portfolio from './sections/portfolio';
import ContactMe from './sections/contact';
import Skills from './sections/skills';
import Header from './sections/header';
import AboutMe from './sections/about-me';


const Container=styled.div`
`
ReactDOM.render(
    <BrowserRouter>
        <Container>
            <Navbar/>
                <Route path="/app" component={App} />
                <Route path="/skills" component={Skills} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contactme" component={ContactMe} />
                <Route exact path="/" component={Header} />
        </Container>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
