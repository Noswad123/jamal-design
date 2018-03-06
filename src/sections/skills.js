import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../js/styles/styles';
import { Link} from 'react-router-dom';
const Container=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-around;
  height:100vh;
  width:100%;
  padding:64px;
  font-family:${Styles.font.text};
  button{
    display:block;
    border:none;
    background-color:${Styles.grey};
    color:white;
    border-radius:${Styles.size.m};
    height:${Styles.size.m};
    width:${Styles.size.xl};
    font-family:${Styles.font.text};
    font-size:${Styles.size.s};
    cursor:pointer;
    
  }
  box-sizing:border-box;
  a{
    text-decoration:none;
  }
  @media (max-width:780px){
    display:block;
    text-align:center;
    button{
      position:absolute;
      left:50%;
      transform:translateX(-50%);
    }
  }
  
`
const Title=styled.div`
font-family:${Styles.font.header};
font-size:${Styles.size.l};
margin-bottom:${Styles.size.l};
border-bottom:solid ${Styles.color.accent}`

const SkillList1=styled.div`
display:flex;
width:100%;
flex-wrap:wrap;
justify-content:space-between;
box-sizing:border-box;
ul{
  margin:5px;
  list-style-type:none;
  text-align:center;
}
img{
  height:${Styles.size.xl};
}
@media (max-width:780px){
  display:none;
}
`
const SkillList2=styled.div`
display:none;
flex-direction:column;
width:100%;
flex-wrap:wrap;
align-items:center;
justify-content:space-around;
box-sizing:border-box;
ul{
  margin:5px;
  list-style-type:none;
  padding:0;
}
img{
  height:${Styles.size.xl};
}
@media (max-width:780px){
 display:flex;
}
`
const List=styled.div`
`
const Emphasize=styled.div`
font-size:${Styles.size.m};
font-familly:${Styles.font.title};
margin-bottom:20px;
`
export default class Skills extends Component {
    render() {
      return (
        <Container>
              <Title>My Skills</Title>
      <SkillList1>
      <section>
          <img src={"./img/react.png"} alt="react"/>
          <Emphasize>Frontend</Emphasize>
          <List>
            <ul>
          <li>HTML</li>
          <li>CSS/SASS</li>
          <li>Angular</li>
          <li>React</li>
          </ul>
          </List>
          </section>
        <section>
        <List>
            <ul>
        <img src={"./img/mongo.png"} alt="mongodb"/>
          <Emphasize>Database</Emphasize>
          <li>SQL</li>
          <li>NoSQL</li>
          </ul>
          </List>
          </section>
        <section>
        <img src={"./img/angular.svg"} alt="angular"/>
        <List>
            <ul>
          <Emphasize>Logic</Emphasize>
          <li>Javascript</li>
          <li>Python</li>
          </ul>
          </List>
          </section>
        <section>
        <img src={"./img/js.png"} alt="js"/>
          <Emphasize>Backend</Emphasize>
          <List>
            <ul>
          <li>Expressjs</li>
          <li>Nodejs</li>
          </ul>
          </List>
         </section>
      </SkillList1>
      <SkillList2>
      <section>
          <img src={"./img/react.png"} alt="react"/>
          <Emphasize>Frontend</Emphasize>
          <List>
            <ul>
          <li>HTML</li>
          <li>CSS/SASS</li>
          <li>Angular</li>
          <li>React</li>
          </ul>
          </List>
          </section>
        <section>
        <List>
            <ul>
        <img src={"./img/mongo.png"} alt="mongodb"/>
          <Emphasize>Database</Emphasize>
          <li>SQL</li>
          <li>NoSQL</li>
          </ul>
          </List>
          </section>
        <section>
        <img src={"./img/angular.svg"} alt="angular"/>
        <List>
            <ul>
          <Emphasize>Logic</Emphasize>
          <li>Javascript</li>
          <li>Python</li>
          </ul>
          </List>
          </section>
        <section>
        <img src={"./img/js.png"} alt="js"/>
          <Emphasize>Backend</Emphasize>
          <List>
            <ul>
          <li>Expressjs</li>
          <li>Nodejs</li>
          </ul>
          </List>
         </section>
      </SkillList2>

      <Link to="/portfolio"><button>Portfolio</button></Link>
    </Container>
  )
}
}