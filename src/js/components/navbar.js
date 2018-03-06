import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import Styles from '../styles/styles'

const Container=styled.div`
background-color: ${Styles.color.primary};
color:${Styles.color.font1};
z-index:100;
width:100%;
    height: 10vh
    margin: 0;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  a{
    text-decoration:none;
  }
    img {
      height: 40px;
  }
`
const Links=styled.ul`
list-style: none;
li{
  display: inline-block;
  font-size:${Styles.size.s};
  color:white;
  margin-right:20px;
  padding: 8px;
  border:solid ${Styles.color.primary};
  &:hover{
    border:solid ${Styles.color.secondary};
    a{
      color:${Styles.color.accent};
      text-decoration:none;
      
     
    }
  }
  a{
    color:${Styles.color.font1};
    text-decoration:none;
    font-family:${Styles.font.text};
  }
}
`
const Name=styled.div`
font-family:${Styles.font.header};
  color:${Styles.color.font1};
  font-size:${Styles.size.m};
`
export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Link to="/"><Name>Jamal Dawson</Name></Link>
        <Links>
          <li>
            <Link  to="/aboutme">About</Link>
          </li>
          <li>
            <Link  to="/skills"> Skills</Link>
          </li>
          <li>
            <Link  to="/portfolio"> Portfolio</Link>
            </li>
          <li>
            <Link to="/contactme">Contact</Link>
          </li>
          
        </Links>
      </Container>
    );
  }
}

