import { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  padding: 20px;
  overflow: hidden;
  background-color: #09335d;
  color: white;
`;

export default class Footer extends Component {
  render() {
    return <Container>Footer</Container>;
  }
}
