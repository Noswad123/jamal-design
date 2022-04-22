
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from "react-router-dom";
import './index.css'
import {Navbar} from './components/navbar';
import styled from 'styled-components';
import { Header } from './sections';

const Container = styled.div`
margin: 0;
`;

ReactDOM.render(
  <BrowserRouter>
    <Container>
    <Navbar />
    <Header/>
    </Container>
  </BrowserRouter>,
  document.getElementById("root")
);

