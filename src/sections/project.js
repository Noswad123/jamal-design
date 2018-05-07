import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../js/styles/styles";

const Container = styled.div`
  display: flex;
  font-family: ${Styles.font.text};
  width: 30%;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: ${Styles.grey};
  margin-bottom: 50px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  z-index: 1;
  @media (max-width: 975px) {
    width: 50%;
  }
  @media (max-width: 765px) {
    width: 100%;
  }
`;
const Picture = styled.img`
  height: 150px;
`;
const Name = styled.div``;
const Info = styled.div`
  display: none;
  position: absolute;
  background-color: ${Styles.grey};
  opacity: 0.9;
`;
const Description = styled.div``;
const Availability = styled.div``;
const Status = styled.div``;

export default class Project extends Component {
  render() {
    return (
      <Container onClick={() => this.props.openPopUp(this.props.id)}>
        <Picture src={this.props.img} />
        <Name>{this.props.name}</Name>
        <Info>
          <Description>{this.props.description}</Description>
          <Availability />
          <Status>{this.props.status}</Status>
        </Info>
      </Container>
    );
  }
}
