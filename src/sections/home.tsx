import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Styles } from "../styles";

const Container = styled.div`
  display: flex;
  min-height: 500px;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background-image: url("./img/header.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${Styles.color.font1};
  font-size: ${Styles.size.s};
  button {
    border-radius: ${Styles.size.m};
    height: ${Styles.size.m};
    width: ${Styles.size.xl};
    background-color: ${Styles.color.primary};
    border: none;
    color: ${Styles.color.font1};
    font-family: ${Styles.font.title};
    font-size: ${Styles.size.s};
    cursor: pointer;
    &:hover {
      background-color: white;
      color: ${Styles.grey};
    }
  }
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const Title = styled.div`
  margin-bottom: ${Styles.size.l};
  font-family: ${Styles.font.title};
  font-size: ${Styles.size.m};
  border-bottom: solid ${Styles.color.accent};
  @media (max-width: 560px) {
    font-size: ${Styles.size.s};
  }
`;

const Blurb = styled.div`
  margin-bottom: ${Styles.size.l};
  font-family: ${Styles.font.text};
  @media (max-width: 560px) {
    width: 80%;
  }
`;

export class Home extends Component {
  render() {
    return (
      <Container>
        <Title>Jamal Dawson</Title>
        <Blurb>A true problem solver at heart.</Blurb>
        <Link to="/aboutme">
          <button>About Me</button>
        </Link>
      </Container>
    );
  }
}
