import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../js/styles/styles';
import { Link} from 'react-router-dom';

const Container=styled.div`
display:flex;
height:100vh;
width:100%;
flex-direction:column;
justify-content:center;
background-image:url("./img/header.jpg");
background-size:cover;
background-repeat:no-repeat;
background-position:center;
color:${Styles.color.font1};
font-size:${Styles.size.s};
button{
  border-radius:${Styles.size.m};
  height:${Styles.size.m};
  width:${Styles.size.xl};
  background-color:${Styles.color.primary};
  border:none;
  color:${Styles.color.font1};
  font-family:${Styles.font.text};
  font-size:${Styles.size.s};
}
align-items:center;
`

const Title=styled.div`
margin-bottom:${Styles.size.l};
font-family:${Styles.font.title};
font-size:${Styles.size.m};
border-bottom:solid ${Styles.color.accent}`

const Blurb=styled.div`
margin-bottom:${Styles.size.l};
font-family:${Styles.font.text};`


export default class Header extends Component {
    render() {
      return (
        <Container>
            <Title>Full-Stack Web Developer</Title>
          <Blurb>A true problem solver at heart. I enjoy building apps that make life easier.</Blurb>
          <button>About Me</button>
            </Container>
      )
    }
}