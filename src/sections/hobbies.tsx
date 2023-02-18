import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Styles } from "../styles";

const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 64px;
  font-family: ${Styles.font.text};
  button {
    border: none;
    background-color: ${Styles.grey};
    color: white;
    border-radius: ${Styles.size.m};
    height: ${Styles.size.m};
    width: ${Styles.size.xl};
    font-family: ${Styles.font.title};
    font-size: ${Styles.size.s};
    cursor: pointer;
    margin-top:20px;
    &:hover{
      background-color: ${Styles.color.primary};
    }
  }
  box-sizing: border-box;
  a {
    text-decoration: none;
    margin-top: 50px;
    font-family: ${Styles.font.title};
  }
  @media (max-width: 940px) {
    display: block;
    text-align: center;
  }
`;
const Title = styled.div`
  font-family: ${Styles.font.header};
  font-size: ${Styles.size.l};
  margin-bottom: ${Styles.size.l};
  border-bottom: solid ${Styles.color.accent};
`;

const SkillList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;

  img {
    height: ${Styles.size.xl};
  }
  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
`;
const Emphasize = styled.div`
  font-size: ${Styles.size.m};
  font-family: ${Styles.font.header};
  margin-bottom: 20px;
`;

export class Hobbies extends Component {
  render() {
    return (
      <MyContainer>
        <Title>My Hobbies</Title>
       <div>Tech</div>
       <div>Aviation</div>
       <div>Disc Golf</div>
       <div>Music</div>
       <div>Basketball</div>
       <div>Food & Drink</div>
      </MyContainer>
    );
  }
}
