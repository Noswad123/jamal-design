
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './index.css'
import {Navbar} from './components/navbar';
import styled from 'styled-components';
import { AboutMe, ContactMe, Home, Portfolio, Skills } from './sections';

const Container = styled.div`
margin: 0;
`;

export const Paths = {
  home: '/',
  aboutMe: '/aboutme',
  contactMe: '/contactMe',
  portfolio: '/portfolio',
  skills: '/skills'
}


ReactDOM.render(
  <BrowserRouter>
    <Container>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path={Paths.aboutMe} element={<AboutMe/>}></Route>
      <Route path={Paths.portfolio} element={<Portfolio/>}></Route>
      <Route path={Paths.skills} element={<Skills/>}></Route>
      <Route path={Paths.contactMe} element={<ContactMe/>}></Route>
    </Routes>
    </Container>
  </BrowserRouter>,
  document.getElementById("root")
);

