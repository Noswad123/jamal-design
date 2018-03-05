import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../js/styles/styles';


const Container=styled.div`
display:flex;
height:100vh;
flex-direction:column;
justify-content:center;
align-items:center;
background-color: white;
font-family:${Styles.font.text};
p{
  margin-top:50px;
}
ul{
  margin-top:130px;
  list-type-style:none;
  li{
    display:inline-block;
    margin-right:100px;
    div{
      display:flex;
      flex-direction:column;
      align-items:center;
      a{
        color:black;
        &:hover{
          color:${Styles.color.accent};
        }
      }
    }
    img{
      height:50px;
      margin-bottom:15px;
    }
  }
}
button{
  border-radius:${Styles.size.m};
  height:${Styles.size.m};
  width:${Styles.size.xl};
  border:none;
}`

const Header=styled.div`
font-family:${Styles.font.header};
font-size:${Styles.size.l};
border-bottom:solid ${Styles.color.accent}`
export default class ContactMe extends Component {
    render() {
      return (
        <Container>
           <Header>Let's Connect!</Header>
       <p> Have a project you need assistance with? Let me know. I would be eager to lend a hand.</p>
        <ul>
          <li>
            <div>
              <img src={"./img/phone.png"} alt="linkedin"/>
              (832)6074333
            </div>
          </li>
          <li>
             <div> 
                <img src={"./img/linkedin.png"} alt="linkedin"/>
                <a href="https://www.linkedin.com/in/jamal-dawson/">LinkedIn</a>
              </div>
          </li>
          <li>
              <div>
                <img src={"./img/github.png"} alt="linkedin"/>
                <a href="https://github.com/Noswad123">Github</a>
              </div>
          </li>
          <li>
            <div>
              <img src={"./img/email.png"} alt="linkedin"/>
              jamal.a.dawson@gmail.com
            </div>
            </li>
        </ul>
        </Container>
  )
}
}