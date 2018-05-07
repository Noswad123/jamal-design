import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../js/styles/styles";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: white;
  box-sizing: border-box;
  font-family: ${Styles.font.text};
  button {
    border-radius: ${Styles.size.m};
    height: ${Styles.size.m};
    width: ${Styles.size.xl};
    border: none;
  }
  p {
    margin-bottom: 64px;
  }
  @media (max-width: 685px) {
    padding: 50px 20px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 90%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    img {
      height: 50px;
      margin-bottom: 15px;
    }
    a {
      color: black;
      &:hover {
        color: ${Styles.color.accent};
      }
    }
  }
  @media (max-width: 685px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Header = styled.div`
  font-family: ${Styles.font.header};
  font-size: ${Styles.size.l};
  border-bottom: solid ${Styles.color.accent};
`;
export default class ContactMe extends Component {
  render() {
    return (
      <Container>
        <Header>Let's Connect!</Header>
        <p>
          {" "}
          Have a project you need assistance with? Let me know. I would be eager
          to lend a hand.
        </p>
        <Wrapper>
          <div>
            <img src={"./img/phone.png"} alt="linkedin" />
            (832)6074333
          </div>

          <div>
            <img src={"./img/linkedin.png"} alt="linkedin" />
            <a href="https://www.linkedin.com/in/jamal-dawson/">LinkedIn</a>
          </div>

          <div>
            <img src={"./img/github.png"} alt="linkedin" />
            <a href="https://github.com/Noswad123">Github</a>
          </div>

          <div>
            <img src={"./img/email.png"} alt="linkedin" />
            jamal.a.dawson@gmail.com
          </div>
        </Wrapper>
      </Container>
    );
  }
}
