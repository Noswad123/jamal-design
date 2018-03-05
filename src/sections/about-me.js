import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../js/styles/styles';
import { Link} from 'react-router-dom';
const Container=styled.div`
display:flex;
height:100vh;
flex-direction:column;
justify-content:space-between;
align-items:center;
color:${Styles.color.font1};
padding:100px 64px;
font-family:${Styles.font.text};
background-color:${Styles.color.primary};
button{
  margin-top:20px;
  border-radius:${Styles.size.m};
  height:${Styles.size.m};
  width:${Styles.size.xl};
  border:none;  
  background-color:white;
  font-size:${Styles.size.s};
  font-family:${Styles.font.text};
  cursor:pointer;
}
p{
  width:60%;
}
@media (max-width:970px){
  p{
    width:80%;
  }
}

`

const Title=styled.div`
font-family:${Styles.font.header};
font-size:${Styles.size.l};
border-bottom:solid ${Styles.color.accent}`



export default class AboutMe extends Component {
    render() {
      return (
        <Container>
            <Title>About Me</Title>
          <p>For six years, I taught high school mathematics. It was very rewarding to see my students mature. However, I felt unfufilled. I longed for to be more creative on a day to day basis. Through much soul-searching, I began journey as a web-developer. Even though there are many days, where I want to throw my computer across the room, I'm glad I switched to the programming field. I continue to support students through an organization I co-founded, SWAG to college. During my free time, I play basketball and disc golf. Life is good. I can't complain.</p>

          <Link to="/skills"><button >My Skills</button></Link>
        </Container>
  )
}
}

