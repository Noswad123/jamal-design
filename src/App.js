import React, { Component } from 'react';
import Header from './sections/header';
import AboutMe from './sections/about-me';
import Skills from './sections/skills';
import Portfolio from './sections/portfolio';
import ContactMe from './sections/contact';
import styled from 'styled-components';

const Container=styled.div`
min-height:80vh;
display:flex;
flex-direction:column;
align-items:center;
`

class App extends Component {
  constructor() {
    super();
    this.state={index: 0};
  }
  handleShow(i) {
    this.setState({index: i});
    console.log(this.refs["1"])
    console.log(i);
    //this.refs["1"].scrollIntoView();
  }
  render() {
    return (
      <Container>
        <Header />
        <AboutMe />
        <Skills />
        <Portfolio />
        <ContactMe />
      </Container>
    );
  }
}

export default App;
