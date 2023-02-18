import React, { Component } from "react";
import styled from "styled-components";
import { Styles } from "../styles";
import { Link } from "react-router-dom";
import { Paths } from "../common";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  color: ${Styles.color.font1};
  padding: 100px 34px;
  font-family: ${Styles.font.text};
  background-color: ${Styles.color.primary};
  button {
    margin-top: 20px;
    border-radius: ${Styles.size.m};
    height: ${Styles.size.m};
    width: ${Styles.size.xl};
    border: none;
    background-color: white;
    font-size: ${Styles.size.s};
    font-family: ${Styles.font.title};
    cursor: pointer;
    &:hover {
      background-color: ${Styles.grey};
      color: white;
    }
  }
  p {
    line-height: 1.5;
    font-size: 20px;
  }
  @media (max-width: 900px) {
    padding: 100px 34px;
    p {
      width: 80%;
    }
  }
  @media (max-width: 550px) {
    padding: 100px 34px;
    min-height: 80vh;
    p {
      width: 100%;
      font-size: ${Styles.size.s};
    }
  }
  @media (max-width: 360px) {
    padding: 100px 34px;
    min-height: 70vh;
    div {
      font-size: ${Styles.size.m};
    }
    p {
      width: 100%;
      font-size: 10px;
    }
  }
`;

const Title = styled.div`
  font-family: ${Styles.font.header};
  font-size: ${Styles.size.l};
  border-bottom: solid ${Styles.color.accent};
`;

export class AboutMe extends Component {
  render() {
    return (
      <Container>
        <Title>About Me</Title>
        <p>
          A professional button pusher by trade, but my interests are all over
          the place.
        </p>

        <Link to={Paths.hobbies}>
          <button>My Hobbies</button>
        </Link>
      </Container>
    );
  }
}
